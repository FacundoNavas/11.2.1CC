document.addEventListener("DOMContentLoaded", function(){
const btnEnviar= document.getElementById("enviar");
const respDiv = document.getElementById("respuesta");

btnEnviar.addEventListener("click", function() {
const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const formData ={
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };


fetch("https://jsonplaceholder.typicode.com/users", 
    {
    method:'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    respDiv.innerHTML = JSON.stringify(data, null, 2);
})
})
})