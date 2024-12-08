// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Job API',
      description: 'API for managing job listings and users',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:4000/api',
      },
    ],
  },
  apis: ['./routes/*.js', './controllers/*.js', './models/*.js'], // Include your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
