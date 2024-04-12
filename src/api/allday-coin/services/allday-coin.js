'use strict';

/**
 * allday-coin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::allday-coin.allday-coin');
