
let registroStorage = JSON.parse(localStorage.getItem("registro"));

if (!registroStorage || !registroStorage.email) {
    window.location = "./registro.js"
}