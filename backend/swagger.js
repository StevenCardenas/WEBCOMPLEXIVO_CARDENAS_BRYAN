import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'inmobiliariaAPI',
      version: '1.0.0',
      description: 'Api de la inmobiliaria',
    },
  },
  apis: ['controladores/inmueble.js'],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };