var express = require('express');

var router = express.Router();

var homePage = require('./pages/home');
router.use(homePage);

var contactPage = require('./pages/contact');
router.use(contactPage);

var servicesPage = require('./pages/services');
router.use(servicesPage);

var aboutPage = require('./pages/about');
router.use(aboutPage);

module.exports = router;
