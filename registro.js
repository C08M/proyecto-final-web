function validarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    if (nombre === "" || correo === "" || contrasena === "") {
        alert("Por favor complete todos los campos");
        return false;
    }

    

    if (contrasena.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return false;
    }
    
    alert("Registro exitoso");
    return false;
}