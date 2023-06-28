const productos =
  "01-Product Web - $24.000 <br>" +
  "02-Product - $12.000 <br>" +
  "03-Desarrollo de aplicaciones - $36.000 <br>" +
  "04-Desarrollo Full Stack - $48.000 <br>" +
  "05-Desarrollo UX/UI - $60.000 <br>" +
  "06-Product Design - $72.000 <br>";

let carrito = "";
let totalCarrito = 0;

document.addEventListener("DOMContentLoaded", () => {
  let producto = "";

  const deseaComprar = confirm("Desea comprar un curso?");

  if (deseaComprar) {
    do {
      producto = solicitarProducto();

      if (producto != false) {
        let descripcion = descripcionProducto(producto);

        if (descripcion == "") {
          alert("articulo no encontrado");
        } else {
          let importe = valor(producto);
          productoSeleccionado = descripcion.replace(/<br>/g, "\n");

          carrito += descripcion;
          totalCarrito += importe;

          alert(
            "El producto: \n\n" +
              productoSeleccionado +
              "\n fue agregado al carrito."
          );
        }
      }
    } while (producto != "terminar" && producto != false);
  } else {
    alert("Refresca la pantalla si luego quieres comprar");
  }

  if (totalCarrito > 0) {
    alert("Proceso de compra finalizado.");
    prompt(mostrarCarrito());
  } else if ((totalCarrito = 0)) {
    return false;
  }
});

function solicitarProducto() {
  listadoProductos = productos.replace(/<br>/g, "\n");
  const codigo = prompt(
    "Ingrese el código del producto:" + "\n\n" + listadoProductos + "\n\n"
  );
  if (validarInput(codigo)) {
    return codigo;
  }
  return false;
}

function validarInput(input) {
  if (input == "") {
    alert("Indique un código");
  }
  if (!input || input.toLowerCase() == "terminar") {
    return false;
  }
  if (isNaN(parseInt(input))) {
    alert("Indica un código de producto valido");
    return false;
  }
  return true;
}

function descripcionProducto(producto) {
  let descripcion = "";

  switch (producto) {
    case "01":
      descripcion = "Product Web - $24.000 <br>";
      break;

    case "02":
      descripcion = "Product - $12.000 <br>";
      break;

    case "03":
      descripcion = "Desarrollo de aplicaciones - $36.000 <br>";
      break;

    case "04":
      descripcion = "Desarrollo Full Stack - $48.000 <br>";
      break;

    case "05":
      descripcion = "Desarrollo UX/UI - $60.000 <br>";
      break;

    case "06":
      descripcion = "Product Design - $72.000 <br>";
      break;
  }
  return descripcion;
}

function valor(producto) {
  let total = -1;

  switch (producto) {
    case "01":
      total = 24000;
      break;

    case "02":
      total = 12000;
      break;

    case "03":
      total = 36000;
      break;

    case "04":
      total = 48000;
      break;

    case "05":
      total = 60000;
      break;

    case "06":
      total = 72000;
      break;
  }
  return total;
}

function mostrarCarrito() {
  productosCarrito = carrito.replace(/<br>/g, "\n");
  const pagarCompra = confirm(
    "Tu compra:" +
      "\n\n" +
      productosCarrito +
      "\n\n" +
      "Total: $" +
      totalCarrito
  );
  if (pagarCompra) {
    const pagado = prompt("Escribir - pagar - para finalizar la compra");

    if (pagado === "pagar") {
      alert("Felicitaciones la compra fue exitosa");
    } else {
      carrito = "";
      totalCarrito = 0;
      alert("Tu carrito se limpio");
    }
  }
}
