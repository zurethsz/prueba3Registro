let inputError =
  "form-control border border-primary-subtle bg-primary bg-opacity-10 is-invalid";
let inputCorrecto =
  "form-control border border-primary-subtle bg-primary bg-opacity-10 is-valid";
let inputSelectError =
  "form-select border border-primary-subtle bg-primary bg-opacity-10 is-invalid";
let inputSelectCorrecto =
  "form-select border border-primary-subtle bg-primary bg-opacity-10 is-valid";
let divError = "form-text text-danger";
let divCorrecto = "form-text text-success";
let pasaTiemposArray = [];

function Validar() {
  var retornoNombre = ValidarNombre();
  var retornoContra = ValidarContra();
  var retornoContra2 = ValidarConfirmacionContra();
  var retornoDireccion = ValidarDireccion();
  var retornoComuna = ValidarComuna();
  var retornoPaginaWeb = ValidarPaginaWeb();
  var retornoTelefono = ValidarTelefono();
  var retornoHobby = ValidarPasaTiempos();


  return (
    retornoNombre &&
    retornoContra &&
    retornoContra2 &&
    retornoComuna &&
    retornoDireccion &&
    retornoPaginaWeb &&
    retornoTelefono &&
    retornoHobby
  );
}

function ValidarNombre() {
  var nombre = document.getElementById("nombre");
  var valorNombre = nombre.value;
  var errorNombre = document.getElementById("errorNombre");

  for (var i = 0; i < valorNombre.length; i++) {
    if (!Esletra(valorNombre[i]) && !EsNumero(valorNombre[i])) {
      errorNombre.innerHTML =
        "El nombre de usuario no puede contener caracteres especiales ni acentos.";
      errorNombre.className = divError;
      nombre.className = inputError;
      return false;
    }
  }

  if (valorNombre == "") {
    errorNombre.innerHTML = "El nombre de usuario es obligatorio";
    errorNombre.className = divError;
    nombre.className = inputError;
    return false;
  } else if (valorNombre.length < 3 || valorNombre.length > 6) {
    errorNombre.innerHTML = "El nombre debe tener entre 3 a 6 caracteres";
    errorNombre.className = divError;
    nombre.className = inputError;
    return false;
  } else {
    errorNombre.innerHTML = "El nombre de usuario es válido";
    errorNombre.className = divCorrecto;
    nombre.className = inputCorrecto;
    return true;
  }
}

function ValidarContra() {
  var contraseña = document.getElementById("contraseña");
  var valorContraseña = contraseña.value;
  var errorContraseña = document.getElementById("errorContraseña");
  var valorNombreUsuario = document.getElementById("nombre").value;
  var letras = false;
  var numero = false;

  for (var i = 0; i < valorContraseña.length; i++) {
    if (EsNumero(valorContraseña[i])) {
      numero = true;
    } else if (Esletra(valorContraseña[i])) {
      letras = true;
    }
  }

  if (!Esletra(valorContraseña[0])) {
    errorContraseña.innerHTML = "La contraseña debe iniciar con una letra";
    errorContraseña.className = divError;
    contraseña.className = inputError;
    return false;
  }

  if (valorContraseña == "") {
    errorContraseña.innerHTML = "La contraseña es obligatoria";
    errorContraseña.className = divError;
    contraseña.className = inputError;
    return false;
  } else if (valorContraseña == valorNombreUsuario) {
    errorContraseña.innerHTML =
      "La contraseña no puede ser igual al nombre de usuario";
    errorContraseña.className = divError;
    contraseña.className = inputError;
    return false;
  } else if (valorContraseña.length < 3 || valorContraseña.length > 6) {
    errorContraseña.innerHTML = "La contraseña debe tener de 3 a 6 digitos";
    errorContraseña.className = divError;
    contraseña.className = inputError;
    return false;
  } else if (letras == false) {
    errorContraseña.innerHTML = "La contraseña necesita una letra minimo";
    errorContraseña.className = divError;
    contraseña.className = inputError;
    return false;
  } else if (numero == false) {
    errorContraseña.innerHTML = "La contraseña necesita un numero minimo";
    errorContraseña.className = divError;
    contraseña.className = inputError;
    return false;
  } else {
    errorContraseña.innerHTML = "La contraseña es válida";
    errorContraseña.className = divCorrecto;
    contraseña.className = inputCorrecto;
    return true;
  }
}
function Esletra(letra) {
  return (letra >= "A" && letra <= "Z") || (letra >= "a" && letra <= "z");
}

function EsNumero(numero) {
  return numero >= "0" && numero <= "9";
}

function ValidarConfirmacionContra() {
  var contraseña = document.getElementById("contraseña").value;
  var confirmarContraseña = document.getElementById("confirmarContraseña");
  var valorConfirmarContraseña = confirmarContraseña.value;
  var errorConfirmarContraseña = document.getElementById(
    "errorConfirmarContraseña"
  );
  if (valorConfirmarContraseña == "") {
    errorConfirmarContraseña.innerHTML =
      "La confirmacion de contraseña es obligatoria";
    errorConfirmarContraseña.className = divError;
    confirmarContraseña.className = inputError;
    return false;
  } else if (valorConfirmarContraseña != contraseña) {
    errorConfirmarContraseña.innerHTML = "la contraseña no coincide";
    errorConfirmarContraseña.className = divError;
    confirmarContraseña.className = inputError;
    return false;
  } else {
    errorConfirmarContraseña.innerHTML = "La contraseñas coinciden";
    errorConfirmarContraseña.className = divCorrecto;
    confirmarContraseña.className = inputCorrecto;
    return true;
  }
}

function ValidarDireccion() {
  var direccion = document.getElementById("direccion");
  var errorDireccion = document.getElementById("errorDireccion");
  var valorDireccion = direccion.value;

  if (valorDireccion == "") {
    errorDireccion.innerHTML = "La Dirección es obligatorio";
    errorDireccion.className = divError;
    direccion.className = inputError;
    return false;
  } else {
    errorDireccion.innerHTML = "La Dirección es válida";
    errorDireccion.className = divCorrecto;
    direccion.className = inputCorrecto;
    return true;
  }
}

function ValidarComuna() {
  var comuna = document.getElementById("comuna");
  var errorComuna = document.getElementById("errorComuna");
  var valorComuna = comuna.value;
  if (valorComuna == "") {
    errorComuna.innerHTML = "Debe seleccionar una comuna";
    errorComuna.className = divError;
    comuna.className = inputSelectError;
    return false;
  } else {
    errorComuna.innerHTML = "La comuna fue seleccionada";
    errorComuna.className = divCorrecto;
    comuna.className = inputSelectCorrecto;
    return true;
  }
}

function ValidarPaginaWeb() {
  var paginaWeb = document.getElementById("paginaWeb");
  var errorPaginaWeb = document.getElementById("errorPaginaWeb");
  var valorPaginaWeb = paginaWeb.value;

  if (valorPaginaWeb == "") {
    errorPaginaWeb.innerHTML = "La URL es opcional";
    errorPaginaWeb.className = divCorrecto;
    paginaWeb.className = inputCorrecto;
    return true;
  } else if (
    !ComienzaConHttp(valorPaginaWeb) &&
    !ComienzaConHttps(valorPaginaWeb) &&
    !ComienzaConWww(valorPaginaWeb)
  ) {
    errorPaginaWeb.innerHTML = "Porfavor siga los ejemplos";
    errorPaginaWeb.className = divError;
    paginaWeb.className = inputError;
    return false;
  } else if (
    !TerminaConCom(valorPaginaWeb) &&
    !TerminaConCl(valorPaginaWeb) &&
    !TerminaConNet(valorPaginaWeb) &&
    !TerminaConMx(valorPaginaWeb)
  ) {
    errorPaginaWeb.innerHTML = "La URL no tiene un dominio aceptable";
    errorPaginaWeb.className = divError;
    paginaWeb.className = inputError;
    return false;
  } else {
    errorPaginaWeb.innerHTML = "La URL es válida";
    errorPaginaWeb.className = divCorrecto;
    paginaWeb.className = inputCorrecto;
    return true;
  }
}

function ComienzaConHttp(url) {
  return url.slice(0, 7) === "http://";
}

function ComienzaConHttps(url) {
  return url.slice(0, 8) === "https://";
}

function ComienzaConWww(url) {
  return url.slice(0, 4) === "www.";
}

function TerminaConCom(url) {
  return url.slice(-4) === ".com";
}

function TerminaConCl(url) {
  return url.slice(-3) === ".cl";
}

function TerminaConNet(url) {
  return url.slice(-4) === ".net";
}
function TerminaConMx(url) {
  return url.slice(-3) === ".mx";
}

function ValidarTelefono() {
  var telefono = document.getElementById("telefono");
  var errorTelefono = document.getElementById("errorTelefono");
  var valorTelefono = telefono.value;

  var valorNumero = valorTelefono.slice(1);

  if (valorTelefono == "") {
    errorTelefono.innerHTML = "El teléfono es obligatorio";
    errorTelefono.className = divError;
    telefono.className = inputError;
    return false;
  } else if (valorTelefono.length > 15) {
    errorTelefono.innerHTML = "El teléfono no puede tener mas de 15 caracteres";
    errorTelefono.className = divError;
    telefono.className = inputError;
    return false;
  } else if (valorTelefono[0] !== "+") {
    errorTelefono.innerHTML = "Es necesario agregar el +";
    errorTelefono.className = divError;
    telefono.className = inputError;
    return false;
  } else if (!isNaN(valorNumero)) {
    console.log("el numero es : ", valorNumero);
    errorTelefono.innerHTML = "El teléfono es válido";
    errorTelefono.className = divCorrecto;
    telefono.className = inputCorrecto;

    return true;
  } else {
    errorTelefono.innerHTML = "El teléfono no debe tener letras ni espacios";
    errorTelefono.className = divError;
    telefono.className = inputError;
    return false;
  }
}

document
  .getElementById("agregarPasatiempo")
  .addEventListener("click", function () {
    const pasatiempo = document.getElementById("pasatiempos").value.trim();

    if (pasatiempo !== "") {
      pasaTiemposArray.push(pasatiempo);
      document.getElementById("pasatiempos").value = "";
      document.getElementById("listaPasatiempos").innerHTML = "";
      pasaTiemposArray.forEach(function (pasatiempo) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.className = "list-group-item pb-2";
        nuevoElemento.textContent = pasatiempo;
        nuevoElemento.className =
          "form-control border border-primary-subtle bg-primary bg-opacity-10 mb-1";
        document.getElementById("listaPasatiempos").appendChild(nuevoElemento);
      });
    }
  });

function ValidarPasaTiempos() {
  var inputErrorPasaTiempos = document.getElementById("pasatiempos");
  var errorPasaTiempos = document.getElementById("errorpasatiempo");

  if (pasaTiemposArray.length >= 2) {
    errorPasaTiempos.innerHTML = "El mínimo de pasatiempos es válido";
    errorPasaTiempos.className = divCorrecto;
    inputErrorPasaTiempos.className = inputCorrecto;
    return true;
  } else {
    errorPasaTiempos.innerHTML = "Debe ingresar minimo 2 pasa tiempos";
    errorPasaTiempos.className = divError;
    inputErrorPasaTiempos.className = inputError;
    return false;
  }
}
