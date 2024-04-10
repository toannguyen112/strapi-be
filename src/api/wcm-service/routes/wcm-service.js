'use strict';

/**
 * wcm-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wcm-service.wcm-service');
