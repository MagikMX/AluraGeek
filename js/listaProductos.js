import { conexionProductos } from './conexionProductos.js';
import { formatoMoneda } from './formatoMoneda.js';

const obtenerProductos = (name, price, imageUrl, id) => {
    const card = document.createElement("div");

    const contenido = `
    <div class="producto">
        <div class="container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/delete.png" alt="Deletar" />
            </button>
            
            <a href="../screens/edit-product.html?id=${id}">
            
              <button class="buttonEdit" type="button">
                <img class="editImage" src="../assets/edit.png" alt="Editar" />
              </button>
            
            </a>
        </div>
        
        <img src="${imageUrl}" alt="img">
        <h1 class="product-name"> ${name} </h1>
        <p class="precio">${formatoMoneda(price)}</p>
    </div>`;

    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
};

const productos = document.querySelector("[data-todoProductos]");

productos.addEventListener("click", async (e) => {
    let borrarBoton = e.target.closest("[data-id]");
    if (borrarBoton) {
        const producto = e.dataset.id;
        conexionProductos.borrarProducto(id).then((respuesta) => {
            producto.remove();
            console.log(respuesta);
        }).catch((err) => console.log(err));
    }
});

const render = async () => {
    try {
        const listaProductos = await conexionProducto.listarProductos();
        listaProductos.forEach((producto) => {
            productos.appendChild(
                obtenerProductos(
                    producto.name,
                    producto.price,
                    producto.imageUrl,
                    producto.id
                )
            );
        });
    } catch (err) {
        console.log(err);
    }
};

render();