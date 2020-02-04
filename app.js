'use strict';

const lugar = require('./Lugar/lugar');
const clima = require('./Clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'direcion de la ciudad para optener el clima',
    demand: true,
  },
}).argv;
// argv.direccion

// lugar.getLugarLatLng(argv.direccion)
// .then(res => console.log(res));
// .catch(err => console.log({err}, 'error'));

// clima.getClima(40.750000, -74.000000)
// .then(console.log)
// .catch(console.log);

const getInfo = async( direccion ) => {


  try {
      const coords = await lugar.getLugarLatLng( direccion );
      const temp   = await clima.getClima( coords.lat, coords.lng );
      return `El clima de ${ coords.direccion } es de ${ temp }.`;
  } catch (e) {
      return `No se pudo determinar el clima de ${ direccion }`;
  }

}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );