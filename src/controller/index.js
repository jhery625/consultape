const consulta = require("./consulta.controller")
const sunat = require("./sunat-tipocambio.controller")

function searchRuc(req, res) {
    let additional = (req.params.ruc).trim().startsWith('1');
    consulta.getSunatInformation(req.params.ruc, additional, function (error, data) {
        if (error) {
            res.status(500).send(error);
        }
        res.status(200).send(data);
    });
}
function searchSunatDni(req, res) {
    consulta.getSunatDniInformation(req.params.dni, function (error, data) {
        if (error) {
            res.status(500).send(error);
        }
        res.status(200).send(data);
    });
}

function searchMultiRuc(req, res) {
    consulta.getSunatInformation(req.body, true, function (error, data) {
        if (error) {
            res.status(500).send(error);
        }
        res.status(200).send(data);
    });
}

function searchDni(req, res) {
    consulta.getJneInformation(req.params.dni, function (error, data) {
        if (error) {
            res.status(500).send(error);
        }
        res.status(200).send(data);
    });
}

function searchEssaludDni(req, res) {
    consulta.getEssaludInformation(req.params.dni, function (error, data) {
        if (error) {
            res.status(500).send(error);
        }
        res.status(200).send(data);
    });
}

function getSunatTipoCambioPorDia(req, res) {
    sunat.getTipoCambioPorDia(req.params.year, req.params.month, req.params.day, function (error, data) {
        if (error) {
            res.status(500).send(error);
        }
        res.status(200).send(data);
    });
}
function getSunatTipoCambio(req, res) {
    sunat.getTipoCambio(req.params.year, req.params.month, function (error, data) {
        if (error) {
            res.status(500).send(error);
        }
        res.status(200).send(data);
    });
}
function getSunatTipoCambioActual(req, res) {
    sunat.getTipoCambioActual(function (error, data) {
        if (error) {
            res.status(500).send(error);
        }
        res.status(200).send(data);
    });
}

module.exports = {
    searchRuc,
    searchSunatDni,
    searchDni,
    searchEssaludDni,
    searchMultiRuc,
    getSunatTipoCambio,
    getSunatTipoCambioActual,
    getSunatTipoCambioPorDia
}