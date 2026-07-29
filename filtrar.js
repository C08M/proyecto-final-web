function filtrarProductos() {
    var texto = document.getElementById("buscador").value.toLowerCase();
    var categoria = document.getElementById("categoria").value;
    var productos = document.getElementsByClassName("producto");

    for (var i = 0; i < productos.length; i++) {
        var nombre = productos[i].querySelector("h3").textContent.toLowerCase();
        var catProducto = productos[i].getAttribute("data-categoria");

        var coincideTexto = nombre.indexOf(texto) !== -1;
        var coincideCategoria = false;

        if (categoria === "todas" || categoria === catProducto) {
            coincideCategoria = true;
        }

        if (coincideTexto && coincideCategoria) {
            productos[i].style.display = "flex";
        } else {
            productos[i].style.display = "none";
        }
    }
}