import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/utils/connection';
import { ResponseFuncs } from '@/utils/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  const catcher = (error: Error) => res.status(400).json({ error });

  const id: string = req.query.id as string;

  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Taslim } = await connect(); // connect to database
      res.json(await Taslim.findById(id).catch(catcher));
    },
    // RESPONSE PUT REQUESTS
    // PUT: async (req: NextApiRequest, res: NextApiResponse) => {
    //   const { Taslim } = await connect(); // connect to database
    //   res.json(
    //     await Taslim.findByIdAndUpdate(id, req.body, { new: true }).catch(
    //       catcher
    //     )
    //   );
    // },
    // RESPONSE FOR DELETE REQUESTS
    DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Taslim } = await connect(); // connect to database
      res.json(await Taslim.findByIdAndRemove(id).catch(catcher));
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: 'No Response for This Request' });
};

export default handler;
