'use strict';

/**
 * wcm-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wcm-service.wcm-service');
