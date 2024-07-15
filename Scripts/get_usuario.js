document.addEventListener('DOMContentLoaded', async() => {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response = await fetch('http://localhost:8080/webapp/usuarios',options);

    const data = await response.json();

    //console.log(data);
    const usuarios = data
    //console.log(usuarios);


    const tbody = document.getElementById("tableBody")

    usuarios.forEach(usuario => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.email}</td>
            <td>${usuario.clave}</td>
            <td>${usuario.fechaNacimiento}</td>
            <td>${usuario.pais}</td>
        `;
        tbody.appendChild(tr);
    });
})