// trigononmetria.js

// Array de problemas de trigonometría
const problemasDeTrigonometria = [
    {
        enunciado: "¿Cuál es el valor del seno de 30 grados?",
        opciones: ["0.5", "0.866", "0.707", "1"],
        respuestaCorrecta: "0.5",
        explicacion: "El seno de 30 grados es 0.5 porque en un triángulo rectángulo, el seno se define como el lado opuesto al ángulo dividido por la hipotenusa. En un triángulo 30-60-90, el lado opuesto al ángulo de 30 grados es la mitad de la hipotenusa."
    },
    {
        enunciado: "¿Cuál es el valor del coseno de 60 grados?",
        opciones: ["0.5", "0.866", "0.707", "1"],
        respuestaCorrecta: "0.5",
        explicacion: "El coseno de 60 grados es 0.5 porque en un triángulo rectángulo, el coseno se define como el lado adyacente al ángulo dividido por la hipotenusa. En un triángulo 30-60-90, el lado adyacente al ángulo de 60 grados es la mitad de la hipotenusa."
    },
    {
        enunciado: "¿Cuál es el valor de la tangente de 45 grados?",
        opciones: ["1", "0.5", "√2", "0.707"],
        respuestaCorrecta: "1",
        explicacion: "La tangente de 45 grados es 1 porque en un triángulo rectángulo, la tangente se define como el lado opuesto al ángulo dividido por el lado adyacente. En un triángulo 45-45-90, los dos lados son iguales, por lo que la tangente es 1."
    },
    {
        enunciado: "¿Cuál es el valor del seno de 90 grados?",
        opciones: ["0", "1", "0.5", "0.707"],
        respuestaCorrecta: "1",
        explicacion: "El seno de 90 grados es 1 porque en un triángulo rectángulo, el seno se define como el lado opuesto al ángulo dividido por la hipotenusa. En un ángulo de 90 grados, el lado opuesto es igual a la hipotenusa."
    },
    {
        enunciado: "¿Cuál es el valor del coseno de 0 grados?",
        opciones: ["0", "1", "0.5", "0.707"],
        respuestaCorrecta: "1",
        explicacion: "El coseno de 0 grados es 1 porque en un triángulo rectángulo, el coseno se define como el lado adyacente al ángulo dividido por la hipotenusa. En un ángulo de 0 grados, el lado adyacente es igual a la hipotenusa."
    },
    {
        enunciado: "¿Cuál es el valor de la tangente de 30 grados?",
        opciones: ["√3/3", "1", "√3", "0.5"],
        respuestaCorrecta: "√3/3",
        explicacion: "La tangente de 30 grados es √3/3 porque en un triángulo rectángulo, la tangente se define como el lado opuesto al ángulo dividido por el lado adyacente. En un triángulo 30-60-90, esto resulta en √3/3."
    },
    {
        enunciado: "¿Cuál es el valor del seno de 45 grados?",
        opciones: ["0.5", "0.866", "0.707", "1"],
        respuestaCorrecta: "0.707",
        explicacion: "El seno de 45 grados es aproximadamente 0.707 porque en un triángulo rectángulo, el seno se define como el lado opuesto al ángulo dividido por la hipotenusa. En un triángulo 45-45-90, esto resulta en 1/√2, que es aproximadamente 0.707."
    },
    {
        enunciado: "¿Cuál es el valor del coseno de 45 grados?",
        opciones: ["0.5", "0.866", "0.707", "1"],
        respuestaCorrecta: "0.707",
        explicacion: "El coseno de 45 grados es aproximadamente 0.707 porque en un triángulo rectángulo, el coseno se define como el lado adyacente al ángulo dividido por la hipotenusa. En un triángulo 45-45-90, esto resulta en 1/√2, que es aproximadamente 0.707."
    },
    {
        enunciado: "¿Cuál es el valor del coseno de 30 grados?",
        opciones: ["0.5", "0.866", "0.707", "1"],
        respuestaCorrecta: "0.866",
        explicacion: "El coseno de 30 grados es aproximadamente 0.866 porque en un triángulo rectángulo, el coseno se define como el lado adyacente al ángulo dividido por la hipotenusa. En un triángulo 30-60-90, esto resulta en √3/2, que es aproximadamente 0.866."
    },
    {
        enunciado: "¿Cuál es el valor de la tangente de 60 grados?",
        opciones: ["√3", "1", "√3/3", "0.5"],
        respuestaCorrecta: "√3",
        explicacion: "La tangente de 60 grados es √3 porque en un triángulo rectángulo, la tangente se define como el lado opuesto al ángulo dividido por el lado adyacente. En un triángulo 30-60-90, esto resulta en √3."
    }
];

// Función para inicializar los problemas de trigonometría
function inicializarProblemasTrigonometria() {
    const contenedor = document.getElementById('problemas-container');

    problemasDeTrigonometria.forEach((problema, index) => {
        const problemaContenedor = document.createElement('section');
        problemaContenedor.className = 'problema';

        const problemaTitulo = document.createElement('h2');
        problemaTitulo.innerText = `Problema ${index + 1}`;
        problemaContenedor.appendChild(problemaTitulo);

        const enunciadoParrafo = document.createElement('p');
        enunciadoParrafo.innerText = problema.enunciado;
        problemaContenedor.appendChild(enunciadoParrafo);

        // Crear el contenedor de opciones
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

// Inicializar los problemas de trigonometría cuando se carga la página
window.onload = inicializarProblemasTrigonometria;

document.getElementById('theme-toggle').onclick = function() {
    document.body.classList.toggle('dark-theme');
};
