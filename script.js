var nombreUsuario = prompt("Ingrese su nombre");
nombreUsuario = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1).toLowerCase(); // convierte la primera letra del nombre en mayuscula y el resto en minuscula

var saludo = alert("Hola " + nombreUsuario + ", bienvenido a nuestro conversor de monedas...");

var monedaUsuario;
var monedasValidas = ["USD", "COP", "EUR", "YEN", "BTC"]; // array con las monedas validas

// arrays con las monedas validas para cada moneda
var monedaValidaUSD = ["COP", "EUR", "YEN", "BTC"]; 
var monedaValidaCOP = ["USD", "EUR", "YEN"]; 
var monedaValidaEUR = ["COP", "USD", "YEN", "BTC"]; 
var monedavalidaYEN = ["COP", "USD", "EUR"];
var monedavalidaBTC = ["COP", "EUR", "YEN"];

do {
    monedaUsuario = prompt("Por favor ingrese la moneda que desea convertir \nLas opciones disponibles son: USD, COP, EUR, YEN y BTC");
} while (!monedasValidas.includes(monedaUsuario.toUpperCase())); // valida que la moneda ingresada sea valida entre las opciones, si no lo es, pide que se ingrese de nuevo

monedaUsuario = monedaUsuario.toUpperCase(); // convierte la moneda ingresada en mayusculas para que el Switch pueda leerla

//En el ejercicio se supone una tasa de cambio estimada

switch (monedaUsuario) {

    case "USD":
        var USD = parseFloat(prompt("La moneda seleccionada es dolar, por favor ingrese la cantidad de dolares que desea convertir"));
        do {
            conversionUSD = prompt("Por favor ingrese la moneda que desea convertir \nLas opciones disponibles son: COP, EUR, YEN y BTC");
        } while (!monedaValidaUSD.includes(conversionUSD.toUpperCase())); // valida que la moneda ingresada sea valida entre las opciones, si no lo es, pide que se ingrese de nuevo
        conversionUSD = conversionUSD.toUpperCase();

        //var conversionUSD = prompt("Por favor ingrese la moneda a la que desea convertir los dolares (COP, EUR, YEN y BTC)");
        //conversionUSD = conversionUSD.toUpperCase(); // anteriormente solo validaba la conversion a mayusculas, ahora valida que la conversion sea valida entre las opciones

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
        var COP = parseInt(prompt("La moneda seleccionada es peso colombiano, por favor ingrese la cantidad de pesos que desea convertir"));
        do {
            conversionCOP = prompt("Por favor ingrese la moneda que desea convertir \nLas opciones disponibles son: USD, EUR, YEN");
        } while (!monedaValidaCOP.includes(conversionCOP.toUpperCase()));

        // var conversionCOP = prompt("Por favor ingrese la moneda a la que desea convertir los pesos colombianos (USD, EUR, YEN)");
        // conversionCOP = conversionCOP.toUpperCase();
        
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
        var EUR = parseFloat(prompt("La moneda seleccionada es euro, por favor ingrese la cantidad de euros que desea convertir"));
        do {
            conversionEUR = prompt("Por favor ingrese la moneda que desea convertir \nLas opciones disponibles son: COP, USD, YEN y BTC");
        } while (!monedaValidaEUR.includes(conversionEUR.toUpperCase()));

        // var conversionEUR = prompt("Por favor ingrese la moneda a la que desea convertir los dolares (COP, EUR, YEN y BTC)");
        // conversionEUR = conversionEUR.toUpperCase();

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
        var YEN = parseFloat(prompt("La moneda seleccionada es yen, por favor ingrese la cantidad de yenes que desea convertir"));
        do {
            conversionYEN = prompt("Por favor ingrese la moneda que desea convertir \nLas opciones disponibles son: COP, USD, EUR");
        } while (!monedavalidaYEN.includes(conversionYEN.toUpperCase()));
        
        // var conversionYEN = prompt("Por favor ingrese la moneda a la que desea convertir los dolares (COP, EUR, YEN)");
        // conversionYEN = conversionYEN.toUpperCase();

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
        var BTC = parseFloat(prompt("Ha seleccionado Bitcoin, por favor ingrese la cantidad de bitcoins que desea convertir"));
        do {
            conversionBTC = prompt("Por favor ingrese la moneda que desea convertir \nLas opciones disponibles son: COP, USD, EUR y YEN");
        } while (!monedavalidaBTC.includes(conversionBTC.toUpperCase()));

        // var conversionBTC = prompt("Por favor ingrese la moneda a la que desea convertir los dolares (COP, EUR, YEN y BTC)");
        // conversionBTC = conversionBTC.toUpperCase();

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
