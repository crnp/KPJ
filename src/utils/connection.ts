import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define database URI.');
}

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGODB_URI as string)
    .catch((err) => console.log(err));
  console.log('Connection established');

  const TaslimSchema = new mongoose.Schema({
    nama: String,
  });

  const Taslim =
    mongoose.models.Taslim || mongoose.model('Taslim', TaslimSchema);

  return { conn, Taslim };
};
