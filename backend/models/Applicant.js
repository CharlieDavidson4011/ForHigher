import mongoose from 'mongoose';

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  desiredRole: { type: String, required: true },
  desiredSalary: { type: String, required: true },
  needsAssistance: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Applicant = mongoose.model('Applicant', applicantSchema);
