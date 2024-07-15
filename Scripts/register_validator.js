function validateRegister() {
    let nombre = document.forms["register"]["nombre"].value;
    if (nombre == "") {
        alert("Ingrese un nombre");
        return false;
    }
    let apellido = document.forms["register"]["apellido"].value;
    if (apellido == "") {
        alert("Ingrese un apellido");
        return false;
    }
    let email = document.forms["register"]["email"].value;
    if (email == "") {
        alert("Ingrese un email");
        return false;
    }
    let clave = document.forms["register"]["clave"].value;
    if (clave == "") {
        alert("Ingrese una clave");
        return false;
    }
    let fecha = document.forms["register"]["fecha"].value;
    if (fecha == "") {
        alert("Ingrese su fecha de nacimiento");
        return false;
    }
    let pais = document.forms["register"]["pais"].value;
    if (pais == "Pais") {
      alert("Ingrese su pais");
      return false;
    }
    let tyc = document.forms["register"]["TYC"].checked;
    if (tyc == false) {
      alert("Acepte los términos y condiciones");
      return false;
    }
  }