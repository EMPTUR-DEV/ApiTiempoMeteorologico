const lugar = require('./lugar/lugar');

const tiempo = require('./tiempo/tiempo');

const argv = require('./config/yargs').argv;

let respuesta = 'queti'

const getInfo = async(direccion) => {
    try {
        // lugar.getLugarLatLon(argv.d)
        //     .then(resp => {
        //         console.log(resp);
        //         tiempo.getSituacionActual(resp.lat, resp.lon)
        //             .then(resp => console.log(resp))
        //             .catch(err => console.log(err, 'error'));
        //     })
        //     .catch(console.log);

        const coord = await lugar.getLugarLatLon(direccion);
        const temp = await tiempo.getSituacionActual(coord.lat, coord.lon);
        return `En ${coord.direccion} - Temperatura: ${temp.temp}`;
    } catch {
        return "No funciona";
    }
}

getInfo(argv.d)
    .then(console.log)
    .catch(console.log);