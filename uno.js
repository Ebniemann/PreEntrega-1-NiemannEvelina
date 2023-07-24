let new_usuario = new Array();

let validar = document.getElementById("valido");
let check = document.getElementById("checked");

let btn_form = document.getElementById("btn-form");
btn_form.addEventListener("click", () => {
  validarForm();
});
function validarForm() {
  validar.innerHTML = "";
  check.innerHTML = "";

  let input_nombre = document.getElementById("name").value;
  let input_email = document.getElementById("email").value;
  let input_textArea = document.getElementById("text-area").value;

  let mensaje = new Array();

  if (!input_nombre) {
    mensaje.push("Ingrese su nombre");
  }
  if (!input_email) {
    mensaje.push("Ingrese su email");
  }
  if (!input_textArea) {
    mensaje.push("Ingrese su consulta");
  }
  if (mensaje.length > 0) {
    let lista = document.createElement("ul");
    lista.textContent = "Tiene que cargar los siguientes datos: ";

    mensaje.forEach((e) => {
      lista.appendChild(crear_li(e));
    });
    validar.appendChild(lista);
  } else {
    let enviar = document.createElement("p");
    enviar.textContent = "Su consulta fue enviada con éxito";

    check.appendChild(enviar);
  }
  return mensaje.length == 0;
}

function crear_li(mensaje) {
  let li = document.createElement("li");
  li.textContent = mensaje;
  return li;
}
