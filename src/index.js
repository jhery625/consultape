
const app = require('./app');

async function main() {
    await app.listen(app.get('PORT'));
    console.info('>>> Open http://localhost:%s/ in your browser.', app.get('PORT')); 
}

main();
