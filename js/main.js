/* =====================================
   1. ARREGLO DE MUNICIONES
   ===================================== */

let listaMunicionesTarkov = [
    {
        nombre: "7.62x51mm M61",
        tipo: "Calibre pesado",
        penetracion: "Clase 6 (Máxima)",
        imagen: "assets/img/municiones/m61.png"
    },
    {
        nombre: "7.62x51mm M62 Tracer",
        tipo: "Calibre pesado",
        penetracion: "Clase 5 (Alta)",
        imagen: "assets/img/municiones/m62.jpg"
    },
    {
        nombre: "7.62x51mm M80",
        tipo: "Calibre pesado",
        penetracion: "Clase 4 (Media-alta)",
        imagen: "assets/img/municiones/m80.jpg"
    },
    {
        nombre: "7.62x51mm BCP FMJ",
        tipo: "Calibre pesado",
        penetracion: "Clase 3 (Media)",
        imagen: "assets/img/municiones/bcp-fmj.jpg"
    },
    {
        nombre: "7.62x54mm R BS",
        tipo: "Calibre pesado",
        penetracion: "Clase 6 (Máxima)",
        imagen: "assets/img/municiones/762x54-bs.jpg"
    },
    {
        nombre: "7.62x54mm R SNB",
        tipo: "Calibre pesado",
        penetracion: "Clase 5 (Alta)",
        imagen: "assets/img/municiones/762x54-snb.jpg"
    },
    {
        nombre: "7.62x39mm BP gzh",
        tipo: "Fusil",
        penetracion: "Clase 5 (Alta)",
        imagen: "assets/img/municiones/762x39-bp.jpg"
    },
    {
        nombre: "7.62x39mm PS gzh",
        tipo: "Fusil",
        penetracion: "Clase 3 (Media)",
        imagen: "assets/img/municiones/762x39-ps.jpg"
    },
    {
        nombre: "5.56x45mm M995",
        tipo: "Fusil",
        penetracion: "Clase 6 (Máxima)",
        imagen: "assets/img/municiones/m995.jpg"
    },
    {
        nombre: "5.56x45mm M855A1",
        tipo: "Fusil",
        penetracion: "Clase 4 (Media-alta)",
        imagen: "assets/img/municiones/m855a1.jpg"
    },
    {
        nombre: "5.56x45mm M855",
        tipo: "Fusil",
        penetracion: "Clase 3 (Media)",
        imagen: "assets/img/municiones/m855.jpg"
    },
    {
        nombre: "5.45x39mm 7N40",
        tipo: "Fusil",
        penetracion: "Clase 5 (Alta)",
        imagen: "assets/img/municiones/7n40.jpg"
    },
    {
        nombre: "5.45x39mm BS gs",
        tipo: "Fusil",
        penetracion: "Clase 5 (Alta)",
        imagen: "assets/img/municiones/545-bs.jpg"
    },
    {
        nombre: "5.45x39mm PPBS gs Igolnik",
        tipo: "Fusil",
        penetracion: "Clase 6 (Máxima)",
        imagen: "assets/img/municiones/545-ppbs.jpg"
    },
    {
        nombre: "9x19mm AP 6.3",
        tipo: "Pistola",
        penetracion: "Clase 3 (Media)",
        imagen: "assets/img/municiones/ap63.jpg"
    },
    {
        nombre: "9x19mm PBP gzh",
        tipo: "Pistola",
        penetracion: "Clase 4 (Media-alta)",
        imagen: "assets/img/municiones/pbp.jpg"
    },
    {
        nombre: "9x21mm BT gzh",
        tipo: "Pistola",
        penetracion: "Clase 4 (Media-alta)",
        imagen: "assets/img/municiones/9x21-bt.jpg"
    },
    {
        nombre: ".45 ACP AP",
        tipo: "Pistola",
        penetracion: "Clase 3 (Media)",
        imagen: "assets/img/municiones/45-ap.jpg"
    },
    {
        nombre: "12/70 AP-20",
        tipo: "Escopeta",
        penetracion: "Clase 4 (Media-alta)",
        imagen: "assets/img/municiones/ap20.jpg"
    },
    {
        nombre: "12/70 Flechette",
        tipo: "Escopeta",
        penetracion: "Clase 4 (Media-alta)",
        imagen: "assets/img/municiones/flechette.jpg"
    }
];


/* =====================================
   2. MOSTRAR LAS MUNICIONES
   ===================================== */

function renderizarMuniciones(municiones) {

    let contenedor = document.getElementById("contenedorApi");

    // Limpiamos las tarjetas anteriores
    contenedor.innerHTML = "";

    // Comprobamos si hay resultados
    if (municiones.length === 0) {
        contenedor.innerHTML =
            "<p class='text-center'>No se encontraron municiones.</p>";

        return;
    }

    // Recorremos el arreglo
    municiones.forEach(function(municion) {

        let tarjeta = `
            <div class="col-md-4 col-sm-6 mb-3">

                <div class="card tarjeta-municion">

                    <img
                        src="${municion.imagen}"
                        alt="${municion.nombre}"
                        onerror="this.style.display='none';
                        this.nextElementSibling.style.display='flex';"
                    >

                    <div class="imagen-no-disponible" style="display: none;">
                        Imagen no disponible
                    </div>

                    <div class="card-body">

                        <h3>${municion.nombre}</h3>

                        <p>
                            <strong>Tipo:</strong>
                            ${municion.tipo}
                        </p>

                        <p>
                            <strong>Penetración:</strong>
                            ${municion.penetracion}
                        </p>

                    </div>

                </div>

            </div>
        `;

        // Añadimos la tarjeta a la página
        contenedor.innerHTML += tarjeta;
    });
}


/* =====================================
   3. BUSCADOR DE MUNICIONES
   ===================================== */

let inputFiltro = document.getElementById("inputFiltro");

inputFiltro.addEventListener("input", function() {

    // Obtenemos lo que escribe el usuario
    let texto = inputFiltro.value.toLowerCase();

    // Filtramos el arreglo
    let municionesFiltradas = listaMunicionesTarkov.filter(
        function(municion) {

            return (
                municion.nombre.toLowerCase().includes(texto) ||
                municion.tipo.toLowerCase().includes(texto) ||
                municion.penetracion.toLowerCase().includes(texto)
            );

        }
    );

    // Mostramos solamente los resultados
    renderizarMuniciones(municionesFiltradas);
});


/* =====================================
   4. RECOMENDADOR DE municiones
   ===================================== */

function obtenerRecomendacion(nivel) {

    if (nivel === 1 || nivel === 2) {

        return `
            <strong>Armadura baja:</strong>
            puedes considerar municiones como
            7.62x39mm PS gzh o 5.56x45mm M855.
        `;

    } else if (nivel === 3 || nivel === 4) {

        return `
            <strong>Armadura media:</strong>
            considera municiones como
            7.62x51mm M80 o 5.56x45mm M855A1, 7.62x51mm BCP FMJ,
            9x19mm PBP gzh, 9x21mm BT gzh, .45 ACP AP,
            12/70 AP-20, 9x19mm AP 6.3.
        `;

    } else if (nivel === 5 || nivel === 6) {

        return `
            <strong>Armadura alta:</strong>
            considera municiones de mayor penetración,
            como 7.62x51mm M61, 5.56x45mm M995, 9x39mm BP, 
            7.62x54mm R SNB, 7.62x39mm BP gzh, 5.45x39mm BS gs, 
            5.45x39mm PPBS gs Igolnik, 5.45x39mm 7N40 y 12/70 Flechette

.
        `;

    } else {

        return `
            <span class="text-danger">
                Introduce un nivel válido entre 1 y 6.
            </span>
        `;
    }
}


// Detectamos cuando se envía el formulario
let formulario = document.getElementById("form-calibre");

formulario.addEventListener("submit", function(evento) {

    // Evitamos que la página se recargue
    evento.preventDefault();

    let inputNivel = document.getElementById("nivel-armadura");

    let resultado = document.getElementById(
        "resultado-recomendacion"
    );

    let nivel = Number(inputNivel.value);

    // Comprobamos que el nivel sea válido
    if (
        inputNivel.value === "" ||
        !Number.isInteger(nivel) ||
        nivel < 1 ||
        nivel > 6
    ) {

        resultado.innerHTML =
            "Por favor, introduce un nivel entre 1 y 6.";

        return;
    }

    // Mostramos la recomendación
    resultado.innerHTML = obtenerRecomendacion(nivel);

});


/* =====================================
   5. INICIAR LA PÁGINA
   ===================================== */

// Mostramos todas las municiones al abrir la página
renderizarMuniciones(listaMunicionesTarkov);