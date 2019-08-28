const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

module.exports = (app) => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}