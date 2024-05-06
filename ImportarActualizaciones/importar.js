// Función para inicializar la lista de años y provincias
function inicializarFormulario() {
  const anadaSelect = document.getElementById('anada');
  for (let i = 2024; i >= 1900; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    anadaSelect.appendChild(option);
  }

  // Inicializar provincias basadas en el país seleccionado
  const paisSelect = document.getElementById('pais');
  paisSelect.addEventListener('change', actualizarProvincias);
}

// Función para actualizar las provincias en función del país
function actualizarProvincias() {
  const pais = document.getElementById('pais').value;
  const provincias = {
    Argentina: ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'],
    Chile: ['Arica y Parinacota', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo', 'Valparaíso', 'Metropolitana de Santiago', 'Libertador General Bernardo OHiggins', 'Maule', 'Ñuble', 'Biobío', 'La Araucanía', 'Los Ríos', 'Los Lagos', 'Aysén del General Carlos Ibáñez del Campo', 'Magallanes y de la Antártica Chilena'],
    Uruguay: ['Artigas', 'Canelones', 'Cerro Largo', 'Colonia', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandú', 'Río Negro', 'Rivera', 'Rocha', 'Salto', 'San José', 'Soriano', 'Tacuarembó', 'Treinta y Tres']
  };

  const provinciaSelect = document.getElementById('provincia');
  provinciaSelect.innerHTML = ''; // Limpiar provincias anteriores

  provincias[pais].forEach(function(provincia) {
    let option = document.createElement('option');
    option.value = provincia;
    option.text = provincia;
    provinciaSelect.appendChild(option);
  });
}


// Llamada a la función inicializarFormulario al cargar la página
document.addEventListener('DOMContentLoaded', inicializarFormulario);

// Función para mostrar los datos del vino cuando se selecciona una bodega
function mostrarDatosVino() {
    const bodegaSeleccionada = document.getElementById('bodega-select').value;
    const vinoSelect = document.getElementById('vino-select');
    vinoSelect.innerHTML = ''; // Limpiar opciones anteriores

    if (bodegaSeleccionada) {
        // Encuentra la bodega seleccionada en el array de bodegas
        const bodega = bodegas.find(b => b.nombre === bodegaSeleccionada);
        // Llena el selector de vinos con los vinos de la bodega seleccionada
        bodega.vinos.forEach(vino => {
            let option = document.createElement('option');
            option.value = vino.nombre;
            option.textContent = vino.nombre;
            vinoSelect.appendChild(option);
        });
        document.getElementById('datos-vino-container').style.display = 'block';
        cargarDatosVino(); // Carga los datos del primer vino en los campos
    } else {
        document.getElementById('datos-vino-container').style.display = 'none';
    }
}

// Función para cargar los datos del vino seleccionado en los campos del formulario
function cargarDatosVino() {
    const vinoSeleccionado = document.getElementById('vino-select').value;
    const bodegaSeleccionada = document.getElementById('bodega-select').value;
    const bodega = bodegas.find(b => b.nombre === bodegaSeleccionada);
    const vino = bodega.vinos.find(v => v.nombre === vinoSeleccionado);

    if (vino) {
        document.getElementById('notaDeCata').value = vino.notaDeCata;
        document.getElementById('maridaje').value = vino.maridajes;
        document.getElementById('varietal').value = vino.varietal;
        document.getElementById('anada').value = vino.anada;
        document.getElementById('pais').value = vino.pais;
        
        // Actualiza las provincias basadas en el país del vino seleccionado
        actualizarProvincias();

        // Espera a que se actualicen las provincias y luego selecciona la correcta
        setTimeout(() => {
            document.getElementById('provincia').value = vino.provincia;
        }, 0);

        document.getElementById('precio').value = vino.precio;
    }
}


// Función para inicializar el selector de bodegas al cargar la página
window.onload = function() {
const bodegaSelect = document.getElementById('bodega-select');
// Suponiendo que 'bodegas' es un array de objetos Bodega disponibles en BodegasVinos.js
  bodegas.forEach(bodega => {
  let option = document.createElement('option');
    option.value = bodega.nombre;
    option.textContent = bodega.nombre;
    bodegaSelect.appendChild(option);
  });
};

// Función para actualizar los datos del vino seleccionado
function actualizarVino() {
    const vinoSeleccionado = document.getElementById('vino-select').value;
    const bodegaSeleccionada = document.getElementById('bodega-select').value;
    const bodega = bodegas.find(b => b.nombre === bodegaSeleccionada);
    const vino = bodega.vinos.find(v => v.nombre === vinoSeleccionado);

    // Obtener los nuevos valores de los campos del formulario
    const nuevasNotaDeCata = document.getElementById('notaDeCata').value;
    const nuevoMaridaje = document.getElementById('maridaje').value;
    const nuevoVarietal = document.getElementById('varietal').value;
    const nuevaAnada = document.getElementById('anada').value;
    const nuevoPais = document.getElementById('pais').value;
    const nuevaProvincia = document.getElementById('provincia').value;
    const nuevoPrecio = document.getElementById('precio').value;

    // Asignar los nuevos valores a las propiedades del objeto vino
    vino.notaDeCata = nuevasNotaDeCata;
    vino.maridajes = nuevoMaridaje;
    vino.varietal = nuevoVarietal;
    vino.anada = nuevaAnada;
    vino.pais = nuevoPais;
    vino.provincia = nuevaProvincia;
    vino.precio = nuevoPrecio;

}