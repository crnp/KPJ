import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/utils/connection';
import { ResponseFuncs } from '@/utils/types';

export const config = {
  api: {
    externalResolver: true,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  const catcher = (error: Error) => res.status(400).json({ error });

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Taslim } = await connect(); // connect to database
      res.json(await Taslim.find({}).catch(catcher));
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Taslim } = await connect();
      res.json(await Taslim.create(req.body).catch(catcher));
    },
  };

  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: 'No Response for this request' });
};

export default handler;
