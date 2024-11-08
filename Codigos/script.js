
document.addEventListener('DOMContentLoaded', function () {
    const encender = document.getElementById('encender');
    const apagarBtn = document.getElementById('apagar');
    const estadoBtn = document.getElementById('estado');
    const display = document.getElementById('estado-display');

    // encender.addEventListener('click', function () {
    //     fetch('http://192.168.18.214/encender')
    //         .then(response => response.text())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => console.error('Error:', error));
    // });


    // estadoBtn.addEventListener('click', function () {
    //     fetch('http://192.168.18.214/estado')
    //         .then(response => response.text())
    //         .then(data => {
    //             console.log(data); // Confirmar el contenido de data en la consola
    //             display.innerHTML = data;  // Usar textContent o innerHTML como prefieras
    //         })
    //         .catch(error => console.error('Error:', error));
    // });

    // apagarBtn.addEventListener('click', function () {
    //     fetch('http://192.168.18.214/apagar')
    //         .then(response => response.text())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => console.error('Error:', error));
    // });

    function obtenerEstado() {
        fetch('http://192.168.18.214/estado')
            .then(response => response.text())
            .then(data => {
                console.log(data);  // Confirma el contenido de la respuesta
                display.innerHTML = data;  // Actualiza el contenido del <p> con el estado del LED
            })
            .catch(error => console.error('Error:', error));
    }

    // Actualizar el estado cada 5 milisegundos (ajusta el tiempo según lo necesites)
    setInterval(obtenerEstado, 500);  // Llama a obtenerEstado cada 5000 milisegundos (1 segundo)
});
