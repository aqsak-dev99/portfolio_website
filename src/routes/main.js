const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Home — Aqsa Khan',
    pageDescription: 'Portfolio of Aqsa Khan — Full Stack Developer specialized in AI & Automation.',
    ogImage: '/images/packages.jpg',
    ogUrl: req.protocol + '://' + req.get('host') + '/',
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About — Aqsa Khan',
    pageDescription: 'About Aqsa Khan and her skills in full-stack, AI, and automation.',
    ogImage: '/images/packages.jpg',
    ogUrl: req.protocol + '://' + req.get('host') + '/about',
  });
});

router.get('/projects', (req, res) => {
  res.render('projects', {
    pageTitle: 'Projects — Aqsa Khan',
    pageDescription: 'Explore featured projects including AI, automation, APIs, and more.',
    ogImage: '/images/packages.jpg',
    ogUrl: req.protocol + '://' + req.get('host') + '/projects',
  });
});

router.get('/services', (req, res) => {
  res.render('services', {
    pageTitle: 'Services — Aqsa Khan',
    pageDescription: 'Professional service packages: Web Dev, AI & Automation, API & Database.',
    ogImage: '/images/packages.jpg',
    ogUrl: req.protocol + '://' + req.get('host') + '/services',
  });
});

router.get('/contact', (req, res) => {
  res.render('contact', {
    pageTitle: 'Contact — Aqsa Khan',
    pageDescription: 'Get in touch via contact form and social links.',
    ogImage: '/images/packages.jpg',
    ogUrl: req.protocol + '://' + req.get('host') + '/contact',
  });
});

module.exports = router;