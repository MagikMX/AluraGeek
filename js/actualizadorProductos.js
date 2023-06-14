import { conexionProductos } from "./conexionProductos.js";

const obtenerUrl = new URL(window.location);
const id = obtenerUrl.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-url]");
const inputNombre = document.querySelector("[data-nombre]");
const inputPrecio = document.querySelector("[data-precio]");
const inputDescripion = document.querySelector("[data-descripcion]");

conexionProductos.listarProductos(id).then((datos) => {
    inputImageUrl.setAttribute("src", datos.imageUrl);
    inputNombre.value = datos.name;
    inputPrecio.value = datos.price;
    inputDescripion.value = datos.descripcion;
});

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    conexionProducto.alterarProducto(
        id,
        inputNombre.value,
        inputPrecio.value,
        inputDescripion.value
    )
        .then(() => {
            window.location.href = "../pages/index.html";
        })
});