// el fetch nos responde con una promesa también, si no tiene el catch y no hay red no estariamos cubriendo la posibilidad de un error
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // se ejecuta en respuesta al resolve del fetch
    .then((usuaries) => {
        const lista = document.getElementById('usuaries');
        usuaries.forEach(usuarie => {
            // pintar todos los usuaries de la API rest usando innerHTML en lista: nombre, email y teléfono
            lista.innerHTML += `
            <div>
                <h2>${usuarie.name}</h2>
                <p>${usuarie.email}</p>
                <p>${usuarie.phone}</p>
            </div>
            `;
        })
    }).catch((error) => console.log(error)); // si en algun momento hay un error lo capturamos en esta linea

// https://pokeapi.co/ -> api con datos de pokemon jeje