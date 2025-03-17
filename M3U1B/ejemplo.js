const moment = require('moment');
moment.locale('es');
console.log('Naci ' + moment('28/06/1998','dd/mm/yyyy').fromNow());