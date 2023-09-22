const express = require('express');
const Router = express.Router();

const { downloadApp } = require('../controllers/appControllers');

Router.route('/download').get(downloadApp);

module.exports = Router;