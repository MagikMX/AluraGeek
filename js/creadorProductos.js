import { conexionProductos } from "./conexionProductos.js";

const form = document.querySelector("[data-form]");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const url = document.querySelector("[data-url]").value;
    const precio = document.querySelector("[data-precio]").value;

    conexionProductos.crearProducto(nombre, url, precio).then((respuesta) => {
        window.location.href = "../index.html";
        console.log(respuesta);
    }).catch((err) => {
        console.log(err);
    });
});
