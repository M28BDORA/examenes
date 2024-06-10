// algebra.js

// Array de problemas de álgebra
const problemasDeAlgebra = [
    {
        enunciado: "Resuelve la ecuación: 2x + 5 = 17",
        opciones: ["x = 6", "x = 7", "x = 8", "x = 9"],
        respuestaCorrecta: "x = 6"
    },
    {
        enunciado: "Factoriza completamente el polinomio: x^2 + 6x + 9",
        opciones: ["(x + 3)^2", "(x + 2)(x + 4)", "(x + 1)(x + 5)", "(x - 3)^2"],
        respuestaCorrecta: "(x + 3)^2"
    },
    {
        enunciado: "Resuelve la ecuación cuadrática: x^2 - 4x - 5 = 0",
        opciones: ["x = 5, x = -1", "x = 6, x = -2", "x = 3, x = -3", "x = 7, x = -4"],
        respuestaCorrecta: "x = 5, x = -1"
    },
    {
        enunciado: "Resuelve para y: 3y - 2 = 16",
        opciones: ["y = 6", "y = 5", "y = 7", "y = 8"],
        respuestaCorrecta: "y = 6"
    },
    {
        enunciado: "Simplifica la expresión: 5x - 2x + 3",
        opciones: ["3x + 3", "2x + 3", "3x - 3", "5x + 3"],
        respuestaCorrecta: "3x + 3"
    },
    {
        enunciado: "Resuelve la inecuación: 2x - 3 > 7",
        opciones: ["x > 5", "x > 3", "x > 4", "x > 6"],
        respuestaCorrecta: "x > 5"
    },
    {
        enunciado: "Resuelve para z: 4z + 9 = 25",
        opciones: ["z = 3", "z = 4", "z = 5", "z = 6"],
        respuestaCorrecta: "z = 4"
    },
    {
        enunciado: "Resuelve la ecuación: 7x - 14 = 0",
        opciones: ["x = 2", "x = 3", "x = 4", "x = 1"],
        respuestaCorrecta: "x = 2"
    },
    {
        enunciado: "Factoriza el polinomio: x^2 - 16",
        opciones: ["(x + 4)(x - 4)", "(x + 4)^2", "(x - 4)^2", "(x + 2)(x - 8)"],
        respuestaCorrecta: "(x + 4)(x - 4)"
    },
    {
        enunciado: "Resuelve la ecuación: x/3 + 2 = 5",
        opciones: ["x = 9", "x = 10", "x = 8", "x = 7"],
        respuestaCorrecta: "x = 9"
    },
    {
        enunciado: "Resuelve para a: 5a - 20 = 0",
        opciones: ["a = 4", "a = 5", "a = 6", "a = 7"],
        respuestaCorrecta: "a = 4"
    },
    {
        enunciado: "Simplifica la expresión: 4x^2 - 2x + 7x - 3",
        opciones: ["4x^2 + 5x - 3", "4x^2 + 3x - 3", "4x^2 + 5x + 3", "4x^2 + 3x + 3"],
        respuestaCorrecta: "4x^2 + 5x - 3"
    },
    {
        enunciado: "Resuelve la inecuación: 3x + 2 ≤ 8",
        opciones: ["x ≤ 2", "x ≤ 3", "x ≤ 1", "x ≤ 4"],
        respuestaCorrecta: "x ≤ 2"
    },
    {
        enunciado: "Factoriza completamente: x^2 - 9x + 18",
        opciones: ["(x - 6)(x - 3)", "(x - 9)(x + 2)", "(x - 6)(x + 3)", "(x - 9)(x + 1)"],
        respuestaCorrecta: "(x - 6)(x - 3)"
    },
    {
        enunciado: "Resuelve para b: 2b + 3b = 25",
        opciones: ["b = 5", "b = 4", "b = 3", "b = 2"],
        respuestaCorrecta: "b = 5"
    }
];

// Función para inicializar los problemas de álgebra
function inicializarProblemas() {
    const contenedor = document.getElementById('problemas-container');

    problemasDeAlgebra.forEach((problema, index) => {
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
        problema.opciones.forEach((opcion, opcionIndex) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `problema-${index}`;
            input.value = opcion;
            input.id = `opcion-${index}-${opcionIndex}`;

            const label = document.createElement('label');
            label.textContent = opcion;
            label.setAttribute('for', `opcion-${index}-${opcionIndex}`);

            opcionesContainer.appendChild(input);
            opcionesContainer.appendChild(label);
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

                solucionParrafo.textContent = respuestaSeleccionada === solucionCorrecta ?
                    '¡Respuesta correcta!' :
                    `Respuesta incorrecta. La respuesta correcta es: ${solucionCorrecta}`;
                problemaContenedor.appendChild(solucionParrafo);
                verificacionBtn.style.display = 'none'; // Ocultar el botón después de verificar
            } else {
                alert('Por favor, seleccione una respuesta antes de verificar.');
            }
        });
        problemaContenedor.appendChild(verificacionBtn);

        contenedor.appendChild(problemaContenedor);
    });
}

// Inicializar los problemas de álgebra cuando se carga la página
window.onload = inicializarProblemas;

document.getElementById('theme-toggle').onclick = function() {
    document.body.classList.toggle('light-theme');
};
