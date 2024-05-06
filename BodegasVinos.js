// Creacion de la Clase Vino
class Vino {
  constructor(nombre, varietal, anada, imagen, precio, bodega, region, provincia, pais, notaDeCata, maridajes) {
    this.nombre = nombre;
    this.varietal = varietal;
    this.anada = anada;
    this.imagen = imagen;
    this.precio = precio;
    this.bodega = bodega;
    this.region = region;
    this.provincia = provincia;
    this.pais = pais;
    this.notaDeCata = notaDeCata;
    this.maridajes = maridajes;
  }
}

// Creacion de la Clase Bodega
class Bodega {
  constructor(nombre, vinos = []) {
    this.nombre = nombre;
    this.vinos = vinos;
  }

// Metodo para Agregar Vinos al Array Vinos
  agregarVino(vino) {
    this.vinos.push(vino);
  }
}


// Creacion de Vinos de fomra manual
let vinos = [
  new Vino("El Gaucho", "Malbec", 2020, "../Etiquetas/ElGaucho.jpeg", 5500, "Bodega Sol", "Mendoza", "Mendoza", "Argentina", "Frutas rojas maduras y un toque de chocolate amargo.", "Tira de asado"),
  new Vino("Estancia 33", "Cabernet Sauvignon", 2019, "../Etiquetas/Estancia33.jpeg", 12000, "Bodega Luna", "Mendoza", "Mendoza", "Argentina", "Aromas florales con un final de cacao.", "Salmón rosado"),
  new Vino("La Pera", "Syrah", 2021, "../Etiquetas/LaPera.jpeg", 7000, "Bodega Estrella", "San Juan", "San Juan", "Argentina", "Sabores afrutados con un toque de madera.", "Postre muy dulce"),
  new Vino("Morgan", "Merlot", 2022, "../Etiquetas/Morgan.jpeg", 6800, "Bodega Río", "Río Negro", "Río Negro", "Argentina", "Notas de durazno y un final ácido.", "Ensalada de mariscos"),
  new Vino("Jilguero", "Pinot Noir", 2021, "../Etiquetas/Jilguero.jpeg", 4900, "Bodega Montaña", "Río Negro", "Río Negro", "Argentina", "Sabores de frutas del bosque con un toque de vainilla.", "Pescado blanco"),
  new Vino("La Bengalla", "Malbec", 2020, "../Etiquetas/LaBengalla.jpeg", 5550, "Bodega Cielo", "Mendoza", "Mendoza", "Argentina", "Notas de frutas negras y un final especiado.", "Champagne con ostras"),
  new Vino("Barro Tal Vez", "Cabernet Sauvignon", 2019, "../Etiquetas/BarroTalVez.jpeg", 6650, "Bodega Mar", "Mendoza", "Mendoza", "Argentina", "Aromas terrosos con un toque de pimienta negra.", "Postre de chocolate"),
  new Vino("Twenty Cities", "Cabernet Sauvignon", 2021, "../Etiquetas/TwentyCities.png", 5720, "Bodega Tierra", "San Juan", "San Juan", "Argentina", "Sabores de frutas del bosque con un final de cuero.", "Carne roja a la parrilla"),
  new Vino("El Mate", "Merlot", 2022, "../Etiquetas/ElMate.jpeg", 9820, "Bodega Viento", "Río Negro", "Río Negro", "Argentina", "Notas herbáceas y un final de tabaco.", "Lenguado a la plancha"),
  new Vino("La Guitera", "Pinot Noir", 2021, "../Etiquetas/LaGuitera.jpeg", 4920, "Bodega Fuego", "Río Negro", "Río Negro", "Argentina", "Sabores de cereza y un final de café.", "Postre muy dulce"),
  new Vino("The Bandoneon", "Malbec", 2020, "../Etiquetas/TheBandoneon.jpeg", 7520, "Bodega Sol", "Mendoza", "Mendoza", "Argentina", "Notas de frutas rojas y un final de vainilla.", "Lenguado a la plancha"),
  new Vino("Punte", "Cabernet Sauvignon", 2019, "../Etiquetas/Punte.jpeg", 7620, "Bodega Luna", "Mendoza", "Mendoza", "Argentina", "Aromas florales con un toque de chocolate.", "Salmón rosado"),
  new Vino("El Balcetto", "Syrah", 2021, "../Etiquetas/ElBalcetto.jpeg", 6720, "Bodega Estrella", "San Juan", "San Juan", "Argentina", "Sabores afrutados con un final de madera.", "Ensalada de mariscos"),
  new Vino("Oboi", "Merlot", 2022, "../Etiquetas/Oboi.jpeg", 5820, "Bodega Río", "Río Negro", "Río Negro", "Argentina", "Notas de durazno y un final ácido.", "Solomillo de cerdo"),
  new Vino("Ganges", "Pinot Noir", 2021, "../Etiquetas/Ganges.jpeg", 4920, "Bodega Montaña", "Río Negro", "Río Negro", "Argentina", "Sabores de frutas del bosque con un toque de vainilla.", "Solomillo de cerdo")
];

// Creacion de Bodegas con sus Respectivos Vinos
let bodegas = [
  new Bodega("Bodega Sol", [vinos[0], vinos[10]]),
  new Bodega("Bodega Luna", [vinos[1], vinos[11]]),
  new Bodega("Bodega Estrella", [vinos[2], vinos[12]]),
  new Bodega("Bodega Río", [vinos[3], vinos[13]]),
  new Bodega("Bodega Montaña", [vinos[4], vinos[14]]),
  new Bodega("Bodega Cielo", [vinos[5]]),
  new Bodega("Bodega Mar", [vinos[6]]),
  new Bodega("Bodega Tierra", [vinos[7]]),
  new Bodega("Bodega Viento", [vinos[8]]),
  new Bodega("Bodega Fuego", [vinos[9]])
];




