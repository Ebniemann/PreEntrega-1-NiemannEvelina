class Curso {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  cursoDescripcion() {
    return `${this.id}- ${this.name} $${this.price}`;
  }
}

let cursos = new Array();
cursos.push(new Curso(1, "Product Web", 10000));
cursos.push(new Curso(2, "Product", 12000));
cursos.push(new Curso(3, "Desarrollo de aplicaciones", 14000));
cursos.push(new Curso(4, "Desarrollo Full Stack", 16000));
cursos.push(new Curso(5, "Desarrollo UX/UI", 18000));
cursos.push(new Curso(6, "Product Design", 20000));
