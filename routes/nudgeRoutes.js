const express = require('express');
const router = express.Router();
const { createNudge, getNudges, getNudgeById, updateNudge, deleteNudge } = require('../controllers/nudgeController');

// POST: Create a new nudge (No file upload middleware needed)
router.post('/', createNudge);

// GET: Fetch all nudges
router.get('/', getNudges);

// GET: Fetch a single nudge by ID
router.get('/:id', getNudgeById);

// PUT: Update a nudge (Optional)
router.put('/:id', updateNudge);

// DELETE: Delete a nudge
router.delete('/:id', deleteNudge);

module.exports = router;
