// fisica.js

document.addEventListener('DOMContentLoaded', function () {
    const problemasDeFisica = [
        {
            enunciado: "Un automóvil viaja a una velocidad constante de 20 m/s durante 3 minutos. ¿Cuál es la distancia total recorrida?",
            solucion: "La distancia total recorrida es igual a la velocidad multiplicada por el tiempo: 20 m/s * (3 min * 60 s/min) = 3600 metros."
        },
        {
            enunciado: "Un objeto se deja caer desde la cima de un edificio de 100 metros de altura. ¿Cuánto tarda en llegar al suelo?",
            solucion: "El tiempo que tarda un objeto en caer desde cierta altura se puede calcular con la fórmula t = sqrt(2h/g), donde h es la altura y g es la aceleración debido a la gravedad (aproximadamente 9.8 m/s^2). Para un edificio de 100 metros, el tiempo sería aproximadamente 4.52 segundos."
        },
        {
            enunciado: "Un objeto se lanza horizontalmente desde una altura de 20 metros con una velocidad inicial de 15 m/s. ¿Cuál es la distancia horizontal que recorre antes de golpear el suelo?",
            solucion: "La distancia horizontal que recorre un objeto lanzado horizontalmente se puede calcular con la fórmula d = v*t, donde v es la velocidad horizontal y t es el tiempo que tarda en caer. La velocidad horizontal es constante (en este caso, 15 m/s), y el tiempo se calcula de la misma manera que en el problema anterior. Por lo tanto, la distancia horizontal sería 15 m/s * 4.52 s = 67.8 metros."
        },
        {
            enunciado: "Un avión viaja a una velocidad constante de 800 km/h durante 2 horas. ¿Cuál es la distancia total recorrida?",
            solucion: "La distancia total recorrida es igual a la velocidad multiplicada por el tiempo: 800 km/h * 2 h = 1600 km."
        },
        {
            enunciado: "Un proyectil es lanzado desde el suelo con una velocidad inicial de 50 m/s a un ángulo de 30 grados con la horizontal. ¿Cuál es su tiempo de vuelo?",
            solucion: "El tiempo de vuelo de un proyectil lanzado con una velocidad inicial v0 a un ángulo θ se puede calcular con la fórmula: t = 2 * v0 * sin(θ) / g, donde g es la aceleración debido a la gravedad. Sustituyendo los valores dados: t = 2 * 50 * sin(30°) / 9.8 ≈ 5.10 segundos."
        },
        {
            enunciado: "Una pelota es lanzada verticalmente hacia arriba con una velocidad inicial de 20 m/s desde el suelo. ¿Cuánto tarda en alcanzar su altura máxima?",
            solucion: "El tiempo que tarda una pelota lanzada verticalmente hacia arriba en alcanzar su altura máxima se puede calcular con la fórmula: t = v0 / g, donde v0 es la velocidad inicial y g es la aceleración debido a la gravedad. Sustituyendo los valores dados: t = 20 / 9.8 ≈ 2.04 segundos."
        },
        {
            enunciado: "Un bloque de 10 kg está en un plano inclinado a 30 grados. Si el coeficiente de fricción cinética entre el bloque y el plano es 0.2, ¿cuál es la fuerza de fricción?",
            solucion: "La fuerza de fricción cinética entre el bloque y el plano inclinado se puede calcular con la fórmula: F = μ * N, donde μ es el coeficiente de fricción cinética y N es la fuerza normal que actúa sobre el bloque. La fuerza normal se puede calcular como: N = m * g * cos(θ), donde m es la masa del bloque, g es la aceleración debido a la gravedad y θ es el ángulo inclinado. Sustituyendo los valores dados, la fuerza normal sería: N = 10 kg * 9.8 m/s² * cos(30°) ≈ 84.85 N. Luego, la fuerza de fricción sería: F = 0.2 * 84.85 N ≈ 16.97 N."
        },
        {
            enunciado: "Un resorte tiene una constante elástica de 200 N/m. Si se aplica una fuerza de 50 N al resorte, ¿cuál es la deformación resultante?",
            solucion: "La deformación de un resorte se puede calcular con la fórmula: Δx = F / k, donde Δx es la deformación, F es la fuerza aplicada y k es la constante elástica del resorte. Sustituyendo los valores dados: Δx = 50 N / 200 N/m = 0.25 m."
        },
        {
            enunciado: "Un péndulo simple tiene una longitud de 1 metro y se libera desde una altura de 0.5 metros. ¿Cuál es su velocidad máxima en el punto más bajo de su trayectoria?",
            solucion: "La velocidad máxima de un péndulo simple se puede calcular con la fórmula: v = √(2 * g * h), donde v es la velocidad, g es la aceleración debido a la gravedad y h es la altura desde la que se libera. Sustituyendo los valores dados: v = √(2 * 9.8 m/s² * 0.5 m) ≈ 3.13 m/s."
        },
        {
            enunciado: "Una fuerza de 200 N se aplica a un objeto de 5 kg. Si el objeto estaba inicialmente en reposo, ¿cuál es su velocidad después de 5 segundos?",
            solucion: "La velocidad final de un objeto se puede calcular con la fórmula: v = u + at, donde v es la velocidad final, u es la velocidad inicial, a es la aceleración y t es el tiempo. Si el objeto estaba inicialmente en reposo, u es 0. La aceleración se puede calcular con la segunda ley de Newton: a = F / m, donde F es la fuerza aplicada y m es la masa del objeto. Sustituyendo los valores dados: a = 200 N / 5 kg = 40 m/s². Luego, la velocidad final sería: v = 0 + 40 m/s² * 5 s = 200 m/s."
        },
        {
            enunciado: "Un bloque de 2 kg se desliza hacia abajo por un plano inclinado con un ángulo de 30 grados con la horizontal. Si el coeficiente de fricción estática entre el bloque y el plano inclinado es 0.3, ¿cuál es la fuerza mínima que se debe aplicar para evitar que el bloque se deslice?",
            solucion: "La fuerza mínima que se debe aplicar para evitar que el bloque se deslice se puede calcular comparando la componente paralela del peso del bloque con la fuerza de fricción estática máxima. La componente paralela del peso se puede calcular como: Fparalela = m * g * sin(θ), donde m es la masa del bloque, g es la aceleración debido a la gravedad y θ es el ángulo inclinado. Sustituyendo los valores dados: Fparalela = 2 kg * 9.8 m/s² * sin(30°) ≈ 9.8 N. La fuerza de fricción estática máxima se puede calcular como: Fmax = μ * N, donde μ es el coeficiente de fricción estática y N es la fuerza normal que actúa sobre el bloque. La fuerza normal se puede calcular como: N = m * g * cos(θ). Sustituyendo los valores dados: N = 2 kg * 9.8 m/s² * cos(30°) ≈ 17.08 N. Luego, la fuerza de fricción estática máxima sería: Fmax = 0.3 * 17.08 N ≈ 5.12 N. Por lo tanto, la fuerza mínima que se debe aplicar para evitar que el bloque se deslice es de al menos 9.8 N - 5.12 N ≈ 4.68 N."
        },
    ];

    const problemasContainer = document.getElementById('problemas-container');

    problemasDeFisica.forEach((problema, index) => {
        const problemaDiv = document.createElement('div');
        problemaDiv.className = 'problema';
        
        const enunciadoP = document.createElement('p');
        enunciadoP.textContent = `${index + 1}. ${problema.enunciado}`;
        problemaDiv.appendChild(enunciadoP);
        
        const solucionP = document.createElement('p');
        solucionP.className = 'solucion';
        solucionP.textContent = `Solución: ${problema.solucion}`;
        problemaDiv.appendChild(solucionP);

        problemasContainer.appendChild(problemaDiv);
    });

    const verificarButton = document.getElementById('verificar-respuestas');
    verificarButton.addEventListener('click', () => {
        const soluciones = document.querySelectorAll('.solucion');
        soluciones.forEach(solucion => {
            solucion.style.display = 'block';
        });
    });

    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    const menuReturnButton = document.getElementById('menu-return');
    menuReturnButton.addEventListener('click', () => {
        window.location.href = 'index2.html';  // Asegúrate de que este sea el nombre correcto del archivo del menú
    });
});
