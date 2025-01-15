//EJERCICIO 1
let distancia;

distancia=prompt('Indique distancia a viajar.', '');

switch(true){
    case distancia <= 0:
        document.write('Distancia no válida');
        break;
    case distancia <= 1000:
        document.write('El transporte apropiado es a pie.');
        break;
    case distancia <= 10000:
        document.write('El transporte apropiado es bicicleta.');
        break;
    case distancia <= 30000:
        mdocument.write('El transporte apropiado es colectivo.');
        break;
    case distancia <= 100000:
        document.write('El transporte apropiado es auto.');
        break;
    case distancia > 100000:
        document.write('El transporte apropiado es avion.');
        break;

}
//ejercicio 2
const numeros = [12, 45, 67, 89, 23, 56, 91, 34];
let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
document.write("<br>");
document.write(`El número mayor es: ${mayor}`);