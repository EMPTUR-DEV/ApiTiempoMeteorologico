const axios = require('axios');

const getSituacionActual = async(lat, lon) => {

    let location = '?lat=' + lat + '&lon=' + lon;
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather${location}&appid=be44faaf09505debfb2489da31cfff57&units=metric`, //`api.openweathermap.org/data/2.5/weather${location}&appid=${id}`,
        timeout: 1000,
        //headers: { 'appid': 'be44faaf09505debfb2489da31cfff57' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.main.length === 0) {
        throw new Error(`No hay resultados para ${lat} y ${lon}`);
    }

    const data = respuesta.data.main;
    const temp = data.temp;
    const press = data.pressure;
    const hum = data.humidity;


    return {
        temp,
        press,
        hum
    }


}



module.exports = {
    getSituacionActual,
}