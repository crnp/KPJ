import { Schema, models, model } from 'mongoose';

const nameSchema = new Schema({
  name: String,
});

const Names = models.name || model('name', nameSchema);
export default Names;
