let carrito = [];
let nueva_compra;

const key_localstorage_carrito = "EVELINA_NIEMANN_CARRITO";

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem(key_localstorage_carrito)) || [];

  nueva_compra = new Compra();

  nueva_compra.iniciarCompra();
  nueva_compra.actualizarCarrito();
});

function agregarCarrito(id, event) {
  ELEMENT = event.target;
  const cursos = document.querySelector("#div_" + id);

  let nombre = cursos.querySelector("h3").textContent;
  let precioString = cursos.querySelector(".precio").textContent;
  let precio = parseInt(precioString.substring(2));

  let cursoAdquirido = new Cursos(id, nombre, precio);

  nueva_compra.seleccionarCurso(cursoAdquirido);
}
