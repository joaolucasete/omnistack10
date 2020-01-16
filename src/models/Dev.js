import mongoose from 'mongoose';

import PointSchema from './utils/PointSchema.js';

const DevSchema = mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    createIndexes: '2dsphere'
  }
});

export default mongoose.model('Dev', DevSchema);