//GET 
const listaProductos = () => {
    fetch("http://localhost:3000/producto")
        .then((respuesta) => respuesta.json())
        .catch((error) => console.log(error));
}

const agregarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => {
        return respuesta.json();
    })
}

//POST

const crearProducto = (name, imageUrl, price) => {
    return fetch(`http://localhost:3000/producto`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            imageUrl,
            price,
        }),
    }).then((respuesta) => {
        if (respuesta.ok) {
            return respuesta.body;
        }
        throw new Error('No fue posible crear el producto!');
    });
};

// PATCH

const alterarProducto = async (id, name, price, description) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            description,
        }),
    })
        .then((respuesta) => {
            return respuesta.json();
        })
        .catch((error) = console.log(error));
}

// DELETE
const borrarProducto = async (id) => {
    return await fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const conexionProductos = {
    listaProductos,
    agregarProducto,
    crearProducto,
    alterarProducto,
    borrarProducto,
};

