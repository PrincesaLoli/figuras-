// document.body.onload(
// alert("Hola")
function circulo() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("circulo");
}
/*el html puede tener un id y varias clases, toggle es un quita y pone un suich*/
function arriba() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("arriba");

}
function abajo() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("abajo");
}
function derecha() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("derecha");
}
function izquierda() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("izquierda");
}
function diagonalsupizquierdo() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("diagonalsupizquierdo");
}
function diagonalinfderecho() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("diagonalinfderecho");
}
function rectanguloHorizontal() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("rectanguloHorizontal");
}
function rectanguloVertical() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("rectanguloVertical");

}
function rombo() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("rombo");
}
function imagen() {
    var selector = document.getElementById("figura");
    selector.className = " ";
    selector.classList.toggle("imagen");
}

function capturarDatos() {
    const nombreFormulario = document.getElementById("cNombres").value;
    document.getElementById("mNombres").textContent = nombreFormulario;
    
    const edadFormulario = document.getElementById('cEdad').value;
    document.getElementById("mEdad").textContent = edadFormulario;

    const fechaFormulario = document.getElementById('cFecha').value;
    document.getElementById("mFecha").textContent = fechaFormulario;
 
    const generoFormulario = document.getElementById('cGenero').value;
    document.getElementById("mGenero").textContent = generoFormulario;

    const emailFormulario = document.getElementById('cEmail').value;
    document.getElementById("mEmail").textContent = emailFormulario;

    const descripcionFormulario = document.getElementById('cDescripcion').value;
    document.getElementById("mDescripcion").textContent = descripcionFormulario;

    let foto;

    if (generoFormulario == 'Femenino') {
        foto ='img/mujer dos.jpg';
    } else if (generoFormulario == 'Masculino') {
        foto ='img/hombre uno.jpg';
    } else if (generoFormulario == 'Otro' ) {
        foto ='img/usuario1.jpg';
    } else {
        foto ='img/usuario1.jpg';
    }

    document.getElementById('foto').src = foto;
    var colorFormulario = document.getElementById('cColor').value;
    document.getElementById('card-avatar').style.background = colorFormulario;

}