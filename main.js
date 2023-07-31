let carrito = [];

const key_localstorage_carrito = "carrito";

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem(key_localstorage_carrito)) || [];

  const btn_buy = document.querySelectorAll(".buttonAdd");
  btn_buy.forEach((boton, index) => {
    const btnIndex = index;
    boton.addEventListener("click", (e) => {
      //const index = Array.from(btn_buy).indexOf(boton);
      const producto = curso[btnIndex];
      agregarAlCarrito(producto);
    });
  });
  actualizarCarrito();
});
