require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Site data
const siteData = require('./src/controllers/siteData');

// Routes
const mainRoutes = require('./src/routes/main');
const projectRoutes = require('./src/routes/project');
const contactRoutes = require('./src/routes/contact');
const apiRoutes = require('./src/routes/api');

// Locals for templates
app.use((req, res, next) => {
  res.locals.site = siteData.site;
  res.locals.currentPath = req.path;
  next();
});

app.use('/', mainRoutes);
app.use('/', projectRoutes);
app.use('/', contactRoutes);
app.use('/', apiRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    pageDescription: 'The page you requested could not be found.',
    ogImage: 'https://images.unsplash.com/photo-1517519014922-8fc07a1f0f59?w=1200&q=80&auto=format&fit=crop',
    ogUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
  });
});

module.exports = app;