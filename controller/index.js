const consulta = require("./consulta.controller")

function searchRuc(req, res) {
    consulta.getSunatInformation(req.params.ruc, function (error, data) {
        if (error) {
            res.status(500).send(error);
        }
        res.status(200).send(data);
    });
}

function searchMultiRuc(req, res) {
    consulta.getSunatInformation(req.body, function (error, data) {
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

// consulta.getSunatInformation("20131312955", function (error, data) {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
// });

// consulta.getSunatInformation(['20101266819', '20508316985', '20537979381'], function (error, data) {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
// });

// consulta.getJneInformation("46658592", function (error, data) {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
// });
