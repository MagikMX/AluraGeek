const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const user = document.querySelector("[data-user]").value;
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;

    console.log(user);


    if (user.length > 6 && email.length > 6 && password.length > 6) {
        alert("Bienvenido, " + user + "!")
        window.location.href = "../pages/productos.html";
    } else {
        alert("email y contraseña deben contener al menos 5 caracteres.");
    }
});

