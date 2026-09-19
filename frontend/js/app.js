const formulario = document.getElementById("formProducto");
const tablaProductos = document.getElementById("tablaProductos");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const precio = document.getElementById("precio").value;
    const stock = document.getElementById("stock").value;

    const nuevaFila = document.createElement("tr");

    nuevaFila.innerHTML = `
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${categoria}</td>
        <td>S/ ${parseFloat(precio).toFixed(2)}</td>
        <td>${stock}</td>
    `;

    tablaProductos.appendChild(nuevaFila);

    formulario.reset();
});