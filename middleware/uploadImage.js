const multer = require('multer');
const path = require('path');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the folder to store images
    cb(null, 'uploads/'); // The folder should exist in your project
  },
  filename: function (req, file, cb) {
    // Generate a unique filename based on the timestamp
    cb(null, Date.now() + path.extname(file.originalname)); // e.g., 1632838282911.jpg
  },
});

// File filter to allow only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Accept image files
  } else {
    cb(new Error('Only image files are allowed'), false); // Reject non-image files
  }
};

// Initialize multer with the storage configuration, file filter, and file size limit
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
});

module.exports = upload;
