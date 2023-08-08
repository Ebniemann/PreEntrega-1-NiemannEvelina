class Compra {
  iniciarCompra() {
    this.curso = [
      {
        id: 1,
        nombre: "Product Web",
        precio: 1000,
        cantidad: 1,
        cantidad_cursos: 3,
        lista_cursos: ["Product Manager", "Diseño UX/UI", "Desarrollo Web"],
        cantidad_semanas: 31,
      },
      {
        id: 2,
        nombre: "Product",
        precio: 2000,
        cantidad: 1,
        cantidad_cursos: 2,
        lista_cursos: ["Product Manager", "E-commerce"],
        cantidad_semanas: 16,
      },
      {
        id: 3,
        nombre: "Desarrollo de aplicaciones",
        precio: 3000,
        cantidad: 1,
        cantidad_cursos: 4,
        lista_cursos: [
          "Desarrollo Web",
          "JavaScript",
          "React Js",
          "Desarrollo de Aplicaciones",
        ],
        cantidad_semanas: 35,
      },
      {
        id: 4,
        nombre: "Desarrollo Full Stack",
        precio: 4000,
        cantidad: 1,
        cantidad_cursos: 4,
        lista_cursos: [
          "Desarrollo Web",
          "JavaScript",
          "React Js",
          "Programación Backend",
        ],
        cantidad_semanas: 50,
      },
    ];

    this.cargarCurso();
  }

  //Funcion que crea las card de los cursos.
  cargarCurso() {
    let cardNueva = document.getElementById("careers");
    cardNueva.innerHTML = "";

    this.curso.forEach((cursoCard) => {
      const {
        nombre,
        precio,
        id,
        cantidad_cursos,
        lista_cursos,
        cantidad_semanas,
      } = cursoCard;

      let card = document.createElement("div");
      card.classList.add("box-cart");
      card.id = "div_" + id;
      card.innerHTML = `
                  
                  <h3>${nombre}</h3>
                  <h5>Incluye ${cantidad_cursos} cursos</h5>
                  <ul>
                  ${lista_cursos.map((curso) => `<li>${curso}</li>`).join("")}
                  </ul>
                  <div>
                  <p>${cantidad_semanas} semanas / 2 clase semanales</p>
                  <p class="precio">$ ${precio}</p>
             
                  `;
      let seleccionarCursoBtn = document.createElement("a");
      seleccionarCursoBtn.textContent = "Agregar al carrito";

      seleccionarCursoBtn.addEventListener("click", () => {
        agregarCarrito(id);
      });

      card.appendChild(seleccionarCursoBtn);
      cardNueva.appendChild(card);
    });
  }

  // Berifico si el curso no esta en el carrito y lo agrego.
  seleccionarCurso(item) {
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
    this.actualizarCarrito();
  }

  //Eliminar cursos del carrito
  eliminarProducto(item) {
    Swal.fire({
      title: "Desea eliminar este curso?",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Elimninar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = carrito.filter((articulo) => articulo.id != item.id);
        this.actualizarCarrito();

        Toastify({
          text: "Producto eliminado con exito",
          duration: 1500,
          gravity: "bottom",
        }).showToast();
      }
    });
  }

  actualizarCarrito() {
    this.actualizarContador();
    this.mostrarCarrito();
    this.guardarCarrito();
  }

  actualizarContador() {
    let total = carrito.reduce(
      (acumulador, carrito) => acumulador + carrito.cantidad,
      0
    );

    let contador = document.getElementById("compra");
    contador.innerHTML = total;
  }

  //Mostrar el detalle de los cursos en el carrito
  mostrarCarrito() {
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
      valor.textContent = precio;

      let eliminarBtn = document.createElement("a");
      eliminarBtn.classList.add("btnEliminar");
      eliminarBtn.innerHTML = `
                          
                          <p>🗑️</p>
                          
                          `;

      eliminarBtn.addEventListener("click", () => {
        this.eliminarProducto(productCart);
      });

      descripcion.appendChild(identificador);
      descripcion.appendChild(valor);
      descripcion.appendChild(eliminarBtn);
      detalle.appendChild(descripcion);
    });

    let total = document.createElement("p");
    total.textContent += `Total: $${totalCarrito}`;

    detalle.appendChild(total);

    let pagarBtn = document.createElement("button");
    pagarBtn.textContent = "Realizar pago";

    pagarBtn.addEventListener("click", () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Compra exitosa!",
        showConfirmButton: false,
        timer: 1500,
      });
      this.limpiarCarrito();
      this.vaciarCarrito();
    });

    detalle.appendChild(pagarBtn);
  }

  // Guardar carrito en localStorage.
  guardarCarrito() {
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem(key_localstorage_carrito, carritoJSON);
  }

  //Vaciar el carrito.
  vaciarCarrito() {
    carrito = [];
    this.actualizarContador();
    this.mostrarCarrito();
  }

  //Limpiar el localStorage del carrito.
  limpiarCarrito() {
    localStorage.clear();
  }
}
