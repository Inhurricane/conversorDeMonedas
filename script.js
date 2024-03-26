var nombreUsuario = prompt("Ingrese su nombre");

var saludo = alert("Hola " + nombreUsuario + ", bienvenido a nuestro conversor de monedas...");

var monedaUsuario;
var monedasValidas = ["USD", "COP", "EUR", "YEN", "BTC"];

do {
    monedaUsuario = prompt("Por favor ingrese la moneda que desea convertir \nLas opciones disponibles son: USD, COP, EUR, YEN y BTC");
} while (!monedasValidas.includes(monedaUsuario.toUpperCase()));

switch (monedaUsuario) {

    case "USD":
        var USD = prompt("La moneda seleccionada es dolar, por favor ingrese la cantidad de dolares que desea convertir");
        var conversionUSD = prompt("Por favor ingrese la moneda a la que desea convertir los dolares (COP, EUR, YEN y BTC)");
        
        if (conversionUSD == "COP") {
            var cotizacionEnCOP = 3887.00;
            var conversionTotal = USD * cotizacionEnCOP;
            conversionTotal = conversionTotal.toFixed(0);
            alert("La conversion total es " + conversionTotal + " COP");
        }
        else if (conversionUSD == "EUR") {
            var cotizacionEnEUR = 0.92;
            var conversionTotal = USD * cotizacionEnEUR;
            conversionTotal = conversionTotal.toFixed(2);
            alert("La conversion total es " + conversionTotal + " EUR");
        }
        else if (conversionUSD == "YEN") {
            var cotizacionEnYEN = 151.38;
            var conversionTotal = USD * cotizacionEnYEN;
            conversionTotal = conversionTotal.toFixed(0);
            alert("La conversion total es " + conversionTotal + " YEN");
        }
        else if (conversionUSD == "BTC") {
            var cotizacionEnBTC = 0.00012;
            var conversionTotal = USD * cotizacionEnBTC;
            conversionTotal = conversionTotal.toFixed(8);
            alert("La conversion total es " + conversionTotal + " BTC");
        }
        break;

    case "COP":
        var COP = prompt("La moneda seleccionada es peso colombiano, por favor ingrese la cantidad de pesos que desea convertir");
        var conversionCOP = prompt("Por favor ingrese la moneda a la que desea convertir los pesos colombianos (COP, EUR, YEN)");

        if (conversionCOP == "USD") {
            var cotizacionEnUSD = 0.00026;
            var conversionTotal = COP * cotizacionEnUSD;
            conversionTotal = conversionTotal.toFixed(2);
            alert("La conversion total es " + conversionTotal + " USD");
        }
        else if (conversionCOP == "EUR") {
            var cotizacionEnEUR = 0.00024;
            var conversionTotal = COP * cotizacionEnEUR;
            conversionTotal = conversionTotal.toFixed(2);
            alert("La conversion total es " + conversionTotal + " EUR");
        }
        else if (conversionCOP == "YEN") {
            var cotizacionEnYEN = 0.039;
            var conversionTotal = COP * cotizacionEnYEN;
            conversionTotal = conversionTotal.toFixed(0);
            alert("La conversion total es " + conversionTotal + " YEN");
        }
        break;

    case "EUR":
        var EUR = prompt("La moneda seleccionada es euro, por favor ingrese la cantidad de euros que desea convertir");
        var conversionEUR = prompt("Por favor ingrese la moneda a la que desea convertir los dolares (COP, EUR, YEN y BTC)");

        if (conversionEUR == "COP") {
            var cotizacionEnCOP = 4213.24;
            var conversionTotal = EUR * cotizacionEnCOP;
            conversionTotal = conversionTotal.toFixed(0);
            alert("La conversion total es " + conversionTotal + " COP");
        }
        else if (conversionEUR == "USD") {
            var cotizacionEnUSD = 1.08;
            var conversionTotal = EUR * cotizacionEnUSD;
            conversionTotal = conversionTotal.toFixed(2);
            alert("La conversion total es " + conversionTotal + " USD");
        }
        else if (conversionEUR == "YEN") {
            var cotizacionEnYEN = 164.10;
            var conversionTotal = EUR * cotizacionEnYEN;
            conversionTotal = conversionTotal.toFixed(0);
            alert("La conversion total es " + conversionTotal + " YEN");
        }
        else if (conversionEUR == "BTC") {
            var cotizacionEnBTC = 0.000015;
            var conversionTotal = EUR * cotizacionEnBTC;
            conversionTotal = conversionTotal.toFixed(8);
            alert("La conversion total es " + conversionTotal + " BTC");
        }
        break;
    
    case "YEN":
        var YEN = prompt("La moneda seleccionada es yen, por favor ingrese la cantidad de yenes que desea convertir");
        var conversionYEN = prompt("Por favor ingrese la moneda a la que desea convertir los dolares (COP, EUR, YEN)");

        if (conversionYEN == "COP") {
            var cotizacionEnCOP = 25.68;
            var conversionTotal = YEN * cotizacionEnCOP;
            conversionTotal = conversionTotal.toFixed(0);
            alert("La conversion total es " + conversionTotal + " COP");
        }
        else if (conversionYEN == "USD") {
            var cotizacionEnUSD = 0.0066;
            var conversionTotal = YEN * cotizacionEnUSD;
            conversionTotal = conversionTotal.toFixed(2);
            alert("La conversion total es " + conversionTotal + " USD");
        }
        else if (conversionYEN == "EUR") {
            var cotizacionEnEUR = 0.0061;
            var conversionTotal = YEN * cotizacionEnEUR;
            conversionTotal = conversionTotal.toFixed(0);
            alert("La conversion total es " + conversionTotal + " YEN");
        }
        break;

    case "BTC":
        var BTC = prompt("Ha seleccionado Bitcoin, por favor ingrese la cantidad de bitcoins que desea convertir");
        var conversionBTC = prompt("Por favor ingrese la moneda a la que desea convertir los dolares (COP, EUR, YEN y BTC)");
        
        if (conversionBTC == "COP") {
            var cotizacionEnCOP = 274091027.60;
            var conversionTotal = BTC * cotizacionEnCOP;
            conversionTotal = conversionTotal.toFixed(0);
            alert("La conversion total es " + conversionTotal + " COP");
        }
        else if (conversionBTC == "EUR") {
            var cotizacionEnEUR = 65036.19;
            var conversionTotal = BTC * cotizacionEnEUR;
            conversionTotal = conversionTotal.toFixed(2);
            alert("La conversion total es " + conversionTotal + " EUR");
        }
        else if (conversionBTC == "YEN") {
            var cotizacionEnYEN = 10673523.27;
            var conversionTotal = BTC * cotizacionEnYEN;
            conversionTotal = conversionTotal.toFixed(0);
            alert("La conversion total es " + conversionTotal + " YEN");
        }
        else if (conversionBTC == "USD") {
            var cotizacionEnUSD = 70515.60;
            var conversionTotal = BTC * cotizacionEnBTC;
            conversionTotal = conversionTotal.toFixed(8);
            alert("La conversion total es " + conversionTotal + " BTC");
        }
        break;

    default:
        alert("La moneda seleccionada no es valida, por favor intente de nuevo");
        break;
 
}