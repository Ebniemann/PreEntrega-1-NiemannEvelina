curso = [
  {
    id: 1,
    nombre: "Product Web",
    precio: 10000,
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Product",
    precio: 12000,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Desarrollo de aplicaciones",
    precio: 14000,
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Desarrollo Full Stack",
    precio: 16000,
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Desarrollo UX/UI",
    precio: 18000,
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Product Design",
    precio: 20000,
    cantidad: 1,
  },
];

function addCarrito(item) {
  let productoExiste = carrito.some((prod) => prod.id === item.id);

  if (productoExiste) {
    Toastify({
      text: "Este curso ya esta en tu carrito",
      duration: 2000,
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right, #EC3A3A, #FAAC58)",
      },
    }).showToast();
  } else {
    carrito.push(item);

    Toastify({
      text: "Curso agregado con exito!",
      duration: 2000,
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  }
  actualizarCarrito();
}

function eliminarProducto(item) {
  Swal.fire({
    title: "Desea eliminar el producto?",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    confirmButtonText: "Elimninar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      carrito = carrito.filter((articulo) => articulo.id != item.id);
      this.actualizarCarrito();

      //notidico de la eliminacion
      Toastify({
        text: "Producto eliminado con exito",
        duration: 2000,
        gravity: "bottom",
      }).showToast();
    }
  });
}

function actualizarCarrito() {
  actualizarContador();
  mostrarCarrito();
  //guardarCarrito();
}

function actualizarContador() {
  let total = carrito.reduce(
    (acumulador, carrito) => acumulador + carrito.cantidad,
    0
  );

  let contador = document.getElementById("compra");
  contador.innerHTML = total;
}

function mostrarCarrito() {
  let detalle = document.getElementById("buy-cart");
  let totalCarrito = 0;
  detalle.innerHTML = "";

  let header = document.createElement("div");
  header.classList.add("general-cart");

  let titleCurso = document.createElement("h3");
  titleCurso.textContent = "Mi carrito:";

  header.appendChild(titleCurso);
  detalle.appendChild(header);

  carrito.forEach((productCart) => {
    const { nombre, precio, id } = productCart;

    totalCarrito += parseInt(precio);

    let descripcion = document.createElement("div");
    descripcion.id = "div" + id;
    descripcion.classList.add("general-cart");

    let identificador = document.createElement("p");
    identificador.textContent = nombre;

    let valor = document.createElement("p");
    valor.textContent = "$" + precio;

    let eliminar = document.createElement("div");

    let eliminarBtn = document.createElement("a");
    //eliminarBtn.classList.add("btnEliminar");
    eliminarBtn.innerHTML = `
                          <a">
                          <img src="/img/icons/trash3.svg"></img>
                          </a>
                          `;

    eliminarBtn.addEventListener("click", () => {
      eliminarProducto(productCart);
    });
    eliminar.appendChild(eliminarBtn);

    descripcion.appendChild(identificador);
    descripcion.appendChild(valor);
    descripcion.appendChild(eliminar);
    detalle.appendChild(descripcion);
  });

  let total = document.createElement("p");
  total.classList.add("total");
  total.textContent += `Total: $${totalCarrito}`;

  detalle.appendChild(total);
}
