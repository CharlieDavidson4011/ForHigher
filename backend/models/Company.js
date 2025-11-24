import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  website: { type: String, required: true },
  fieldOfWork: { type: String, required: true },
  currentJobs: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Company = mongoose.model('Company', companySchema);
