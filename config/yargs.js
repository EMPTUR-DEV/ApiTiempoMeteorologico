opt = {
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para el tiempo.',
        demand: true
    }

}

const argv = require('yargs').options({ opt }).argv;


module.exports = {
    argv
}