// Función para agregar un nuevo producto a la tabla
function agregarProducto(codigo, nombre, medida, marca, precioCompra, precioVenta) {
    // Obtener la tabla y el cuerpo de la tabla
    let tabla = document.getElementById("tableForm");
    let tbody = tabla.getElementsByTagName("tbody")[0];

    // Crear una nueva fila y asignarle los valores de los parámetros
    let fila = document.createElement("tr");
    fila.innerHTML = `
    <th class="col-1">${codigo}</th>
    <td class="col-2">${nombre}</td>
    <td class="col-1">${medida}</td>
    <td class="col-2">${marca}</td>
    <td class="col-1">${precioCompra}</td>
    <td class="col-1">${precioVenta}</td>
  `;

    // Añadir la fila al final del cuerpo de la tabla
    tbody.appendChild(fila);
}

// Función para buscar un producto por nombre o código
function buscarProducto(busqueda) {
    // Obtener la tabla y el cuerpo de la tabla
    let tabla = document.getElementById("tableForm");
    let tbody = tabla.getElementsByTagName("tbody")[0];

    // Convertir la búsqueda a minúsculas
    busqueda = busqueda.toLowerCase();

    // Recorrer todas las filas del cuerpo de la tabla
    for (let i = 0; i < tbody.rows.length; i++) {
        // Obtener el código y el nombre de la fila actual
        let codigo = tbody.rows[i].cells[0].textContent.toLowerCase();
        let nombre = tbody.rows[i].cells[1].textContent.toLowerCase();

        // Si el código o el nombre contienen la búsqueda, mostrar la fila, sino ocultarla
        if (codigo.includes(busqueda) || nombre.includes(busqueda)) {
            tbody.rows[i].style.display = "";
        } else {
            tbody.rows[i].style.display = "none";
        }
    }
}

// Obtener los botones de buscar y nuevo producto
let botonBuscar = document.getElementById("button-addon1");
let botonNuevo = document.getElementById("button-addon2");

// Añadir un evento click al botón de buscar
botonBuscar.addEventListener("click", function () {
    // Obtener el valor del input de búsqueda
    let inputBuscar = document.querySelector(".input-group input");
    let busqueda = inputBuscar.value;

    // Llamar a la función de buscar producto con el valor del input
    buscarProducto(busqueda);
});

// Añadir un evento click al botón de nuevo producto
botonNuevo.addEventListener("click", function () {
    // Pedir al usuario los datos del nuevo producto
    let codigo = prompt("Ingrese el código del producto");
    let nombre = prompt("Ingrese el nombre del producto");
    let medida = prompt("Ingrese la medida del producto");
    let marca = prompt("Ingrese la marca del producto");
    let precioCompra = prompt("Ingrese el precio de compra del producto");
    let precioVenta = prompt("Ingrese el precio de venta del producto");

    // Validar que los datos no estén vacíos
    if (
        codigo &&
        nombre &&
        medida &&
        marca &&
        precioCompra &&
        precioVenta
    ) {
        // Llamar a la función de agregar producto con los datos ingresados
        agregarProducto(codigo, nombre, medida, marca, precioCompra, precioVenta);
    } else {
        // Mostrar un mensaje de error si algún dato está vacío
        alert("Debe ingresar todos los datos del producto");
    }
});
