const boton = document.querySelector('#boton');

boton.addEventListener('click', traerDatos);

function traerDatos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', './documento.txt', true);

    xhttp.send();

    xhttp.onreadystatechange = ()=>{
        if(this.readyState == 4 && this.status == 200){
            document.querySelector('#result').innerHTML = this.responseText;
        }
        else if(this.status == 403){
            document.querySelector('#result').innerHTML = 'No se puede acceder, error 403'
        }
    }
}