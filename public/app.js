const API = "http://localhost:3000/api/productos";

async function cargarProductos() {
    const res = await fetch(API);
    const data = await res.json();

    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    data.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.nombre}</td>
                <td>${p.precio}</td>
                <td>
                    <button onclick="eliminarProducto(${p.id})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

async function crearProducto() {
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, precio })
    });

    cargarProductos();
}

async function eliminarProducto(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    cargarProductos();
}

cargarProductos();
