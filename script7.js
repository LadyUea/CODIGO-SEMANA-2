// Arreglo inicial de productos
let productos = [
  { nombre: "Mochila táctica", precio: "$45.00", descripcion: "Resistente al agua y múltiples bolsillos." },
  { nombre: "Botas negras", precio: "$80.00", descripcion: "Ideales para terrenos difíciles." },
  { nombre: "Camiseta táctica", precio: "$25.00", descripcion: "Con tela transpirable y cómoda." }
];

// Referencia al <ul>
const lista = document.getElementById("lista-productos");

// Función para renderizar los productos en la lista
function renderizarProductos() {
  // Limpia el contenido actual
  lista.innerHTML = "";

  // Recorre y crea los elementos <li>
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${producto.nombre}</strong><br>
      Precio: ${producto.precio}<br>
      <em>${producto.descripcion}</em>
    `;
    lista.appendChild(li);
  });
}

// Llamamos a la función al cargar la página
renderizarProductos();

// Agregar producto nuevo
document.getElementById("agregar-producto").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Nuevo Producto",
    precio: "$00.00",
    descripcion: "Descripción breve del producto."
  };
  productos.push(nuevoProducto);
  renderizarProductos();
});
