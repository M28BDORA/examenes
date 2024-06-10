// Array de problemas avanzados de Newton
const problemasNewton = [
    {
        enunciado: "Un bloque de masa m se encuentra sobre un plano inclinado con un ángulo θ respecto a la horizontal. El coeficiente de fricción entre el bloque y el plano es μ. Determine la aceleración del bloque bajando por el plano.",
        opciones: ["g(sin(θ) - μcos(θ))", "g(cos(θ) - μsin(θ))", "μg(cos(θ) + sin(θ))", "g(sin(θ) + μcos(θ))"],
        respuestaCorrecta: "g(sin(θ) - μcos(θ))",
        explicacion: "La fuerza neta actuando en el bloque es la componente del peso paralelo al plano menos la fuerza de fricción. La aceleración es entonces g(sin(θ) - μcos(θ))."
    },
    {
        enunciado: "Un proyectil es disparado con una velocidad inicial v₀ formando un ángulo θ con la horizontal. Determine el tiempo total de vuelo del proyectil.",
        opciones: ["(2v₀sin(θ))/g", "(v₀sin(θ))/g", "(2v₀cos(θ))/g", "(v₀cos(θ))/g"],
        respuestaCorrecta: "(2v₀sin(θ))/g",
        explicacion: "El tiempo total de vuelo se obtiene al calcular el tiempo que tarda el proyectil en subir y bajar al mismo nivel. Este tiempo es (2v₀sin(θ))/g."
    },
    {
        enunciado: "Una partícula de masa m se mueve en un círculo de radio r con una velocidad angular constante ω. Determine la fuerza centrípeta actuando sobre la partícula.",
        opciones: ["mω²r", "mr²ω", "mωr²", "mrω²"],
        respuestaCorrecta: "mω²r",
        explicacion: "La fuerza centrípeta necesaria para mantener una partícula en movimiento circular es mω²r."
    },
    {
        enunciado: "Un objeto de masa m cuelga de una cuerda y gira en un círculo horizontal con radio r y velocidad angular ω. Determine la tensión en la cuerda.",
        opciones: ["m(g + ω²r)", "m(g - ω²r)", "m(g + r²ω)", "m(g - r²ω)"],
        respuestaCorrecta: "m(g + ω²r)",
        explicacion: "La tensión en la cuerda es la suma de la componente vertical del peso y la fuerza centrípeta, es decir, m(g + ω²r)."
    },
    {
        enunciado: "Una esfera de masa m se deja caer desde una altura h y rebota elásticamente en el suelo. Determine la velocidad de la esfera justo después del rebote.",
        opciones: ["sqrt(2gh)", "2sqrt(2gh)", "sqrt(gh)", "2sqrt(gh)"],
        respuestaCorrecta: "sqrt(2gh)",
        explicacion: "La velocidad justo después del rebote será igual en magnitud a la velocidad justo antes del impacto, que es sqrt(2gh)."
    },
    {
        enunciado: "Un automóvil de masa m se desplaza por una carretera horizontal y se detiene debido a la fricción después de recorrer una distancia d. Determine la fuerza de fricción actuando sobre el automóvil.",
        opciones: ["(mv²)/(2d)", "(2mv)/(d)", "(mv)/(d²)", "(mv²)/(d)"],
        respuestaCorrecta: "(mv²)/(2d)",
        explicacion: "La fuerza de fricción se puede encontrar usando la ecuación de trabajo y energía, resultando en (mv²)/(2d)."
    },
    {
        enunciado: "Un péndulo simple de longitud L y masa m se desplaza con una amplitud angular θ₀. Determine la velocidad máxima del péndulo.",
        opciones: ["sqrt(2gL(1 - cos(θ₀)))", "sqrt(gL(1 - cos(θ₀)))", "sqrt(2gL(1 + cos(θ₀)))", "sqrt(gL(1 + cos(θ₀)))"],
        respuestaCorrecta: "sqrt(2gL(1 - cos(θ₀)))",
        explicacion: "La energía potencial máxima se convierte en energía cinética máxima en el punto más bajo del péndulo, resultando en la velocidad máxima sqrt(2gL(1 - cos(θ₀)))."
    },
    {
        enunciado: "Una partícula de masa m está sometida a una fuerza F = -kx + bx³, donde k y b son constantes. Determine la posición de equilibrio de la partícula.",
        opciones: ["x = sqrt(k/b)", "x = k/b", "x = sqrt(b/k)", "x = k/(b^2)"],
        respuestaCorrecta: "x = sqrt(k/b)",
        explicacion: "La posición de equilibrio se encuentra igualando la fuerza a cero: -kx + bx³ = 0, lo que da x = sqrt(k/b)."
    },
    {
        enunciado: "Un cilindro sólido de radio R y masa M rueda sin deslizarse por un plano inclinado de ángulo θ. Determine la aceleración del cilindro.",
        opciones: ["(2/3)g sin(θ)", "(1/2)g sin(θ)", "(2/5)g sin(θ)", "(3/2)g sin(θ)"],
        respuestaCorrecta: "(2/3)g sin(θ)",
        explicacion: "Utilizando la segunda ley de Newton y las condiciones de rodadura sin deslizamiento, la aceleración es (2/3)g sin(θ)."
    },
    {
        enunciado: "Una bola de masa m cae desde una altura h y rebota inelásticamente con una velocidad que es la mitad de la velocidad de impacto. Determine la altura máxima alcanzada después del rebote.",
        opciones: ["h/2", "h/4", "h/8", "h/16"],
        respuestaCorrecta: "h/4",
        explicacion: "La energía cinética después del rebote es (1/4) de la energía antes del impacto, por lo que la altura es (1/4) de la original, es decir, h/4."
    },
    {
        enunciado: "Un objeto de masa m se encuentra en un resorte con constante de resorte k. Si el objeto es comprimido una distancia x y luego liberado, determine la velocidad del objeto cuando pasa por el punto de equilibrio.",
        opciones: ["sqrt(k/m)x", "sqrt(m/k)x", "sqrt(k/m)x²", "sqrt(m/k)x²"],
        respuestaCorrecta: "sqrt(k/m)x",
        explicacion: "La energía potencial elástica en el punto de compresión se convierte en energía cinética en el punto de equilibrio, resultando en la velocidad sqrt(k/m)x."
    },
    {
        enunciado: "Un bloque de masa m está unido a una cuerda y gira en un círculo horizontal con velocidad angular constante ω. Si la longitud de la cuerda es L, ¿cuál es la tensión en la cuerda?",
        opciones: ["mg", "mω²L", "mω²L/2", "2mω²L"],
        respuestaCorrecta: "mω²L",
        explicacion: "La fuerza centrípeta necesaria para mantener el movimiento circular es proporcionada por la tensión en la cuerda, que es mω²L."
    },
    {
        enunciado: "Un sistema de masa-resorte tiene una masa m y una constante de resorte k. Si el sistema oscila con una frecuencia f, ¿cuál sería la nueva frecuencia si se duplica la masa?",
        opciones: ["f/√2", "2f", "f/2", "√2f"],
        respuestaCorrecta: "f/2",
        explicacion: "La frecuencia de oscilación de un sistema masa-resorte está inversamente relacionada con la raíz cuadrada de la masa. Si la masa se duplica, la frecuencia se reducirá a la mitad."
    },
    {
        enunciado: "Un objeto de masa m se mueve en una trayectoria circular de radio R con velocidad constante v. ¿Cuál es la magnitud de la aceleración centrípeta del objeto?",
        opciones: ["v/R", "v²/R", "R/v", "v²R"],
        respuestaCorrecta: "v²/R",
        explicacion: "La aceleración centrípeta se define como v²/R, donde v es la velocidad y R es el radio de la trayectoria circular."
    },
    {
        enunciado: "Un proyectil es lanzado horizontalmente desde la cima de una colina con velocidad inicial v. ¿Cuál es la trayectoria seguida por el proyectil?",
        opciones: ["Una parábola", "Una línea recta", "Un círculo", "Una elipse"],
        respuestaCorrecta: "Una parábola",
        explicacion: "La trayectoria de un proyectil lanzado horizontalmente bajo la gravedad sigue una parábola debido a la aceleración constante hacia abajo."
    },
    {
        enunciado: "Un bloque de masa m se desliza hacia abajo por un plano inclinado sin fricción, partiendo desde el reposo en la parte superior del plano. ¿Cuál es su velocidad cuando llega al fondo del plano?",
        opciones: ["sqrt(2gh)", "2gh", "gh", "4gh"],
        respuestaCorrecta: "sqrt(2gh)",
        explicacion: "La velocidad final de un objeto que desciende por un plano inclinado sin fricción se calcula como sqrt(2gh), donde g es la aceleración debido a la gravedad y h es la altura vertical que ha descendido el objeto."
    },
    {
        enunciado: "Un satélite de masa m orbita la Tierra en una órbita circular a una altura h sobre la superficie de la Tierra. Si la masa de la Tierra es M y el radio de la Tierra es R, ¿cuál es la velocidad orbital del satélite?",
        opciones: ["sqrt(GM/R)", "sqrt(GM/(R+h))", "sqrt(GM/h)", "sqrt(GM/(R-h))"],
        respuestaCorrecta: "sqrt(GM/(R+h))",
        explicacion: "La velocidad orbital de un satélite en órbita circular se calcula como sqrt(GM/(R+h)), donde G es la constante gravitacional, M es la masa de la Tierra, R es el radio de la Tierra y h es la altura del satélite sobre la superficie de la Tierra."
    },
    {
        enunciado: "Un cuerpo de masa m se lanza verticalmente hacia arriba desde la superficie de la Tierra con una velocidad inicial v. ¿Cuál es su velocidad cuando alcanza la mitad de la altura máxima?",
        opciones: ["v", "sqrt(2)v", "2v", "v/2"],
        respuestaCorrecta: "v",
        explicacion: "La velocidad del cuerpo en el punto medio de su ascenso es igual a su velocidad inicial, v, ya que la velocidad cambia linealmente con la altura."
    },
    {
        enunciado: "Un bloque de masa m está en reposo en una superficie horizontal rugosa. Si se aplica una fuerza horizontal F al bloque, ¿cuál es la magnitud de la fuerza de fricción estática máxima que actúa sobre el bloque?",
        opciones: ["F", "μmg", "mg", "μN"],
        respuestaCorrecta: "μmg",
        explicacion: "La fuerza de fricción estática máxima que actúa sobre el bloque es igual al producto del coeficiente de fricción estática μ y la fuerza normal N, donde N = mg."
    },
    {
        enunciado: "Un objeto de masa m se mueve en un círculo horizontal con velocidad constante v. ¿Cuál es la magnitud de la fuerza centrípeta necesaria para mantenerlo en su trayectoria circular?",
        opciones: ["mv", "m²v/R", "m²v²/R", "mv²/R"],
        respuestaCorrecta: "mv²/R",
        explicacion: "La fuerza centrípeta necesaria para mantener un objeto en su trayectoria circular es mv²/R, donde m es la masa del objeto, v es su velocidad y R es el radio de la trayectoria."
    },
    {
        enunciado: "Un bloque de masa m se desliza hacia abajo por un plano inclinado con ángulo θ respecto a la horizontal. Si el coeficiente de fricción cinética entre el bloque y el plano es μ, ¿cuál es la aceleración del bloque?",
        opciones: ["g sin(θ)", "g cos(θ)", "g tan(θ)", "g - μg cos(θ)"],
        respuestaCorrecta: "g sin(θ) - μg cos(θ)",
        explicacion: "La aceleración del bloque está determinada por la componente paralela a la superficie del plano inclinado de la fuerza neta, que es g sin(θ) - μg cos(θ)."
    }
];

// Función para inicializar los problemas de Newton
function inicializarProblemas() {
    const contenedor = document.getElementById('problemas-container');

    problemasNewton.forEach((problema, index) => {
        const problemaContenedor = document.createElement('section');
        problemaContenedor.className = 'problema';

        const problemaTitulo = document.createElement('h2');
        problemaTitulo.innerText = `Problema ${index + 1}`;
        problemaContenedor.appendChild(problemaTitulo);

        const problemaEnunciado = document.createElement('p');
        problemaEnunciado.innerText = problema.enunciado;
        problemaContenedor.appendChild(problemaEnunciado);

        problema.opciones.forEach((opcion, i) => {
            const opcionContenedor = document.createElement('div');
            opcionContenedor.className = 'opcion';

            const opcionInput = document.createElement('input');
            opcionInput.type = 'radio';
            opcionInput.id = `problema-${index}-opcion-${i}`;
            opcionInput.name = `problema-${index}`;
            opcionInput.value = opcion;

            const opcionLabel = document.createElement('label');
            opcionLabel.htmlFor = `problema-${index}-opcion-${i}`;
            opcionLabel.innerText = opcion;

            opcionContenedor.appendChild(opcionInput);
            opcionContenedor.appendChild(opcionLabel);
            problemaContenedor.appendChild(opcionContenedor);
        });

        const verificacionBtn = document.createElement('button');
        verificacionBtn.innerText = 'Verificar respuesta';
        verificacionBtn.addEventListener('click', () => {
            const respuestaSeleccionada = document.querySelector(`input[name="problema-${index}"]:checked`);

            if (respuestaSeleccionada) {
                const solucionParrafo = document.createElement('p');
                const solucionCorrecta = problema.respuestaCorrecta;

                if (respuestaSeleccionada.value === solucionCorrecta) {
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
                verificacionBtn.style.display = 'none';
            } else {
                alert('Por favor, seleccione una respuesta.');
            }
        });
        problemaContenedor.appendChild(verificacionBtn);

        contenedor.appendChild(problemaContenedor);
    });
}

// Función para cambiar el tema de la página
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Inicializar los problemas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    inicializarProblemas();

    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', toggleTheme);
});
