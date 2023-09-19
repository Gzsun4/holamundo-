function mostrarSobreMi() {
    document.getElementById('sobre-mi').style.display = 'block';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('contactame').style.display = 'none';
}

function mostrarBlog() {
    document.getElementById('sobre-mi').style.display = 'none';
    document.getElementById('blog').style.display = 'block';
    document.getElementById('contactame').style.display = 'none';
}

function mostrarContactame() {
    document.getElementById('sobre-mi').style.display = 'none';
    document.getElementById('blog').style.display = 'none';
    document.getElementById('contactame').style.display = 'block';
}
function cerrarSesion() {
    window.location.href = 'login.html';
}
