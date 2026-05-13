// Seleccionamos los elementos necesarios
const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    // Alternar el tipo de input entre 'password' y 'text'
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Alternar la clase 'active' para cambiar el color del icono en el CSS
    this.classList.toggle('active');
});



let contador = 0

function desvelarcontra(correoe){

    if (correoe == 'Markeladademanual@gmail.com'){
        document.getElementById('bloquecontra').style.display = 'block'
        document.getElementById('Entrar').style.display = 'none'
        document.getElementById('Ahorasi').style.display = 'block'
        document.getElementById('mensaje').innerHTML = 'Qué pensabas, que iba a ser solo esto, vuelve al Canva anda'
        return

    }else{
        contador = contador + 1
    }

    if(contador == 1){
        document.getElementById('mensaje').innerHTML = 'Venga va, intenta otra vez'
    }
    else if(contador == 2){
        document.getElementById('mensaje').innerHTML = 'Otra vez mal, en serio?'
    }
    else if(contador == 3){
        document.getElementById('mensaje').innerHTML = 'Tú, venga ya, espabila un poco'
    }
    else if(contador == 4){
        document.getElementById('mensaje').innerHTML = 'Markeeeeel, que se nos va la hora'
    }
    else if(contador == 5){
        document.getElementById('mensaje').innerHTML = 'Bro... ya van 5...'
    }
    else if(contador == 6){
        document.getElementById('mensaje').innerHTML = 'Aquí ya dejamos de contar, venga hazlo ya'
    }
}


function contrasena(contra){
    
    if(contra == 'Macacopaga'){
        open('https://www.canva.com', '_blank');
    }else{
        contador = contador + 1
    }
    if(contador == 1){
        document.getElementById('mensaje').innerHTML = 'Venga va, intenta otra vez'
    }
    else if(contador == 2){
        document.getElementById('mensaje').innerHTML = 'Otra vez mal, en serio?'
    }
    else if(contador == 3){
        document.getElementById('mensaje').innerHTML = 'Tú, venga ya, espabila un poco'
    }
    else if(contador == 4){
        document.getElementById('mensaje').innerHTML = 'Markeeeeel, que se nos va la hora'
    }
    else if(contador == 5){
        document.getElementById('mensaje').innerHTML = 'Bro... ya van 5...'
    }
    else if(contador == 6){
        document.getElementById('mensaje').innerHTML = 'Aquí ya dejamos de contar, venga hazlo ya'
    }

}



