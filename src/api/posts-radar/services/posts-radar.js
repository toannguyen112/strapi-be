'use strict';

/**
 * posts-radar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::posts-radar.posts-radar');
