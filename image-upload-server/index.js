const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
// app.use(cors({ origin: 'http://localhost:5173' })); // Adjust the origin as needed
app.use(cors());

// Set up storage location and filename for multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // saves files with unique name
  }
});

const upload = multer({ storage });

// Create uploads directory if it doesn't exist
const fs = require('fs');
const dir = './uploads/';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Endpoint to handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    // File was uploaded successfully
    res.json({ imageUrl: `http://localhost:${PORT}/uploads/${req.file.filename}` });
  } catch (err) {
    res.status(500).send('Error uploading file');
  }
});

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});