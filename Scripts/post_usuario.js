formNuevoRegistro = document.getElementById('formNuevoRegistro');

formNuevoRegistro.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const formData = new FormData(formNuevoRegistro);

    const nombre = formData.get('nombre');
    const apellido = formData.get('apellido');
    const email = formData.get('email');
    const clave = formData.get('clave');
    const fechaNacimiento = formData.get('fecha');
    const pais = formData.get('pais');

    //verificaR?
    let nombreVerificacion = document.forms["register"]["nombre"].value;
    if (nombreVerificacion == "") {
        alert("Ingrese un nombre");
        return;
    }
    let apellidoVerificacion = document.forms["register"]["apellido"].value;
    if (apellidoVerificacion == "") {
        alert("Ingrese un apellido");
        return;
    }
    let emailVerificacion = document.forms["register"]["email"].value;
    if (emailVerificacion == "") {
        alert("Ingrese un email");
        return;
    }
    let claveVerificacion = document.forms["register"]["clave"].value;
    if (claveVerificacion == "") {
        alert("Ingrese una clave");
        return;
    }
    let fechaVerificacion = document.forms["register"]["fecha"].value;
    if (fechaVerificacion == "") {
        alert("Ingrese su fecha de nacimiento");
        return;
    }
    let paisVerificacion = document.forms["register"]["pais"].value;
    if (paisVerificacion == "Pais") {
      alert("Ingrese su pais");
      return;
    }
    let tycVerificacion = document.forms["register"]["TYC"].checked;
    if (tycVerificacion == false) {
      alert("Acepte los términos y condiciones");
      return;
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            email: email,
            clave: clave,
            fechaNacimiento: fechaNacimiento,
            pais: pais
        })
    };

    const response = await fetch('http://localhost:8080/webapp/usuarios',options);
    const data = await response.json();
    console.log(data);
    console.log(response);
    console.log(response.status);
    console.log(response.statusCode);
    

    if (response.status == 201) {
        alert('Registro correcto');
        location.href("../index.html");
    } else {
        alert('Error al registrarse');
    }
});