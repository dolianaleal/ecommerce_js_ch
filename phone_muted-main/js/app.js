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


// Cree una funcion para consultar productos


const productos = [
    { id: 1, nombre: "gorra rosada by poms", precio: 1500 },
    { id: 2, nombre: "gorra adiddas", precio: 1800 },
    { id: 3, nombre: "gorra verde by poms", precio: 1200 },
    { id: 4, nombre: "gorra negra nike", precio: 700 },
    { id: 5, nombre: "gorra gris puma", precio: 850 },
];

function consultarProductos(productos)

function consultarServicios(servicios) {

    let mensajeOpciones = "";

    for (let index = 0; index < servicios.length; index++) {
        const servicio = servicios[index];

        mensajeOpciones = mensajeOpciones + "El servicio de " + servicio.nombre + " tiene un valor de " + servicio.precio + " pesos argentinos ,";
    }

    alert(mensajeOpciones);
}

function contratarServicios(servicios) {

    const serviciosSeleccionados = [];
    let mensajeProductosSeleccionados = "";

    for (let index = 0; index < servicios.length; index++) {
        const servicio = servicios[index];

        const seleccionServicio = prompt(`"Si desea aquirir el servicio de " ${servicio.nombre} que tiene un valor de ${servicio.precio} marque Si, de lo contrario marque No`).toLowerCase();

        if (seleccionServicio === "si") {
            serviciosSeleccionados.push(servicio);
        }
    }
    let sumaServicios = 0;

    for (let index = 0; index < serviciosSeleccionados.length; index++) {
        const servicioSeleccionado = serviciosSeleccionados[index];

        mensajeProductosSeleccionados = mensajeProductosSeleccionados + "Usted selecciono el servicio de " + servicioSeleccionado.nombre + " con un valor de " + servicioSeleccionado.precio + " \n";

        sumaServicios = sumaServicios + servicioSeleccionado.precio
    }




    alert(mensajeProductosSeleccionados + " y su total a pagar es de " + sumaServicios);
}


function buscarServicio(servicios) {
    let nombreDeServicio = prompt(" Ingrese el servicio que necesita").toLowerCase();

    const servicioSeleccionado = servicios.find(servicio => {
        if (nombreDeServicio === servicio.nombre) {
            return true
        }

    });

    if (!servicioSeleccionado) {
        alert(" este servicio no fue encontrado");
    }
    else {
        alert(" Ud selecciono " + servicioSeleccionado.nombre + " y ese servicio tiene un valor de " + servicioSeleccionado.precio)
    }

}

const servicios = [
    { id: 1, nombre: "consulta psicologica", precio: 1500 },
    { id: 2, nombre: "consulta psiquiatrica", precio: 1800 },
    { id: 3, nombre: "seminario psicoeducativo", precio: 1200 },
    { id: 4, nombre: "grupo de apoyo", precio: 700 },
    { id: 5, nombre: "evaluacion diagnostica", precio: 850 },
];



const seleccionDeOpcion = prompt("Seleccione A para consultar servicios y precios , o seleccione B para contratar un servicio o seleccione C si quieres buscar la existencia de un servicio").toUpperCase();



if (seleccionDeOpcion === "A") {
    consultarServicios(servicios);
}


if (seleccionDeOpcion === "B") {
    contratarServicios(servicios);
}


if (seleccionDeOpcion === "C") {
    buscarServicio(servicios);

}