import express from 'express';
import { Company } from '../models/Company.js';

const router = express.Router();

// POST: Create a new company
router.post('/', async (req, res) => {
  try {
    const { companyName, website, fieldOfWork, currentJobs } = req.body;

    if (!companyName || !website || !fieldOfWork || !currentJobs) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const company = new Company({
      companyName,
      website,
      fieldOfWork,
      currentJobs,
    });

    const saved = await company.save();
    res.status(201).json({ message: 'Company registered successfully', data: saved });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve a single company by ID
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
