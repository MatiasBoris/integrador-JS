// Mostrar Menu hamburguesa
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Alternar la clase 'active' para mostrar/ocultar
}

const services = [
    {
        title: "Boosting Guerrero → Épico",
        description: "Este servicio está diseñado para jugadores que están en el rango Guerrero y desean alcanzar Épico. Es perfecto para aquellos que desean saltar de un nivel intermedio a uno más alto, sin tener que invertir mucho tiempo en el juego.",
        features: [
            "Estimado de: 1-3 días.",
        ],
        price: "$10 USD",
        category: "Boost"
    },
    {
        title: "Boosting Épico → Leyenda",
        description: "Este servicio está dirigido a jugadores en Épico que buscan alcanzar el rango Leyenda, lo cual representa un salto significativo en habilidad y competencia. Ideal para jugadores que están listos para enfrentar un nivel de competencia más alto.",
        features: [
            "Estimado de: 2-4 días.",
        ],
        price: "$20 USD",
        category: "Boost"
    },
    {
        title: "Boosting Leyenda → Mitico",
        description: "Este servicio es para los jugadores que han alcanzado el rango Leyenda y desean llegar a Mitico. Subir a Mitico requiere habilidades avanzadas, y nuestros boosters expertos te ayudarán a llegar allí de forma eficiente.",
        features: [
            "Estimado de: 4-7 días.",
        ],
        price: "$30 USD",
        category: "Boost"
    },
    {
        title: "Boosting Mitico → Mitico Honorario",
        description: "Para los jugadores que han alcanzado Mitico y buscan superar el límite para llegar a Mitico Honorario. Este es un rango muy alto y exclusivo que muestra el nivel más alto de habilidad en Mobile Legends.",
        features: [
            "Estimado de: 5-10 días.",
        ],
        price: "$50 USD",
        category: "Boost"
    },
    {
        title: "Boosting Mitico Honorario → Mitico Inmortal",
        description: "Este servicio está diseñado para aquellos jugadores que han alcanzado Mitico Honorario y desean llegar al nivel aún más exclusivo de Mitico Inmortal. Un nivel de prestigio que solo unos pocos logran alcanzar.",
        features: [
            "Estimado de: 7-14 días.",
        ],
        price: "$100 USD",
        category: "Boost"
    },
    {
        title: "Boosting Mitico Inmortal → Mitico Inmortal +200",
        description: "Este servicio está dirigido a los jugadores que ya han alcanzado Mitico Inmortal y desean mejorar su clasificación con +200 Estrellas. Esta es una opción premium para quienes buscan la distinción máxima en el juego y desean mantenerse en la cima del rendimiento.",
        features: [
            "Estimado de: 10-15 días.",
        ],
        price: "$200 USD", // Asegúrate de establecer un precio adecuado
        category: "Boost"
    },    
    {
        title: "Winrate Express",
        description: "¿Quieres que tu cuenta luzca imponente? Nuestro booster jugará 10 partidas con un mínimo garantizado de 70% de winrate. Ideal para mejorar tu historial reciente o impresionar en tu perfil.",
        features: [
            "Estimado de: 8-12 horas",
        ],
        price: "$20 USD", // Asegúrate de establecer un precio adecuado
        category: "Cuenta"
    },
    {
        title: "Winrate + Coaching Duo Boost",
        description: "Juega junto a un booster profesional que te ayudará a ganar partidas mientras te guía en tiempo real. Aumenta tu winrate jugando y aprendiendo al mismo tiempo. Paquete incluye 5 partidas.",
        features: [
            "Flexible, depende de disponibilidad del cliente",
        ],
        price: "$35 USD", // Asegúrate de establecer un precio adecuado
        category: "Cuenta"
    },
    {
        title: "Maestría Rápida",
        description: "¿Quieres mostrar tu experiencia con un héroe específico? Subimos tu maestría con el personaje elegido, jugando partidas efectivas hasta alcanzar el objetivo. Ideal para desbloquear marcos, bordes o logros visuales.",
        features: [
            "Estimado de: 2 dias",
        ],
        price: "$12 USD", // Asegúrate de establecer un precio adecuado
        category: "Heroe"
    },
    {
        title: "Clasificación con héroe (MMR)",
        description: "Subimos tu héroe hasta el top de tu pais, para que te posiciones entre los mejores con ese personaje.",
        features: [
            "Estimado de: 8-10 dias (Depende momento de la temporada en que se encuentre)",
        ],
        price: "$65 USD", // Asegúrate de establecer un precio adecuado
        category: "Heroe"
    },
    {
        title: "Winrate de Héroe",
        description: "Winrate alto y un buen KDA para tu héroe seleccionado con un booster experto en ese héroe (10 partidas).",
        features: [
            "Estimado de: 12-15 horas",
        ],
        price: "$18 USD", // Asegúrate de establecer un precio adecuado
        category: "Heroe"
    },

];

// Función para renderizar los servicios (que se muestren en la pagina sin html)
function renderServices() {
    const container = document.getElementById('services-container');

    services.forEach((service) => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('product-item');

        serviceDiv.innerHTML = `
            <h3>${service.title}</h3>
            <p><strong>Descripción del servicio:</strong> ${service.description}</p>
            <p><strong>Tiempo de entrega:</strong></p>
            <ul>
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <p><strong>Precio:</strong> ${service.price}</p>
        `;

        // Crear el botón "Agregar al carrito" dinámicamente
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart');
        addToCartButton.textContent = 'Agregar al carrito';
        
        // Agregar evento al botón
        addToCartButton.addEventListener('click', () => {
            addToCart(service); // Agregar el servicio correspondiente al carrito
        });

        serviceDiv.appendChild(addToCartButton); // Agregar el botón al div del servicio
        container.appendChild(serviceDiv); // Agregar el div del servicio al contenedor
    });
}









// Función para renderizar los servicios
function renderServices(servicesToRender) {
    const servicesList = document.getElementById('services-list');
    servicesList.innerHTML = ''; // Limpiar el contenedor de servicios

    servicesToRender.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('product-item');

        serviceDiv.innerHTML = `
            <h3>${service.title}</h3>
            <p><strong>Descripción del servicio:</strong> ${service.description}</p>
            <p><strong>Tiempo de entrega:</strong></p>
            <ul>
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <p><strong>Precio:</strong> ${service.price}</p>
        `;

        // Crear el botón "Agregar al carrito" dinámicamente
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart');
        addToCartButton.textContent = 'Agregar al carrito';
        
        // Agregar evento al botón
        addToCartButton.addEventListener('click', () => {
            addToCart(service); // Agregar el servicio correspondiente al carrito
        });

        serviceDiv.appendChild(addToCartButton); // Agregar el botón al div del servicio
        servicesList.appendChild(serviceDiv); // Agregar el div del servicio al contenedor
    });
}

// Función para filtrar servicios por categoría
function filterServices() {
    const selectedCategory = document.getElementById('category-filter').value;
    const filteredServices = services.filter(service => {
        return selectedCategory === 'all' || service.category === selectedCategory;
    });

    renderServices(filteredServices); // Renderizar solo los servicios filtrados
}

// Event listener para el filtro
document.getElementById('category-filter').addEventListener('change', filterServices);

// Llamar a renderServices inicialmente para mostrar todos los servicios
document.addEventListener('DOMContentLoaded', () => {
    renderServices(services); // Renderizar todos los servicios al cargar la página
});









// Variables globales
let cart = [];

// Función para agregar un servicio al carrito
function addToCart(service) {
    cart.push(service);
    updateCartDisplay();
    saveCartToLocalStorage(); // Llama a la función para guardar en localStorage
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Guarda el carrito como un string JSON
}
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromLocalStorage(); // Carga el carrito al iniciar
    renderServices();
    updateCartDisplay(); // Mostrar el carrito al cargar
});

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart); // Convierte el string JSON de vuelta a un objeto
    }
}
// Función para mostrar el contenido del carrito
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Limpiar el contenedor

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item'); // Asegúrate de que tenga una clase para estilos
    
        itemDiv.innerHTML = `
            <div class="cart-item-content">
                <h4>${item.title}</h4>
                <p>Precio: ${item.price}</p>
            </div>
            <button class="remove-from-cart" onclick="removeFromCart(${index})">
                &#10006; <!-- Símbolo de cruz -->
            </button>
        `;
        cartContainer.appendChild(itemDiv);
    });

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('total-price'); // Agregar la clase para el estilo
    totalDiv.innerHTML = `<h4>Total: $${total.toFixed(2)}</h4>`;
    cartContainer.appendChild(totalDiv);

    // Agregar el botón "Comprar"
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Comprar';
    buyButton.classList.add('buy-button'); // Puedes agregar estilos personalizados si lo deseas
    buyButton.addEventListener('click', () => {
        // Lógica para realizar la compra
        alert('Compra realizada con éxito!'); // Ejemplo de acción al hacer clic
    });
    cartContainer.appendChild(buyButton);

    buyButton.addEventListener('click', () => {
        cart = []; // Limpia el carrito
        saveCartToLocalStorage(); // Actualiza localStorage
        updateCartDisplay(); // Actualiza la visualización del carrito
    });
}

// Función para eliminar un servicio del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    saveCartToLocalStorage(); // Actualiza localStorage después de eliminar
}


// Función para mostrar/ocultar el carrito
function toggleCart() {
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
        cartContainer.style.display = 'block'; // Mostrar el carrito
    } else {
        cartContainer.style.display = 'none'; // Ocultar el carrito
    }
}




// Función para validar el formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // Limpiar mensajes anteriores
    formMessage.textContent = '';

    // Validación simple
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Por favor, completa todos los campos.';
        return;
    }

    // Validar formato del email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = 'Por favor, ingresa un email válido.';
        return;
    }

    // Si pasa todas las validaciones
    formMessage.style.color = '#FF9155';
    formMessage.textContent = '¡Mensaje enviado con éxito!';

    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando fetch o AJAX
});


// Nuevo código agregado para cerrar el menú hamburguesa al hacer clic en un enlace
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('nav-links');
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active'); // Cerrar menú cuando se hace clic en un enlace
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    renderServices(services); // Renderizar todos los servicios al cargar la página
});