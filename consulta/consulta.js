// Obtiene el elemento principal
let mainContent = document.getElementById('main-content');

// Recorre todas las bodegas
for (let bodega of bodegas) {
  // Crea un elemento para la bodega
  let bodegaElement = document.createElement('div');
  bodegaElement.className = 'bodega';
  bodegaElement.innerHTML = `<h2>${bodega.nombre}</h2>`;

  // Recorre todos los vinos de la bodega
  for (let vino of bodega.vinos) {
    // Crea un elemento para el vino
    let vinoElement = document.createElement('div');
    vinoElement.className = 'vino';
    vinoElement.innerHTML = `
    <div class="contenedor-vino">
        <h3>${vino.nombre}</h3>
        <div class="detalle-vino">
            <img src="${vino.imagen}" alt="Foto del vino ${vino.nombre}" class="imagen-vino">
            <div class="info-vino">
                <p class="titulo"> Varietal </p> 
                <p class="valor">${vino.varietal}</p>
                <p class="titulo"> Añada </p>
                <p class="valor">${vino.anada}</p>
                <p class="titulo"> Precio (ARS) </p>
                <p class="valor">${vino.precio}</p>
                 <p class="titulo"> Región </p>
                <p class="valor">${vino.region}</p>
                <p class="titulo"> País </p>
                <p class="valor">${vino.pais}</p>
                <p class="titulo"> Provincia </p>
                <p class="valor">${vino.provincia}</p>
                <p class="titulo"> Nota de Cata </p>
                <p class="valor">${vino.notaDeCata}</p>
                <p class="titulo"> Maridaje Sugerido </p>
                <p class="valor">${vino.maridajes}</p>
            </div>
        </div>
    </div>
    `;

    // Añade el vino a la bodega
    bodegaElement.appendChild(vinoElement);
  }

  // Añade la bodega al contenido principal
  mainContent.appendChild(bodegaElement);
}
