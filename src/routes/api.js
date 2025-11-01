const express = require('express');
const router = express.Router();
const siteData = require('../controllers/siteData');

router.get('/api/projects', (req, res) => {
  res.json({ projects: siteData.site.projects });
});

router.get('/api/certificates', (req, res) => {
  res.json({ certificates: siteData.site.certificates });
});

module.exports = router;