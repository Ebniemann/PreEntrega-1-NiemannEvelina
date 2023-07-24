let usuarios = new Array();

let validar = document.getElementById("valido");

let btn_form = document.getElementById("btn-form");
btn_form.addEventListener("click", () => {
  if (validarForm()) {
    enviarConsulta();
  }
});
function validarForm() {
  validar.innerHTML = "";

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
  }
  return mensaje.length == 0;
}

function crear_li(mensaje) {
  let li = document.createElement("li");
  li.textContent = mensaje;
  return li;
}

function enviarConsulta() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let textArea = document.getElementById("text-area").value;

  let usuario = new Usuario(name, email, textArea);

  usuarios.push(usuario);

  card_consulta(usuario);
}

function card_consulta(usuario) {
  let new_card = document.createElement("div");

  let name = document.createElement("h2");
  let text = document.createElement("p");

  name = usuario.name;
  text = usuario.textArea;

  new_card.appendChild(name);
  new_card.appendChild(text);

  let contenedor = document.getElementById("modalContact");

  contenedor.appendChild(new_card);
}
