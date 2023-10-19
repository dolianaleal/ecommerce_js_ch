/*let gorras = 0;
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
*/

// Cree una funcion para consultar productos




function consultarProductos(productos) {

    let mensajeOpciones = "";

    for (let index = 0 ; index < productos.length ; index ++) {
        const producto = productos[index];

        mensajeOpciones = mensajeOpciones + " El producto " + producto.nombre + "tiene un valor de " + producto.precio + "pesos argentinos" ;
    }

    alert(mensajeOpciones);
}

// cree una funcion para comprar productos

function comprarProductos (productos){
 const productosSeleccionados = [];
 let mensajeProductosSeleccionados = "";

 for (let index = 0; index < productos.length; index++) {
    const producto = productos[index];

 
    const seleccionProducto = prompt(`"Si quieres la gorra " ${producto.nombre} que tiene un valor de ${producto.precio} marque Si, de lo contrario marque No`).toLowerCase();

    if (seleccionProducto === "si") {
        productosSeleccionados.push(producto);
    }
}

let sumaProductos = 0;

    for (let index = 0; index < productosSeleccionados.length; index++) {
        const productoSeleccionado = productosSeleccionados[index];

        mensajeProductosSeleccionados = mensajeProductosSeleccionados + "Elegiste el producto " + productoSeleccionado.nombre + " con un valor de " + productoSeleccionado.precio + " \n";

        sumaProductos = sumaProductos + productoSeleccionado.precio
    }




    alert(mensajeProductosSeleccionados + " y su total a pagar es de " + sumaProductos);


}


//cree una funcion para buscar productos por separado

function buscarProducto(productos) {
    let nombreDeProducto = prompt(" Ingrese el producto que necesita").toLowerCase();

    const productoSeleccionado = productos.find(producto => {
        if (nombreDeProducto === producto.nombre) {
            return true
        }

    });

    if (!productoSeleccionado) {
        alert(" este producto no fue encontrado");
    }
    else {
        alert(" Ud selecciono " + productoSeleccionado.nombre + " y ese producto tiene un valor de " + productoSeleccionado.precio)
    }

}


// Mi array de productos que utilice en las funciones anteriores


const productos = [
    { id: 1, nombre: "gorra rosada by poms", precio: 1500 },
    { id: 2, nombre: "gorra adiddas", precio: 1800 },
    { id: 3, nombre: "gorra verde by poms", precio: 1200 },
    { id: 4, nombre: "gorra negra nike", precio: 700 },
    { id: 5, nombre: "gorra gris puma", precio: 850 },
];



// En este promt estoy consultandole al usuario que necesita y en base a eso llamar a las funciones antes creadas, segun la necesidad

const seleccionDeOpcion = prompt("Seleccione A para consultar productos y precios, seleccione B para comprar un producto o seleccion C si quieres buscar una gorra en particular ").toUpperCase();


if (seleccionDeOpcion === "A"){
    consultarProductos(productos);
}

if (seleccionDeOpcion === "B"){
    comprarProductos(productos);
}

if (seleccionDeOpcion === "C"){
    buscarProducto(productos);
}