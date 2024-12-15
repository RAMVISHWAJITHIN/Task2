const Nudge = require('../models/Nudge');

// Controller function to handle creating a new Nudge
exports.createNudge = async (req, res) => {
  try {
    // Log received data for debugging purposes
    console.log("Received Nudge Data:", req.body);

    // Create a new Nudge instance using the request body
    const newNudge = new Nudge(req.body);

    // Save the Nudge to the database
    const savedNudge = await newNudge.save();

    // Send back a success response with the saved nudge data
    res.status(201).json(savedNudge);
  } catch (error) {
    // Log and send back an error if something goes wrong
    console.error("Error creating nudge:", error);
    res.status(500).json({ error: "Failed to create nudge" });
  }
};





// Fetch all Nudges
exports.getNudges = async (req, res) => {
  try {
    const nudges = await Nudge.find();
    res.status(200).json(nudges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Fetch a single Nudge
exports.getNudgeById = async (req, res) => {
  try {
    const nudge = await Nudge.findById(req.params.id);
    if (!nudge) return res.status(404).json({ message: 'Nudge not found' });
    res.status(200).json(nudge);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a Nudge
exports.updateNudge = async (req, res) => {
  try {
    const updates = req.body;
    if (req.file) updates.imageUrl = req.file.path;
    if (updates.timings) updates.timings = JSON.parse(updates.timings);

    const updatedNudge = await Nudge.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updatedNudge) return res.status(404).json({ message: 'Nudge not found' });
    res.status(200).json(updatedNudge);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a Nudge
exports.deleteNudge = async (req, res) => {
  try {
    const deletedNudge = await Nudge.findByIdAndDelete(req.params.id);
    if (!deletedNudge) return res.status(404).json({ message: 'Nudge not found' });
    res.status(200).json({ message: 'Nudge deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all Nudges
exports.getAllNudges = async (req, res) => {
  try {
    const nudges = await Nudge.find(); // Fetch all nudges
    res.status(200).json(nudges);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch nudges" });
  }
};