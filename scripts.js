$(document).ready(function(){
    // Función para alternar entre el modo oscuro y el modo claro
    function toggleDarkMode() {
        $('body').toggleClass('dark-theme'); // Alternamos la clase dark-theme en el body
    }

    // Evento click para el botón de Cambiar Tema
    $('#theme-toggle').on('click', function() {
        toggleDarkMode(); // Llamamos a la función toggleDarkMode al hacer clic en el botón
    });

    const formulas = [
        { formula: 'Ecuación de segundo grado', description: 'ax² + bx + c = 0. La solución se encuentra usando la fórmula cuadrática: x = (-b ± √(b² - 4ac)) / 2a.' },
        { formula: 'Área del círculo', description: 'A = πr², donde r es el radio del círculo.' },
        { formula: 'Perímetro del círculo', description: 'P = 2πr, donde r es el radio del círculo.' },
        { formula: 'Área del triángulo', description: 'A = (base * altura) / 2.' },
        { formula: 'Teorema de Pitágoras', description: 'En un triángulo rectángulo, a² + b² = c², donde c es la hipotenusa.' },
        { formula: 'Fórmula de la distancia', description: 'Distancia entre dos puntos (x₁, y₁) y (x₂, y₂) es d = √((x₂ - x₁)² + (y₂ - y₁)²).' },
        { formula: 'Pendiente de una recta', description: 'm = (y₂ - y₁) / (x₂ - x₁).' },
        { formula: 'Ecuación de la recta', description: 'y = mx + b, donde m es la pendiente y b es el intercepto.' },
        { formula: 'Volumen del cilindro', description: 'V = πr²h, donde r es el radio y h es la altura.' },
        { formula: 'Volumen de la esfera', description: 'V = (4/3)πr³, donde r es el radio.' },
        { formula: 'Área superficial de la esfera', description: 'A = 4πr², donde r es el radio.' },
        { formula: 'Volumen del cono', description: 'V = (1/3)πr²h, donde r es el radio y h es la altura.' },
        { formula: 'Área del rectángulo', description: 'A = base * altura.' },
        { formula: 'Perímetro del rectángulo', description: 'P = 2(base + altura).' },
        { formula: 'Área del cuadrado', description: 'A = lado².' },
        { formula: 'Perímetro del cuadrado', description: 'P = 4 * lado.' },
        { formula: 'Circunferencia de una elipse', description: 'C ≈ 2π√((a² + b²)/2), donde a y b son los semiejes mayor y menor respectivamente.' },
        { formula: 'Área de la elipse', description: 'A = πab, donde a y b son los semiejes mayor y menor respectivamente.' },
        { formula: 'Ley de senos', description: 'a/sen(A) = b/sen(B) = c/sen(C), para cualquier triángulo.' },
        { formula: 'Ley de cosenos', description: 'c² = a² + b² - 2ab * cos(C), para cualquier triángulo.' },
        { formula: 'Derivada de una función', description: 'f\'(x) = lim(h→0) (f(x+h) - f(x)) / h.' },
        { formula: 'Integral definida', description: '∫[a, b] f(x) dx, representa el área bajo la curva f(x) desde x = a hasta x = b.' },
        { formula: 'Logaritmo', description: 'logₐ(x) = y, si aʸ = x.' },
        { formula: 'Suma de una progresión aritmética', description: 'Sₙ = n/2 * (a + l), donde n es el número de términos, a es el primer término y l es el último término.' },
        { formula: 'Suma de una progresión geométrica', description: 'Sₙ = a(1-rⁿ) / (1-r), donde a es el primer término y r es la razón común.' },
        { formula: 'Factorial', description: 'n! = n * (n-1) * ... * 1.' },
        { formula: 'Combinaciones', description: 'C(n, k) = n! / (k!(n-k)!).' },
        { formula: 'Permutaciones', description: 'P(n, k) = n! / (n-k)!.' },
        { formula: 'Ecuación de la circunferencia', description: '(x - h)² + (y - k)² = r², donde (h, k) es el centro y r es el radio.' },
        { formula: 'Ecuación de la parábola', description: '(x-h)² = 4p(y-k), donde (h, k) es el vértice y p es la distancia focal.' },
        { formula: 'Media aritmética', description: 'x̄ = (Σxᵢ) / n, donde Σxᵢ es la suma de los valores y n es el número de valores.' },
        { formula: 'Varianza', description: 'σ² = (Σ(xᵢ - x̄)²) / n, donde x̄ es la media.' },
        { formula: 'Desviación estándar', description: 'σ = √σ².' },
        { formula: 'Número e', description: 'e ≈ 2.71828, la base del logaritmo natural.' },
        { formula: 'Seno', description: 'sen(θ) = opuesto / hipotenusa.' },
        { formula: 'Coseno', description: 'cos(θ) = adyacente / hipotenusa.' },
        { formula: 'Tangente', description: 'tan(θ) = opuesto / adyacente.' }
    ];


    const carousel = $('.carousel');

    formulas.forEach(f => {
        const card = `
            <div class="card">
                <h3>${f.formula}</h3>
                <p>${f.description}</p>
            </div>
        `;
        carousel.append(card);
    });

    carousel.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});
