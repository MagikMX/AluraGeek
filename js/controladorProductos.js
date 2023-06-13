import { conexionProductos } from "./conexionProductos.js";
import { formatoMoneda } from "./formatoMoneda.js";

const nuevoProducto = (name, price, imageUrl, id) => {
    const tarjeta = document.createElement("div");
    const contenido = `
    <div class="producto">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="precio">${formatoMoneda(price)}</p>
            <a class="ver-producto" href="../produto.html?id=${id}">Ver Producto</a>
        </div>`;

    tarjeta.innerHTML = contenido;
    tarjeta.dataset.id = id;

    return tarjeta;
}

const productos = document.querySelector("[data-producto]");

const render = async () => {
    try {
        const listaProductos = await conexionProductos.listaProductos();
        listaProductos.forEach((elemento) => {
            productos.appendChild(
                nuevoProducto(
                    elemento.name,
                    elemento.price,
                    elemento.imageUrl,
                    elemento.id
                )
            );
        });
    } catch (error) {
        console.log(error);

    }
};

render();