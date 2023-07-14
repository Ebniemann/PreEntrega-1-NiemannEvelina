let totalCarrito = [];

let totalCompra = 0;

document.addEventListener("DOMContentLoaded", () => {
  const hoy = new Date();
  alert("Bienvenidos a E-task" + hoy.toLocaleString());

  let inicio = true;

  while (inicio) {
    let mensaje = "Seleccione la tarea que desea ejecutar:";
    mensaje += "\n 1- Comprar un curso";
    mensaje += "\n 2- Ver carrito";
    mensaje += "\n 3- Eliminar un curso seleccionado";
    mensaje += "\n 4-Tengo suerte?";
    mensaje += "\n 5-Salir";

    let resp = prompt(mensaje);
    switch (resp) {
      case "1":
        comprarCurso();
        break;
      case "2":
        verCarrito();
        break;
      case "3":
        eliminarCurso();
        break;
      case "4":
        descuento();
        break;
      case "5":
        inicio = false;
        break;
      default:
        alert("No ingreso una opcion valida");
    }
  }
});

function comprarCurso() {
  do {
    producto = seleccionarCurso();
    if (producto != false) {
      let compra = cursos.find((c) => c.id == producto);
      alert("Compro el curso: \n" + compra.cursoDescripcion());
      if (compra == "") {
        alert("ingrese un codigo");
      } else {
        let carrito = {
          id: compra.getId(),
          nombre: compra.getName(),
          precio: compra.getPrice(),
        };
        totalCarrito.push(carrito);

        let total = compra.getPrice();

        totalCompra += total;
      }
    }
  } while (producto != "terminar" && producto != false);
}

function seleccionarCurso() {
  let producto = prompt(
    "Seleccione el curso que desea comprar (una vez finalizada la compra escriba 'terminar'): \n" +
      listadoProductos()
  );
  if (validarInput(producto)) {
    let encontrarCurso = cursos.find((c) => c.id == producto);
    if (encontrarCurso) {
      return producto;
    }
  }
  return false;
}

function listadoProductos() {
  let mensaje = "";
  cursos.forEach((curso) => {
    mensaje += "\n" + curso.cursoDescripcion();
  });
  return mensaje;
}

function validarInput(input) {
  if (input == "") {
    alert("Por favor indique un código");
  }
  if (!input || input.toLowerCase() == "terminar") {
    return false;
  }
  if (isNaN(parseInt(input))) {
    alert("Por favor indique un código valido");
    return false;
  }
  return true;
}

function verCarrito() {
  if (totalCompra > 0) {
    alert("Proceso de compra finalizado.");
    prompt(mostrarCarrito());
  } else {
    return false;
  }
}

function mostrarCarrito() {
  let mensaje = "Tu compra es: \n";
  totalCarrito.forEach((c) => {
    mensaje += c.id + " " + c.nombre + "\n";
  });
  mensaje += "total: " + totalCompra;

  let pagarCompra = confirm(mensaje);
  if (pagarCompra) {
    let pagar = prompt("Escriba -pagar- para realizar el pago");
    if (pagar == "pagar") {
      alert("compra exitosa!!");
      totalCompra = 0;
      totalCarrito = "";
    }
  }
}

function eliminarCurso() {
  let mensaje = "Tu carrito:\n";
  totalCarrito.forEach((curso, index) => {
    mensaje += index + curso.nombre + "\n";
  });

  let indexEliminar = prompt(
    mensaje + "Seleccione el número del curso que desea eliminar:"
  );

  if (indexEliminar !== null) {
    indexEliminar = parseInt(indexEliminar);

    if (indexEliminar >= 0 && indexEliminar < totalCarrito.length) {
      let cursoEliminado = totalCarrito.splice(indexEliminar, 1)[0];
      let precioEliminado = obtenerPrecio(cursoEliminado.id);
      totalCompra -= precioEliminado;
      alert("El curso se eliminó del carrito correctamente.");
    } else {
      alert("Número de curso inválido.");
    }
  } else {
    alert("Operación cancelada.");
  }
}

function obtenerPrecio(cursoId) {
  let cursoEncontrado = cursos.find((c) => c.id == cursoId);
  if (cursoEncontrado) {
    return cursoEncontrado.price;
  }
}

function descuento() {
  let suerte = confirm("quieres probrar suerte?");
  if (suerte) {
    let random = Math.round(Math.random() * 10);
    if (random >= 5) {
      aplicarDescuento();
      alert("descuento del 50%");
    } else {
      alert("no tuviste suerte!");
    }
  }
  return listadoProductos();
}

function aplicarDescuento() {
  totalCompra = totalCompra * (1 - 50 / 100);
}
