'use strict'
const url = 'https://www.sbs.gob.pe/app/spp/empleadores/comisiones_spp/Paginas/comision_prima.aspx';
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function ComisionSbs(req, res) {
    var arr = [];
    var models = [];
    let periodo = (req.params.year).padStart(4, '0') + "-" + (req.params.month).padStart(2, '0');

    const browser = await puppeteer.launch({
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.type('#cboPeriodo', periodo);
    await page.click('input[type="submit"]');
    await page.waitForSelector('.JER_filaContenido');
    var html = await page.content();
    const $ = cheerio.load(html);
    $('tr.JER_filaContenido > td').toArray().map(item => {
        arr.push($(item).text().trim().replace("%", ""))
    });
    for (var i = 0; i < arr.length; i++) {
        if (i == 0 || i == 8 || i == 16 || i == 24) {
            models.push({
                nombreComision: arr[i],
                comisionFija: Number(arr[i + 1]),
                comisionSobreFlujo: Number(arr[i + 2]),
                comisionSobreFlujoMixta: Number(arr[i + 3]),
                comisionAnualMixta: Number(arr[i + 4]),
                primaSeguro: Number(arr[i + 5]),
                aporteObligatorio: Number(arr[i + 6]),
                remuneracionMaxima: Number(arr[i + 7].replace(",", ""))
            });
            i = i + 7;
        }
    }
    res.status(200).send({ items: models });
    await browser.close();  
}
module.exports = {
    ComisionSbs
}