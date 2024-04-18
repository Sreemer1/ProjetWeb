document.addEventListener('DOMContentLoaded', function() {
    const accessories = document.querySelectorAll('.accessory');
    const titles = document.querySelectorAll('h2'); // Sélectionner tous les titres h2

    // Animation pour les titres
    titles.forEach(title => {
        animateTitle(title);
    });

    accessories.forEach(accessory => {
        const descriptionP = accessory.querySelector('p');
        let originalText = descriptionP.textContent; // Stocker le texte original
        descriptionP.textContent = ''; // Préparer l'élément pour l'animation
        let isTextComplete = false; // Flag pour vérifier si le texte est complètement affiché
        let typingTimer; // Timer pour gérer le délai d'annulation de l'animation

        accessory.addEventListener('dblclick', function() {
            clearTimeout(typingTimer); // Annuler l'animation de typographie si elle a commencé
            applyStyledText(descriptionP, originalText); // Applique le style et affiche tout le texte immédiatement
            isTextComplete = true; // Indique que le texte est complètement affiché
        });

        accessory.addEventListener('click', function(event) {
            if (event.detail === 1) {
                if (isTextComplete) {
                    descriptionP.textContent = ''; // Supprime le texte si déjà affiché
                    isTextComplete = false; // Réinitialise le flag
                } else if (descriptionP.textContent === '') {
                    // Démarrer l'animation avec un léger délai pour permettre l'annulation
                    typingTimer = setTimeout(() => {
                        createTypingEffect(descriptionP, originalText, 50, () => isTextComplete = true);
                    }, 300); // Délai avant de démarrer l'animation
                }
            }
        });

        // Ajout de l'animation de survol
        accessory.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f0f0';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });

        accessory.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#ffffff';
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
    });
});

function createTypingEffect(element, text, speed, callback) {
    let i = 0;
    let color = getRandomColor(); // Définir une seule couleur pour tout le texte
    const interval = setInterval(function() {
        if (i < text.length) {
            const span = document.createElement('span');
            span.textContent = text.charAt(i);
            span.style.color = color; // Utiliser la couleur uniforme pour chaque caractère
            span.style.textShadow = '0 0 5px #FFF'; // Effet de surbrillance
            element.appendChild(span);
            i++;
        } else {
            clearInterval(interval);
            if (callback) callback(); // Appel du callback après l'animation
        }
    }, speed);
}

function applyStyledText(element, text) {
    element.textContent = ''; // Vidage du texte avant application du style
    let color = getRandomColor();
    element.style.color = color; // Applique la couleur à tout le paragraphe
    element.textContent = text; // Réapplique le texte avec la nouvelle couleur
}

function animateTitle(title) {
    title.style.opacity = 0;
    title.style.transition = 'opacity 2s';
    window.addEventListener('load', () => {
        title.style.opacity = 1;
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
