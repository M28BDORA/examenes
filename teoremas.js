// Array de teoremas matemáticos
const teoremasMatematicos = [
    {
        enunciado: "Si un triángulo tiene dos lados de igual longitud, ¿cómo se llama el triángulo?",
        opciones: ["Equilátero", "Escaleno", "Isósceles", "Rectángulo"],
        respuestaCorrecta: "Isósceles",
        explicacion: "Un triángulo isósceles tiene al menos dos lados de igual longitud."
    },
    {
        enunciado: "En un triángulo rectángulo, si los catetos miden 6 cm y 8 cm, ¿cuál es la longitud de la hipotenusa?",
        opciones: ["10 cm", "14 cm", "12 cm", "8 cm"],
        respuestaCorrecta: "10 cm",
        explicacion: "Según el teorema de Pitágoras, la hipotenusa se calcula como √(6^2 + 8^2) = 10 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, si la hipotenusa mide 13 cm y uno de los catetos mide 5 cm, ¿cuál es la longitud del otro cateto?",
        opciones: ["12 cm", "10 cm", "8 cm", "9 cm"],
        respuestaCorrecta: "12 cm",
        explicacion: "Según el teorema de Pitágoras, el otro cateto se calcula como √(13^2 - 5^2) = 12 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, los catetos miden 7 cm y 24 cm. ¿Cuál es la longitud de la hipotenusa?",
        opciones: ["25 cm", "23 cm", "26 cm", "24 cm"],
        respuestaCorrecta: "25 cm",
        explicacion: "Según el teorema de Pitágoras, la hipotenusa se calcula como √(7^2 + 24^2) = 25 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, la hipotenusa mide 17 cm y un cateto mide 15 cm. ¿Cuál es la longitud del otro cateto?",
        opciones: ["8 cm", "10 cm", "12 cm", "9 cm"],
        respuestaCorrecta: "8 cm",
        explicacion: "Según el teorema de Pitágoras, el otro cateto se calcula como √(17^2 - 15^2) = 8 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, los catetos miden 9 cm y 12 cm. ¿Cuál es la longitud de la hipotenusa?",
        opciones: ["15 cm", "13 cm", "14 cm", "16 cm"],
        respuestaCorrecta: "15 cm",
        explicacion: "Según el teorema de Pitágoras, la hipotenusa se calcula como √(9^2 + 12^2) = 15 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, la hipotenusa mide 20 cm y uno de los catetos mide 16 cm. ¿Cuál es la longitud del otro cateto?",
        opciones: ["12 cm", "15 cm", "14 cm", "10 cm"],
        respuestaCorrecta: "12 cm",
        explicacion: "Según el teorema de Pitágoras, el otro cateto se calcula como √(20^2 - 16^2) = 12 cm."
    },
    {
        enunciado: "¿Cuál es el valor de π (pi) aproximadamente?",
        opciones: ["3.14", "2.71", "1.61", "1.41"],
        respuestaCorrecta: "3.14",
        explicacion: "El valor de π (pi) es aproximadamente 3.14, y se utiliza para calcular la circunferencia y el área de un círculo."
    },
    {
        enunciado: "En un triángulo, un segmento paralelo a uno de los lados divide los otros dos lados en segmentos de 3 cm y 4 cm. Si el segmento paralelo mide 5 cm, ¿cuánto mide el lado paralelo?",
        opciones: ["7 cm", "8 cm", "6 cm", "5 cm"],
        respuestaCorrecta: "7 cm",
        explicacion: "Según el teorema de Tales, los lados correspondientes de triángulos semejantes son proporcionales."
    },
    {
        enunciado: "En un triángulo, un segmento paralelo a uno de los lados divide los otros dos lados en segmentos de 5 cm y 6 cm. Si el segmento paralelo mide 7 cm, ¿cuánto mide el lado paralelo?",
        opciones: ["8.4 cm", "9 cm", "10 cm", "8 cm"],
        respuestaCorrecta: "8.4 cm",
        explicacion: "Según el teorema de Tales, los lados correspondientes de triángulos semejantes son proporcionales."
    },
    {
        enunciado: "En un triángulo, un segmento paralelo a uno de los lados divide los otros dos lados en segmentos de 7 cm y 9 cm. Si el segmento paralelo mide 11 cm, ¿cuánto mide el lado paralelo?",
        opciones: ["14 cm", "13 cm", "15 cm", "12 cm"],
        respuestaCorrecta: "14 cm",
        explicacion: "Según el teorema de Tales, los lados correspondientes de triángulos semejantes son proporcionales."
    },
    {
        enunciado: "En un triángulo, un segmento paralelo a uno de los lados divide los otros dos lados en segmentos de 8 cm y 10 cm. Si el segmento paralelo mide 12 cm, ¿cuánto mide el lado paralelo?",
        opciones: ["15 cm", "16 cm", "14 cm", "18 cm"],
        respuestaCorrecta: "15 cm",
        explicacion: "Según el teorema de Tales, los lados correspondientes de triángulos semejantes son proporcionales."
    },
    {
        enunciado: "En un triángulo, un segmento paralelo a uno de los lados divide los otros dos lados en segmentos de 4 cm y 5 cm. Si el segmento paralelo mide 6 cm, ¿cuánto mide el lado paralelo?",
        opciones: ["7.5 cm", "8 cm", "9 cm", "7 cm"],
        respuestaCorrecta: "7.5 cm",
        explicacion: "Según el teorema de Tales, los lados correspondientes de triángulos semejantes son proporcionales."
    },
    {
        enunciado: "En un triángulo, un segmento paralelo a uno de los lados divide los otros dos lados en segmentos de 6 cm y 8 cm. Si el segmento paralelo mide 9 cm, ¿cuánto mide el lado paralelo?",
        opciones: ["12 cm", "10 cm", "11 cm", "13 cm"],
        respuestaCorrecta: "12 cm",
        explicacion: "Según el teorema de Tales, los lados correspondientes de triángulos semejantes son proporcionales."
    },    
    {
        enunciado: "Si un ángulo en un triángulo rectángulo mide 90 grados, ¿cómo se llama este ángulo?",
        opciones: ["Ángulo agudo", "Ángulo recto", "Ángulo obtuso", "Ángulo llano"],
        respuestaCorrecta: "Ángulo recto",
        explicacion: "Un ángulo recto es un ángulo que mide exactamente 90 grados."
    },
    {
        enunciado: "En un triángulo rectángulo, el cuadrado de la altura relativa a la hipotenusa es igual al producto de los segmentos que divide la hipotenusa. Si la hipotenusa mide 10 cm y un segmento mide 6 cm, ¿cuánto mide la altura?",
        opciones: ["8 cm", "6 cm", "7 cm", "5 cm"],
        respuestaCorrecta: "8 cm",
        explicacion: "Según el teorema de Euclides, la altura se calcula como √(6 * 4) = 8 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, el cuadrado de la altura relativa a la hipotenusa es igual al producto de los segmentos que divide la hipotenusa. Si la hipotenusa mide 12 cm y un segmento mide 5 cm, ¿cuánto mide la altura?",
        opciones: ["√35 cm", "√30 cm", "√25 cm", "√20 cm"],
        respuestaCorrecta: "√30 cm",
        explicacion: "Según el teorema de Euclides, la altura se calcula como √(5 * 7) = √30 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, el cuadrado de la altura relativa a la hipotenusa es igual al producto de los segmentos que divide la hipotenusa. Si la hipotenusa mide 15 cm y un segmento mide 9 cm, ¿cuánto mide la altura?",
        opciones: ["6 cm", "7 cm", "8 cm", "9 cm"],
        respuestaCorrecta: "6 cm",
        explicacion: "Según el teorema de Euclides, la altura se calcula como √(9 * 6) = 6 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, el cuadrado de la altura relativa a la hipotenusa es igual al producto de los segmentos que divide la hipotenusa. Si la hipotenusa mide 20 cm y un segmento mide 12 cm, ¿cuánto mide la altura?",
        opciones: ["8 cm", "10 cm", "9 cm", "12 cm"],
        respuestaCorrecta: "8 cm",
        explicacion: "Según el teorema de Euclides, la altura se calcula como √(12 * 8) = 8 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, el cuadrado de la altura relativa a la hipotenusa es igual al producto de los segmentos que divide la hipotenusa. Si la hipotenusa mide 25 cm y un segmento mide 15 cm, ¿cuánto mide la altura?",
        opciones: ["10 cm", "12 cm", "9 cm", "11 cm"],
        respuestaCorrecta: "10 cm",
        explicacion: "Según el teorema de Euclides, la altura se calcula como √(15 * 10) = 10 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, el cuadrado de la altura relativa a la hipotenusa es igual al producto de los segmentos que divide la hipotenusa. Si la hipotenusa mide 30 cm y un segmento mide 18 cm, ¿cuánto mide la altura?",
        opciones: ["12 cm", "14 cm", "15 cm", "13 cm"],
        respuestaCorrecta: "12 cm",
        explicacion: "Según el teorema de Euclides, la altura se calcula como √(18 * 12) = 12 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, la altura relativa a la hipotenusa divide la hipotenusa en segmentos de 9 cm y 16 cm. ¿Cuánto mide la altura?",
        opciones: ["12 cm", "13 cm", "15 cm", "14 cm"],
        respuestaCorrecta: "12 cm",
        explicacion: "Según el teorema de la altura, la altura se calcula como √(9 * 16) = 12 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, la altura relativa a la hipotenusa divide la hipotenusa en segmentos de 8 cm y 18 cm. ¿Cuánto mide la altura?",
        opciones: ["√144 cm", "√150 cm", "√136 cm", "√154 cm"],
        respuestaCorrecta: "√144 cm",
        explicacion: "Según el teorema de la altura, la altura se calcula como √(8 * 18) = √144 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, la altura relativa a la hipotenusa divide la hipotenusa en segmentos de 7 cm y 14 cm. ¿Cuánto mide la altura?",
        opciones: ["7 cm", "8 cm", "9 cm", "10 cm"],
        respuestaCorrecta: "7 cm",
        explicacion: "Según el teorema de la altura, la altura se calcula como √(7 * 14) = 7 cm."
    },
    {
        enunciado: "En un triángulo rectángulo, la altura relativa a la hipotenusa divide la hipotenusa en segmentos de 10 cm y 15 cm. ¿Cuánto mide la altura?",
        opciones: ["√150 cm", "√140 cm", "√160 cm", "√170 cm"],
        respuestaCorrecta: "√150 cm",
        explicacion: "Según el teorema de la altura, la altura se calcula como √(10 * 15) = √150 cm."
    },
    {
        enunciado: "En un triángulo, un ángulo exterior mide 150 grados y uno de los ángulos interiores opuestos mide 70 grados. ¿Cuánto mide el otro ángulo interior opuesto?",
        opciones: ["80 grados", "75 grados", "70 grados", "65 grados"],
        respuestaCorrecta: "80 grados",
        explicacion: "Según el teorema del ángulo exterior, el ángulo exterior es igual a la suma de los dos ángulos interiores opuestos."
    },
    {
        enunciado: "En un triángulo, un ángulo exterior mide 160 grados y uno de los ángulos interiores opuestos mide 50 grados. ¿Cuánto mide el otro ángulo interior opuesto?",
        opciones: ["110 grados", "100 grados", "90 grados", "80 grados"],
        respuestaCorrecta: "110 grados",
        explicacion: "Según el teorema del ángulo exterior, el ángulo exterior es igual a la suma de los dos ángulos interiores opuestos."
    },
    {
        enunciado: "En un triángulo, un ángulo exterior mide 170 grados y uno de los ángulos interiores opuestos mide 60 grados. ¿Cuánto mide el otro ángulo interior opuesto?",
        opciones: ["110 grados", "100 grados", "90 grados", "80 grados"],
        respuestaCorrecta: "110 grados",
        explicacion: "Según el teorema del ángulo exterior, el ángulo exterior es igual a la suma de los dos ángulos interiores opuestos."
    },
    {
        enunciado: "En un triángulo, un ángulo exterior mide 180 grados y uno de los ángulos interiores opuestos mide 70 grados. ¿Cuánto mide el otro ángulo interior opuesto?",
        opciones: ["110 grados", "100 grados", "90 grados", "80 grados"],
        respuestaCorrecta: "110 grados",
        explicacion: "Según el teorema del ángulo exterior, el ángulo exterior es igual a la suma de los dos ángulos interiores opuestos."
    },
    {
        enunciado: "En un triángulo, un ángulo exterior mide 190 grados y uno de los ángulos interiores opuestos mide 80 grados. ¿Cuánto mide el otro ángulo interior opuesto?",
        opciones: ["110 grados", "100 grados", "90 grados", "80 grados"],
        respuestaCorrecta: "110 grados",
        explicacion: "Según el teorema del ángulo exterior, el ángulo exterior es igual a la suma de los dos ángulos interiores opuestos."
    },
    
];

// Función para inicializar los teoremas matemáticos
function inicializarTeoremas() {
    const contenedor = document.getElementById('teoremas-container');

    teoremasMatematicos.forEach((teorema, index) => {
        const teoremaContenedor = document.createElement('section');
        teoremaContenedor.className = 'teorema';

        const teoremaTitulo = document.createElement('h2');
        teoremaTitulo.innerText = `Problema ${index + 1}`;
        teoremaContenedor.appendChild(teoremaTitulo);

        const enunciadoParrafo = document.createElement('p');
        enunciadoParrafo.innerText = teorema.enunciado;
        teoremaContenedor.appendChild(enunciadoParrafo);

        // Crear el grupo de opciones
        const opcionesContainer = document.createElement('div');
        opcionesContainer.className = 'opciones-container';
        teorema.opciones.forEach((opcion, opcionIndex) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `teorema-${index}`;
            input.value = opcion;
            input.id = `opcion-${index}-${opcionIndex}`;

            const label = document.createElement('label');
            label.textContent = opcion;
            label.setAttribute('for', `opcion-${index}-${opcionIndex}`);

            opcionesContainer.appendChild(input);
            opcionesContainer.appendChild(label);
        });
        teoremaContenedor.appendChild(opcionesContainer);

        const verificacionBtn = document.createElement('button');
        verificacionBtn.textContent = 'Verificar respuesta';
        verificacionBtn.addEventListener('click', () => {
            const inputs = document.querySelectorAll(`input[name="teorema-${index}"]:checked`);
            if (inputs.length > 0) {
                const respuestaSeleccionada = inputs[0].value;
                const solucionParrafo = document.createElement('p');
                const solucionCorrecta = teorema.respuestaCorrecta;

                if (respuestaSeleccionada === solucionCorrecta) {
                    solucionParrafo.textContent = '¡Respuesta correcta!';
                    solucionParrafo.style.color = 'green';
                } else {
                    solucionParrafo.textContent = `Respuesta incorrecta. La respuesta correcta es: ${solucionCorrecta}.`;
                    solucionParrafo.style.color = 'red';
                }

                const explicacionParrafo = document.createElement('p');
                explicacionParrafo.textContent = `Explicación: ${teorema.explicacion}`;
                teoremaContenedor.appendChild(solucionParrafo);
                teoremaContenedor.appendChild(explicacionParrafo);
                verificacionBtn.style.display = 'none';
            } else {
                alert('Por favor, seleccione una respuesta.');
            }
        });
        teoremaContenedor.appendChild(verificacionBtn);

        contenedor.appendChild(teoremaContenedor);
    });
}

// Función para cambiar el tema de la página
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Inicializar los teoremas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    inicializarTeoremas();

    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', toggleTheme);
});
