import express from 'express';
import { Applicant } from '../models/Applicant.js';

const router = express.Router();

// POST: Create a new applicant
router.post('/', async (req, res) => {
  try {
    console.log('📝 Received applicant form:', req.body);
    const { name, phone, desiredRole, desiredSalary, needsAssistance } = req.body;

    if (!name || !phone || !desiredRole || !desiredSalary) {
      console.log('❌ Missing required fields');
      return res.status(400).json({ error: 'All fields are required' });
    }

    const applicant = new Applicant({
      name,
      phone,
      desiredRole,
      desiredSalary,
      needsAssistance,
    });

    const saved = await applicant.save();
    console.log('✓ Applicant saved to MongoDB:', saved);
    res.status(201).json({ message: 'Applicant registered successfully', data: saved });
  } catch (error) {
    console.error('❌ Error saving applicant:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve all applicants
router.get('/', async (req, res) => {
  try {
    const applicants = await Applicant.find().sort({ createdAt: -1 });
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve a single applicant by ID
router.get('/:id', async (req, res) => {
  try {
    const applicant = await Applicant.findById(req.params.id);
    if (!applicant) {
      return res.status(404).json({ error: 'Applicant not found' });
    }
    res.json(applicant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
