const consulta = require('../controller/index');

const initializeEndPoints = (app) => {
    app.get("/public/api/ruc/:ruc", consulta.searchRuc);
    app.get("/public/api/dni/:dni", consulta.searchDni);
    app.post("/public/api/ruc", consulta.searchMultiRuc);
}

module.exports = initializeEndPoints;