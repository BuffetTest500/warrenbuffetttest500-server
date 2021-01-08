const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cron = require('node-cron');
const shell = require('shelljs');
const env = process.env;

const initLoaders = app => {
  app.use(cors({
    origin: 'https://www.warrenbuffetttest500.site/',
    credentials: true,
  }));
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  cron.schedule('0 0 */1 * * * *', () => {
    console.log('scheduler running every hour..');
    shell.exec('node utils/destroyOldHitData.js');
  });
};

module.exports = initLoaders;
