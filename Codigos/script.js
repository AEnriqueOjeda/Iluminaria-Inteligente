// Datos de luminarias por facultad
const luminariasData = {
    telematica: [
        { id: 'Tm1', longitud: '103° 41.857\' W', latitud: '19° 14.936\' N' },
        { id: 'Tm2', longitud: '103° 41.863\' W', latitud: '19° 14.945\' N' },
        { id: 'Tm3', longitud: '103° 41.865\' W', latitud: '19° 14.961\' N' },
        { id: 'Tm4', longitud: '103° 41.821\' W', latitud: '19° 14.941\' N' }
    ],
    medicina: [
        { id: 'Med1', longitud: '103° 41.908\' W', latitud: '19° 14.837\' N' },
        { id: 'Med2', longitud: '103° 41.875\' W', latitud: '19° 14.832\' N' },
        { id: 'Med3', longitud: '103° 41.864\' W', latitud: '19° 14.844\' N' },
        { id: 'Med4', longitud: '103° 41.889\' W', latitud: '19° 14.848\' N' },
        { id: 'Med5', longitud: '103° 41.862\' W', latitud: '19° 14.858\' N' }
    ],
    enfermeria: [
        { id: 'Enf1', longitud: '103° 41.885\' W', latitud: '19° 14.865\' N' },
        { id: 'Enf2', longitud: '103° 41.901\' W', latitud: '19° 14.886\' N' },
        { id: 'Enf3', longitud: '103° 41.925\' W', latitud: '19° 14.890\' N' },
        { id: 'Enf5', longitud: '103° 41.919\' W', latitud: '19° 14.872\' N' },
        { id: 'Enf6', longitud: '103° 41.919\' W', latitud: '19° 14.862\' N' },
        { id: 'Enf7', longitud: '103° 41.923\' W', latitud: '19° 14.856\' N' },
        { id: 'Enf8', longitud: '103° 41.888\' W', latitud: '19° 14.884\' N' }
    ],
    servicios: [
        { id: 'Ser0', longitud: '103° 41.860\' W', latitud: '19° 14.877\' N' },
        { id: 'Serv1', longitud: '103° 41.935\' W', latitud: '19° 14.965\' N' },
        { id: 'Serv2', longitud: '103° 41.928\' W', latitud: '19° 14.972\' N' },
        { id: 'Serv3', longitud: '103° 41.950\' W', latitud: '19° 14.974\' N' },
        { id: 'Serv4', longitud: '103° 41.932\' W', latitud: '19° 14.988\' N' }
    ],
    psicologia: [
        { id: 'Psc1', longitud: '103° 41.857\' W', latitud: '19° 14.899\' N' },
        { id: 'Psc2', longitud: '103° 41.902\' W', latitud: '19° 14.902\' N' }
    ],
    letras: [
        { id: 'Lc', longitud: '103° 41.862\' W', latitud: '19° 14.913\' N' }
    ],
    posgrado: [
        { id: 'Pg', longitud: '103° 41.883\' W', latitud: '19° 14.929\' N' }
    ],
    estacionamiento: [
        { id: 'Est1', longitud: '103° 41.809\' W', latitud: '19° 14.944\' N' },
        { id: 'Est2', longitud: '103° 41.818\' W', latitud: '19° 14.954\' N' }
    ],
    cei: [
        { id: 'Cei1', longitud: '103° 41.890\' W', latitud: '19° 14.957\' N' }
    ],
    rectoria: [
        { id: 'Rect1', longitud: '103° 41.919\' W', latitud: '19° 14.960\' N' },
        { id: 'Rect2', longitud: '103° 41.929\' W', latitud: '19° 14.961\' N' },
        { id: 'Rect3', longitud: '103° 41.037\' W', latitud: '19° 14.953\' N' },
        { id: 'Rect4', longitud: '103° 41.940\' W', latitud: '19° 14.924\' N' },
        { id: 'Rect5', longitud: '103° 41.915\' W', latitud: '19° 14.938\' N' }
    ],
    cenedic: [
        { id: 'Cenedic1', longitud: '103° 41.916\' W', latitud: '19° 14.917\' N' },
        { id: 'Cenedic2', longitud: '103° 41.906\' W', latitud: '19° 14.916\' N' },
        { id: 'Cenedic3', longitud: '103° 41.917\' W', latitud: '19° 14.905\' N' },
        { id: 'Cenedic4', longitud: '103° 41.905\' W', latitud: '19° 14.909\' N' },
        { id: 'Cenedic5', longitud: '103° 41.893\' W', latitud: '19° 14.904\' N' }
    ],
    relacionesInt: [
        { id: 'RelInt1', longitud: '103° 41.969\' W', latitud: '19° 14.920\' N' },
        { id: 'RelInt2', longitud: '103° 41.954\' W', latitud: '19° 14.919\' N' },
        { id: 'RelInt3', longitud: '103° 41.937\' W', latitud: '19° 14.915\' N' }
    ],
    entradaSantiago: [
        { id: 'EntSant1', longitud: '103° 41.950\' W', latitud: '19° 14.889\' N' },
        { id: 'EntSant2', longitud: '103° 41.952\' W', latitud: '19° 14.874\' N' },
        { id: 'EntSant3', longitud: '103° 41.963\' W', latitud: '19° 14.876\' N' }
    ],
    delegacionCol: [
        { id: 'Del1', longitud: '103° 41.962\' W', latitud: '19° 14.928\' N' },
        { id: 'Del2', longitud: '103° 41.982\' W', latitud: '19° 14.931\' N' }
    ],
    mediosDidacticos: [
        { id: 'MedDid1', longitud: '103° 41.956\' W', latitud: '19° 14.945\' N' }
    ],
    contabilidad: [
        { id: 'Cont1', longitud: '103° 42.001\' W', latitud: '19° 14.918\' N' },
        { id: 'Cont2', longitud: '103° 42.024\' W', latitud: '19° 14.921\' N' }
    ],
    documentacion: [
        { id: 'Doc1', longitud: '103° 42.024\' W', latitud: '19° 14.943\' N' },
        { id: 'Doc2', longitud: '103° 42.049\' W', latitud: '19° 14.943\' N' },
        { id: 'Doc3', longitud: '103° 42.039\' W', latitud: '19° 14.934\' N' }
    ],
    mercadotecnia: [
        { id: 'Merc1', longitud: '103° 42', latitud: '19° 14' },
        { id: 'Merc2', longitud: '103° 42.016\' W', latitud: '19° 14.975\' N' },
        { id: 'Merc4', longitud: '103° 41.999\' W', latitud: '19° 14.988\' N' }
    ],
    bachillerato: [
        { id: 'Bach1', longitud: '103° 42.053\' W', latitud: '19° 14.968\' N' },
        { id: 'Bach2', longitud: '103° 42.065\' W', latitud: '19° 14.966\' N' },
        { id: 'Bach3', longitud: '103° 42.042\' W', latitud: '19° 14.983\' N' },
        { id: 'Bach4', longitud: '103° 42.026\' W', latitud: '19° 14.990\' N' },
        { id: 'Bach5', longitud: '103° 42.012\' W', latitud: '19° 15.000\' N' },
        { id: 'Bach6', longitud: '103° 42.009\' W', latitud: '19° 15.006\' N' }
    ],
    recursosMateriales: [
        { id: 'RecMat1', longitud: '103° 41.977\' W', latitud: '19° 14.995\' N' },
        { id: 'RecMat2', longitud: '103° 41.994\' W', latitud: '19° 15.013\' N' }
    ]
};

// Variables globales para el mapa y marcadores
let map;
let markers = {};

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-items a');
    const cardsContainer = document.getElementById('cards-container');

    // Inicializar el mapa
    initMap();

    // Función para inicializar el mapa
    function initMap() {
        map = L.map('map').setView([19.24915358314135, -103.69748514509429], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);

        // Agregar marcadores iniciales
        addAllMarkers();

        // Forzar un reajuste del mapa
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }

    // Función para convertir coordenadas DMS a decimal
    function dmsToDecimal(coordStr) {
        if (!coordStr || typeof coordStr !== 'string') return 0;
        
        const parts = coordStr.replace('°', '').replace("'", '').split(' ');
        const degrees = parseFloat(parts[0]);
        const minutes = parseFloat(parts[1]);
        const direction = parts[2];
        
        let decimal = degrees + (minutes / 60);
        if (direction === 'W' || direction === 'S') {
            decimal = -decimal;
        }
        return decimal;
    }

    // Función para agregar todos los marcadores al mapa
    function addAllMarkers() {
        Object.entries(luminariasData).forEach(([facultad, luminarias]) => {
            luminarias.forEach(luminaria => {
                const lat = dmsToDecimal(luminaria.latitud);
                const lon = dmsToDecimal(luminaria.longitud);
                
                const marker = L.marker([lat, lon], {
                    title: `Luminaria ${luminaria.id}`
                }).addTo(map);

                marker.bindPopup(`
                    <div style="font-family: Arial">
                        <h4>${facultad}</h4>
                        <b>ID:</b> ${luminaria.id}<br>
                        <b>Coordenadas:</b><br>
                        Lat: ${luminaria.latitud}<br>
                        Lon: ${luminaria.longitud}
                    </div>
                `);

                markers[luminaria.id] = marker;
            });
        });
    }

    // Función para crear tarjetas de luminarias
    function createLuminariaCards(facultad) {
        cardsContainer.innerHTML = '';
        const luminarias = luminariasData[facultad] || [];

        luminarias.forEach(luminaria => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>Luminaria ${luminaria.id}</h2>
                <p>Longitud: ${luminaria.longitud}</p>
                <p>Latitud: ${luminaria.latitud}</p>
                <p class="estado" id="estado-${luminaria.id}">Estado: Por verificar</p>
                <button class="btn-ver" onclick="verificarEstado('${luminaria.id}')">Ver</button>
            `;
            cardsContainer.appendChild(card);
        });

        // Si hay luminarias, centrar el mapa en la primera
        if (luminarias.length > 0) {
            const firstLuminaria = luminarias[0];
            const lat = dmsToDecimal(firstLuminaria.latitud);
            const lon = dmsToDecimal(firstLuminaria.longitud);
            map.setView([lat, lon], 18);
        }
    }

    // Event listeners para los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const faculty = link.getAttribute('data-faculty');
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            createLuminariaCards(faculty);
        });
    });

    // Mostrar telemática por defecto
    createLuminariaCards('telematica');
});

// Función para verificar estado (accesible globalmente)
function verificarEstado(id) {
    const estadoDisplay = document.getElementById(`estado-${id}`);
    const marker = markers[id];

    if (!estadoDisplay) {
        console.error('Elemento de estado no encontrado');
        return;
    }

    // Mostrar estado de carga
    estadoDisplay.textContent = 'Verificando...';

    fetch(`http://192.168.18.214/estado/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            estadoDisplay.textContent = `Estado: ${data}`;
            
            // Centrar mapa en el marcador y mostestadoDisplay.textContent = `Estado: ${data}`;
            
            if (marker) {
                map.setView(marker.getLatLng(), 19);
                marker.openPopup();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            estadoDisplay.textContent = 'Error al obtener estado';
        });
}