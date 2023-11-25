let botonRegistro = document.getElementById("botonRegisto");
botonRegistro.addEventListener("click", (event) => {
    event.preventDefault();

    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;

    let formularioUsuario = {
        nombreUsuario: nombreUsuario,
        email: email,
        contrasena: contrasena
    }

    localStorage.setItem("registro", JSON.stringify(formularioUsuario));

    !email ? Swal.fire("Hola, debes ingresar una direccion de correo para continuar") :  Swal.fire("Hola " + nombreUsuario + ", bienvenid@ a tu tienda favorita")
    .then(() => {
        window.location = "./index.html";
    });
    
});