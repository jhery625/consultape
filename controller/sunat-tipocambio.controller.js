const request = require('request-promise-native');
const cheerio = require('cheerio');

const URL = 'http://www.sunat.gob.pe/cl-at-ittipcam/tcS01Alias';

function SunatTipoCambio() { }

SunatTipoCambio.prototype.getTipoCambio = function (ejercicio, periodo, cb) {
    getTipoCambio(ejercicio, periodo, function (err, data) {
        if (err) {
            return cb(err);
        } else {
            return cb(null, data);
        }
    });
}
SunatTipoCambio.prototype.getTipoCambioActual = function (cb) {
    getTipoCambioActual(function (err, data) {
        if (err) {
            return cb(err);
        } else {
            return cb(null, data);
        }
    });
}

async function getTipoCambioActual(callback) {
    try {
        let html = await request(URL);
        const $ = cheerio.load(html);
        const CSS_VENTA = '[class=\'class="form-table"\'] tr:last-child td:nth-last-child(1)';
        const CSS_COMPRA = '[class=\'class="form-table"\'] tr:last-child td:nth-last-child(2)';
        const CSS_DIA = '[class=\'class="form-table"\'] tr:last-child td:nth-last-child(3)';
        const compra = $(CSS_COMPRA).text().trim();
        const venta = $(CSS_VENTA).text().trim();
        const dia = $(CSS_DIA).text().trim();
        return callback({ dia: parseInt(dia), compra: parseFloat(compra), venta: parseFloat(venta) });
    } catch (err) {
        return callback(err);
    }
};

async function getTipoCambio(ejercicio, periodo, callback) {
    try {
        let html = await request(URL + '?mes=' + periodo + '&anho=' + ejercicio);
        const $ = cheerio.load(html);
        let models = [];
        const table = $('[class=\'class="form-table"\'] tr');
        var data = table.map(function (index) {
            var wat = $(this).children();
            if (index != 0) {
                for (let i = 0; i < wat.length; i++) {
                    models.push({
                        dia: parseInt(wat.eq(i).text().trim()),
                        compra: parseFloat(wat.eq(i + 1).text().trim()),
                        venta: parseFloat(wat.eq(i + 2).text().trim())
                    });
                    i = i + 2;
                }
            }
            if (table.length - 1 == index) {
                return models;
            }
        }).get();
        return callback(null, data);
    } catch (err) {
        return callback(err);
    }
};

module.exports = new SunatTipoCambio();