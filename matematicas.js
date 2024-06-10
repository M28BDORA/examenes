let respuestas = {};
const preguntas = [
    {
        pregunta: "¿Cuál es la raíz cuadrada de 25?",
        opciones: ["5", "6", "7", "8"],
        respuestaCorrecta: "5"
    },
    {
        pregunta: "¿Cuál es la fórmula del área de un círculo?",
        opciones: ["πr²", "2πr", "r²", "πd"],
        respuestaCorrecta: "πr²"
    },
    {
        pregunta: "¿Cuál es la raíz cuadrada de 49?",
        opciones: ["5", "6", "7", "8"],
        respuestaCorrecta: "7"
    },
    {
        pregunta: "¿Cuál es la fórmula del perímetro de un círculo?",
        opciones: ["2πr", "πr²", "πd", "2r"],
        respuestaCorrecta: "2πr"
    },
    {
        pregunta: "¿Cuál es la derivada de x²?",
        opciones: ["2x", "x", "x³", "1"],
        respuestaCorrecta: "2x"
    },
    {
        pregunta: "¿Cuál es la integral de x?",
        opciones: ["x²/2", "x²", "2x", "x² + C"],
        respuestaCorrecta: "x²/2"
    },
    {
        pregunta: "¿Cuál es el logaritmo base 10 de 1000?",
        opciones: ["2", "3", "10", "100"],
        respuestaCorrecta: "3"
    },
    {
        pregunta: "¿Cuál es la fórmula para la suma de los primeros n números naturales?",
        opciones: ["n(n+1)/2", "n²", "n(n-1)", "n(n-1)/2"],
        respuestaCorrecta: "n(n+1)/2"
    },
    {
        pregunta: "¿Cuál es el valor de e (constante de Euler) aproximadamente?",
        opciones: ["2.71", "3.14", "1.61", "2.50"],
        respuestaCorrecta: "2.71"
    },
    {
        pregunta: "¿Cuál es la fórmula para el volumen de un cubo?",
        opciones: ["s³", "s²", "6s²", "3s"],
        respuestaCorrecta: "s³"
    },
    {
        pregunta: "¿Cuál es el teorema de Pitágoras?",
        opciones: ["a² + b² = c²", "a + b = c", "a² + b² = 2ab", "a² + b = c²"],
        respuestaCorrecta: "a² + b² = c²"
    },
    {
        pregunta: "¿Cuál es el valor del seno de 90 grados?",
        opciones: ["0", "1", "-1", "√2/2"],
        respuestaCorrecta: "1"
    },
    {
        pregunta: "¿Cuál es el valor del coseno de 0 grados?",
        opciones: ["0", "1", "-1", "√2/2"],
        respuestaCorrecta: "1"
    },
    {
        pregunta: "¿Cuál es la fórmula para el área de un círculo?",
        opciones: ["πr²", "2πr", "πr", "πd²"],
        respuestaCorrecta: "πr²"
    },
    {
        pregunta: "¿Cuál es el valor de ln(1)?",
        opciones: ["1", "0", "-1", "e"],
        respuestaCorrecta: "0"
    },
    {
        pregunta: "¿Cuál es la fórmula para el volumen de una esfera?",
        opciones: ["4/3πr³", "4πr²", "2πr³", "πr³"],
        respuestaCorrecta: "4/3πr³"
    },
    {
        pregunta: "¿Cuál es la suma de los ángulos internos de un triángulo?",
        opciones: ["180 grados", "360 grados", "90 grados", "270 grados"],
        respuestaCorrecta: "180 grados"
    },
    {
        pregunta: "¿Cuál es el valor del coseno de 60 grados?",
        opciones: ["1/2", "√3/2", "1", "0"],
        respuestaCorrecta: "1/2"
    },
    {
        pregunta: "¿Cuál es el valor de 2³?",
        opciones: ["6", "8", "9", "10"],
        respuestaCorrecta: "8"
    },
    {
        pregunta: "¿Cuál es la fórmula de la ecuación cuadrática?",
        opciones: ["ax² + bx + c = 0", "ax + b = 0", "ax³ + bx + c = 0", "ax² + bx = 0"],
        respuestaCorrecta: "ax² + bx + c = 0"
    },
    {
        pregunta: "¿Cuál es la derivada de sin(x)?",
        opciones: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        respuestaCorrecta: "cos(x)"
    },
    {
        pregunta: "¿Cuál es la derivada de sin(x)?",
        opciones: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        respuestaCorrecta: "cos(x)"
    },
];

function iniciarCuestionario() {
    const contenedor = document.getElementById('quiz-container');
    contenedor.innerHTML = '';

    preguntas.forEach((pregunta, index) => {
        const preguntaContenedor = document.createElement('section');
        preguntaContenedor.className = 'pregunta';

        const preguntaTitulo = document.createElement('h2');
        preguntaTitulo.innerText = `Pregunta ${index + 1}: ${pregunta.pregunta}`;
        preguntaContenedor.appendChild(preguntaTitulo);

        const opcionesLista = document.createElement('ul');
        opcionesLista.className = 'opciones';

        // Randomizamos las opciones
        pregunta.opciones.sort(() => Math.random() - 0.5);

        pregunta.opciones.forEach(opcion => {
            const opcionItem = document.createElement('li');
            const opcionBoton = document.createElement('button');
            opcionBoton.innerText = opcion;
            opcionBoton.onclick = () => seleccionarRespuesta(index, opcion, opcionBoton);
            opcionItem.appendChild(opcionBoton);
            opcionesLista.appendChild(opcionItem);
        });

        preguntaContenedor.appendChild(opcionesLista);
        contenedor.appendChild(preguntaContenedor);
    });
}

function seleccionarRespuesta(indicePregunta, respuesta, botonSeleccionado) {
    respuestas[indicePregunta] = respuesta;

    // Opacar el botón seleccionado y restaurar los demás
    const preguntaContenedor = botonSeleccionado.closest('.pregunta');
    const botones = preguntaContenedor.querySelectorAll('button');

    botones.forEach(boton => {
        boton.classList.remove('selected');
        boton.style.opacity = '1';
    });

    botonSeleccionado.classList.add('selected');
    botonSeleccionado.style.opacity = '0.6';
}

function mostrarResultado() {
    const contenedor = document.getElementById('resultado');
    let respuestasCorrectas = 0;

    preguntas.forEach((pregunta, index) => {
        if (respuestas[index] === pregunta.respuestaCorrecta) {
            respuestasCorrectas++;
        }
    });

    contenedor.innerText = `Tuviste ${respuestasCorrectas} respuestas correctas de ${preguntas.length}.`;

    // Mostrar las respuestas correctas
    preguntas.forEach((pregunta, index) => {
        const preguntaContenedor = document.querySelectorAll('.pregunta')[index];
        const botones = preguntaContenedor.querySelectorAll('button');

        botones.forEach(boton => {
            if (boton.innerText === pregunta.respuestaCorrecta) {
                boton.style.backgroundColor = 'green';
            } else if (respuestas[index] === boton.innerText) {
                boton.style.backgroundColor = 'red';
            }
        });
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function returnToMenu() {
    window.location.href = "index2.html";
}

document.getElementById('theme-toggle').onclick = toggleTheme;
document.getElementById('menu-return').onclick = returnToMenu;

window.onload = iniciarCuestionario;
