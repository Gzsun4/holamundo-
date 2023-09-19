function verificarCredenciales(event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var contrasena = document.getElementById('contrasena').value;

    // Verificar las credenciales
    if (usuario === 'jesus' && contrasena === 'agua') {
        window.location.href = 'index.html'; // Redirigir al usuario a la página principal
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}
