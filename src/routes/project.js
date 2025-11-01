const express = require('express');
const router = express.Router();
const siteData = require('../controllers/siteData');

router.get('/project/:id', (req, res) => {
  const { id } = req.params;
  const project = siteData.site.projects.find(p => p.id === id);
  if (!project) {
    return res.status(404).render('404', {
      pageTitle: 'Project Not Found',
      pageDescription: 'The project you requested could not be found.',
      ogImage: '/images/og-default.png',
      ogUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
    });
  }
  res.render('project-detail', {
    pageTitle: `${project.title} — Aqsa Khan`,
    pageDescription: project.description,
    ogImage: project.image || '/images/og-default.png',
    ogUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
    project,
  });
});

module.exports = router;