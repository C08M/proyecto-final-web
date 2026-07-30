
var carritoProductos = [];

var ventanaCarrito = null;

mostrarCarrito();

function mostrarCarrito() {
    var contenedor = document.getElementById("listaCarrito");

    if (window.opener === null) {
        contenedor.textContent = "Abra el carrito desde la tienda para ver sus productos.";
        return;
    }

    var productos = window.opener.carritoProductos;
    contenedor.textContent = "";

    if (productos.length === 0) {
        contenedor.textContent = "El carrito esta vacio.";
    }

    var total = 0;

    for (var i = 0; i < productos.length; i++) {
        total = total + productos[i].precio;

        var item = document.createElement("div");
        item.className = "item-carrito";

        var texto = document.createElement("span");
        texto.textContent = productos[i].nombre + " - $" + productos[i].precio.toFixed(2);

        var botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.setAttribute("onclick", "eliminarProducto(" + i + ")");

        item.appendChild(texto);
        item.appendChild(botonEliminar);
        contenedor.appendChild(item);
    }

    document.getElementById("totalCarrito").textContent = "Total: $" + total.toFixed(2);
}

function eliminarProducto(indice) {
    window.opener.carritoProductos.splice(indice, 1);
    window.opener.actualizarContadorCarrito();
    mostrarCarrito();
}

function comprar() {
    if (window.opener === null || window.opener.carritoProductos.length === 0) {
        alert("El carrito esta vacio");
        return;
    }

    alert("Compra exitosa");

    window.opener.vaciarCarrito();
    mostrarCarrito();
} 

function agregarCarrito(nombre, precio) {
    var producto = {
        nombre: nombre,
        precio: precio
    };

    carritoProductos.push(producto);
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    document.getElementById("contadorCarrito").textContent = carritoProductos.length;
}

function abrirCarrito() {
    ventanaCarrito = window.open("carrito.html", "carrito", "width=450,height=600");
}

function vaciarCarrito() {
    carritoProductos = [];
    actualizarContadorCarrito();
}