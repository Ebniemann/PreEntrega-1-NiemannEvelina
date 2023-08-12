let new_usuario = new Array();

let nameE = document.getElementById("input_name");
let emailE = document.getElementById("input_email");
let textE = document.getElementById("input_text");

let btn_form = document.getElementById("btn-form");
btn_form.addEventListener("click", () => {
  validarForm();
});

//valida que los campos del form
function validarForm() {
  nameE.textContent = "";
  emailE.textContent = "";
  textE.textContent = "";
  let input_nombre = document.getElementById("name").value;
  let input_email = document.getElementById("email").value;
  let input_textArea = document.getElementById("text-area").value;

  if (!input_nombre) {
    let error_name = document.createElement("p");
    error_name.innerHTML = "Ingrese su nombre";
    error_name.style.color = "yellow";
    nameE.appendChild(error_name);
  }
  if (!input_email) {
    let error_email = document.createElement("p");
    error_email.textContent = "Ingrese su email";
    error_email.style.color = "yellow";
    emailE.appendChild(error_email);
  } else if (!validarEmail(input_email)) {
    let validar_email = document.createElement("p");
    validar_email.textContent = "Ingrese un email válido";
    validar_email.style.color = "yellow";
    emailE.appendChild(validar_email);
  }
  if (!input_textArea) {
    let error_text = document.createElement("p");
    error_text.textContent = "Ingrese su consulta";
    error_text.style.color = "yellow";
    textE.appendChild(error_text);
  }
  if (
    input_nombre &&
    input_email &&
    input_textArea &&
    validarEmail(input_email)
  ) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Su consulta fue enviada!",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      limpiarForm();
    }, 1000);
  }
}

//valida el formato del input email
function validarEmail(email) {
  const validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let esValido = validarEmail.test(email);

  if (esValido) {
    return true;
  } else {
    return false;
  }
}

//limpia el form una vez que se envia correctamente
function limpiarForm() {
  document.getElementById("contacto").reset();
}
