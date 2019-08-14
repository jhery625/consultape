const consulta = require('../controller/index');
const comision = require('../controller/sbs-comision.controller');

const initializeEndPoints = (app) => {
    //sbs
    app.get("/public/api/sbs/:year/:month", comision.ComisionSbs);

    //sunat
    app.post("/public/api/ruc", consulta.searchMultiRuc); 
    app.get("/public/api/ruc/:ruc", consulta.searchRuc);
    app.get("/public/api/tc-sunat/actual", consulta.getSunatTipoCambioActual);
    app.get("/public/api/tc-sunat/:year/:month", consulta.getSunatTipoCambio);
  
    //jne
    app.get("/public/api/dni/:dni", consulta.searchDni); 
};
module.exports = initializeEndPoints;