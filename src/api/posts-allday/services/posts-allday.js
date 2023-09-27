'use strict';

/**
 * posts-allday service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::posts-allday.posts-allday');
