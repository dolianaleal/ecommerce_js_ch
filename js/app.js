let gorras = 0;
let carrito = 0;

// Esta funcion pregunta si desea guardar gorras, y los va sumando, en las variables antes declaradas, usando un ciclo.

function consultadecompra(consulta) {
let respuesta = prompt(consulta)
while (respuesta != "ESC") {
    switch (respuesta) {
    case "si":
        gorras++;
        break;
    case "no":
        alert("Que lastima, seguimos con las opciones de gorras");
        break;

    default:
        alert("Respuesta incorrecta, elegir si o no");
        respuesta = prompt(consulta);
        break;
    }

    break;
}
}

// Esta funcion es la que utiliza la informacion antes declarada y la condiciona a hacer lo que yo necesito.

function sumaDeCompra() {
    if (gorras >= 1) {
        alert("Tus gorras estan en el carrito")
    }
    else {
        alert("Tu carrito esta vacio")
    }
}

// Aca llamo a la funcion consultadecompra y le paso por parametros la consulta

consultadecompra("1. Deseas agregar la gorra byPoms rosada?")
consultadecompra("2. Deseas agregar la gorra byPoms Azul?")
consultadecompra("3. Deseas agregar la gorra Nike negra?")
consultadecompra("4. Deseas agregar la gorra Adiddas roja?")
consultadecompra("5. Deseas agregar la gorra Puma amarilla?")


sumaDeCompra()