// Array de problemas de aritmética
const problemasDeAritmetica = [
    {
        enunciado: "¿Cuánto es 5 + 3?",
        opciones: ["6", "7", "8", "9"],
        respuestaCorrecta: "8",
        explicacion: "5 + 3 = 8. Simple suma de números enteros."
    },
    {
        enunciado: "¿Cuánto es 12 - 4?",
        opciones: ["6", "7", "8", "9"],
        respuestaCorrecta: "8",
        explicacion: "12 - 4 = 8. Simple resta de números enteros."
    },
    {
        enunciado: "¿Cuánto es 7 x 6?",
        opciones: ["42", "36", "48", "40"],
        respuestaCorrecta: "42",
        explicacion: "7 x 6 = 42. Multiplicación de números enteros."
    },
    {
        enunciado: "¿Cuánto es 36 ÷ 6?",
        opciones: ["5", "6", "7", "8"],
        respuestaCorrecta: "6",
        explicacion: "36 ÷ 6 = 6. División de números enteros."
    },
    {
        enunciado: "¿Cuánto es 15 + 27?",
        opciones: ["32", "42", "52", "62"],
        respuestaCorrecta: "42",
        explicacion: "15 + 27 = 42. Suma de números enteros."
    },
    {
        enunciado: "¿Cuánto es 50 - 23?",
        opciones: ["17", "27", "37", "47"],
        respuestaCorrecta: "27",
        explicacion: "50 - 23 = 27. Resta de números enteros."
    },
    {
        enunciado: "¿Cuánto es 9 x 9?",
        opciones: ["71", "72", "81", "91"],
        respuestaCorrecta: "81",
        explicacion: "9 x 9 = 81. Multiplicación de números enteros."
    },
    {
        enunciado: "¿Cuánto es 64 ÷ 8?",
        opciones: ["6", "7", "8", "9"],
        respuestaCorrecta: "8",
        explicacion: "64 ÷ 8 = 8. División de números enteros."
    },
    {
        enunciado: "¿Cuánto es 100 + 150?",
        opciones: ["200", "250", "300", "350"],
        respuestaCorrecta: "250",
        explicacion: "100 + 150 = 250. Suma de números enteros."
    },
    {
        enunciado: "¿Cuánto es 200 - 75?",
        opciones: ["100", "115", "125", "150"],
        respuestaCorrecta: "125",
        explicacion: "200 - 75 = 125. Resta de números enteros."
    },
    {
        enunciado: "Juan tiene el doble de la edad que tenía hace 10 años. Si la suma de las edades de Juan y su hijo es 60 años, ¿cuántos años tiene Juan ahora?",
        opciones: ["20 años", "30 años", "40 años", "50 años"],
        respuestaCorrecta: "40 años",
        explicacion: "Si Juan tiene actualmente x años, entonces hace 10 años tenía x−10 años. Según el enunciado, Juan tiene el doble de la edad que tenía hace 10 años, entonces x = 2(x−10). Además, la suma de las edades de Juan y su hijo es 60 años, entonces x + (x/2) = 60. Resolviendo estas ecuaciones, encontramos que x = 40 años."
    },
    {
        enunciado: "Un tren viaja a una velocidad constante de 80 km/h durante 3 horas. Después, aumenta su velocidad a 100 km/h durante 2 horas. ¿Cuál es la distancia total recorrida por el tren?",
        opciones: ["240 km", "280 km", "320 km", "360 km"],
        respuestaCorrecta: "320 km",
        explicacion: "La distancia recorrida a una velocidad constante se calcula multiplicando la velocidad por el tiempo. Para la primera parte del viaje, el tren recorre 80 km/h × 3 h = 240 km. Para la segunda parte, recorre 100 km/h × 2 h = 200 km. La distancia total recorrida es 240 km + 200 km = 320 km."
    },
    {
        enunciado: "Si 3 veces el número de manzanas de Juan más 5 manzanas es igual al doble del número de manzanas de Pedro menos 10 manzanas, ¿cuántas manzanas tiene Pedro si Juan tiene 15 manzanas?",
        opciones: ["10 manzanas", "15 manzanas", "20 manzanas", "25 manzanas"],
        respuestaCorrecta: "20 manzanas",
        explicacion: "Sea x el número de manzanas de Juan y y el número de manzanas de Pedro. Según el enunciado, tenemos la ecuación 3x + 5 = 2y - 10. Si Juan tiene 15 manzanas, entonces x = 15. Sustituyendo este valor en la ecuación, encontramos que 3(15) + 5 = 2y - 10. Resolviendo esta ecuación, obtenemos que y = 20."
    },
    {
        enunciado: "Un padre tiene actualmente el triple de la edad de su hijo. Si la suma de sus edades es 45 años, ¿cuántos años tiene el hijo?",
        opciones: ["9 años", "12 años", "15 años", "18 años"],
        respuestaCorrecta: "15 años",
        explicacion: "Sea x la edad del hijo. Según el enunciado, el padre tiene el triple de la edad del hijo, entonces la edad del padre es 3x. Además, la suma de sus edades es 45 años, entonces x + 3x = 45. Resolviendo esta ecuación, encontramos que x = 15."
    },
    {
        enunciado: "Un avión viaja a una velocidad constante de 600 km/h durante 2 horas. Luego, disminuye su velocidad a 400 km/h durante 3 horas. ¿Cuál es la distancia total recorrida por el avión?",
        opciones: ["1200 km", "1800 km", "2400 km", "3000 km"],
        respuestaCorrecta: "2400 km",
        explicacion: "La distancia recorrida a una velocidad constante se calcula multiplicando la velocidad por el tiempo. Para la primera parte del viaje, el avión recorre 600 km/h × 2 h = 1200 km. Para la segunda parte, recorre 400 km/h × 3 h = 1200 km."
    }
];

// Función para inicializar los problemas de aritmética
function inicializarProblemasAritmetica() {
    const contenedor = document.getElementById('problemas-container');

    problemasDeAritmetica.forEach((problema, index) => {
        const problemaContenedor = document.createElement('section');
        problemaContenedor.className = 'problema';

        const problemaTitulo = document.createElement('h2');
        problemaTitulo.innerText = `Problema ${index + 1}`;
        problemaContenedor.appendChild(problemaTitulo);

        const enunciadoParrafo = document.createElement('p');
        enunciadoParrafo.innerText = problema.enunciado;
        problemaContenedor.appendChild(enunciadoParrafo);

        // Crear el grupo de opciones
        const opcionesContainer = document.createElement('div');
        opcionesContainer.className = 'opciones-container';

        problema.opciones.forEach((opcion, opcionIndex) => {
            const opcionContainer = document.createElement('div');
            opcionContainer.className = 'opcion';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `problema-${index}`;
            input.value = opcion;
            input.id = `opcion-${index}-${opcionIndex}`;

            const label = document.createElement('label');
            label.textContent = opcion;
            label.setAttribute('for', `opcion-${index}-${opcionIndex}`);

            opcionContainer.appendChild(input);
            opcionContainer.appendChild(label);
            opcionesContainer.appendChild(opcionContainer);
        });

        problemaContenedor.appendChild(opcionesContainer);

        const verificacionBtn = document.createElement('button');
        verificacionBtn.textContent = 'Verificar respuesta';
        verificacionBtn.addEventListener('click', () => {
            const inputs = document.querySelectorAll(`input[name="problema-${index}"]:checked`);
            if (inputs.length > 0) {
                const respuestaSeleccionada = inputs[0].value;
                const solucionParrafo = document.createElement('p');
                const solucionCorrecta = problema.respuestaCorrecta;

                if (respuestaSeleccionada === solucionCorrecta) {
                    solucionParrafo.textContent = '¡Respuesta correcta!';
                    solucionParrafo.style.color = 'green';
                } else {
                    solucionParrafo.textContent = `Respuesta incorrecta. La respuesta correcta es: ${solucionCorrecta}.`;
                    solucionParrafo.style.color = 'red';
                }

                const explicacionParrafo = document.createElement('p');
                explicacionParrafo.textContent = `Explicación: ${problema.explicacion}`;
                problemaContenedor.appendChild(solucionParrafo);
                problemaContenedor.appendChild(explicacionParrafo);
                verificacionBtn.style.display = 'none'; // Ocultar el botón después de verificar
            } else {
                alert('Por favor, seleccione una respuesta antes de verificar.');
            }
        });
        problemaContenedor.appendChild(verificacionBtn);

        contenedor.appendChild(problemaContenedor);
    });
}

// Inicializar los problemas de aritmética cuando se carga la página
window.onload = inicializarProblemasAritmetica;

document.getElementById('theme-toggle').onclick = function () {
    document.body.classList.toggle('dark-theme');
};