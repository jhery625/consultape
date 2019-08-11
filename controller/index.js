const consulta = require("./consulta.controller")

function searchRuc(req, res) {
    let additional = (req.params.ruc).trim().startsWith('1');
    consulta.getSunatInformation(req.params.ruc, additional, function (error, data) {
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

module.exports = {
    searchRuc,
    searchDni,
    searchMultiRuc
}