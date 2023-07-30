let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  let btn_buy = document.querySelectorAll(".buy");

  btn_buy.forEach((boton, index) => {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      const index = Array.from(btn_buy).indexOf(boton);
      const producto = curso[index];
      addCarrito(producto);
    });
  });
});
