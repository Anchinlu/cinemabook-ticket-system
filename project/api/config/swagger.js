const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js API with Swagger',
      version: '1.0.0',
      description: 'API documentation for Node.js application using Swagger and Docker',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Đường dẫn tới các file route có Swagger comment
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
