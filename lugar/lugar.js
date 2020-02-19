const axios = require('axios');

const getLugarLatLon = async(geo) => {


    let lugar = encodeURI(geo.trim());
    //trim saca los espacios vacios de los costados

    let location = '?location=' + lugar;
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php${location}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '5599b3bb46mshb62cb38eaad2e40p121850jsn71c3f95d0d1d' }
    });


    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${geo}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    // instance.get()
    //     .then(resp => { console.log(resp.data.Results[0]); })
    //     .catch(err => { console.log('ERROR!!!', err); });

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLon,
}