
//Recherche dynamique dans les forums
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("input[name='q']");
    const posts = document.querySelectorAll("li");

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();
        posts.forEach(post => {
            const text = post.textContent.toLowerCase();
            post.style.display = text.includes(searchText) ? "" : "none";
        });
    });
});

//Validation du formulaire avant soumission
document.addEventListener("DOMContentLoaded", function() {
    const submitForm = document.querySelector("form[action='/submit-post']");
    submitForm.addEventListener("submit", function(event) {
        const username = document.getElementById("username").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (!username || !message) {
            alert("Please fill out all required fields.");
            event.preventDefault(); // Stop the form from submitting
        }
    });
});

//Réponses en ligne
document.addEventListener("DOMContentLoaded", function() {
    const replyLinks = document.querySelectorAll("a[href='#replyForm']");

    replyLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const replyForm = document.getElementById("replyForm");
            link.parentElement.appendChild(replyForm);
            replyForm.style.display = "block";
        });
    });
});


//Sauvegarde automatique des entrées du formulaire
document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("message");

    // Load saved text
    messageInput.value = localStorage.getItem("savedMessage") || "";

    // Save text on change
    messageInput.addEventListener("input", function() {
        localStorage.setItem("savedMessage", messageInput.value);
    });
});

const quizQuestions = [
    {
        question: "Quelle est la fonction principale de la RAM dans un PC?",
        options: ["Stockage permanent", "Traitement des graphiques", "Mémoire temporaire", "Alimentation"],
        answer: "Mémoire temporaire"
    },
    // Ajoutez d'autres questions ici
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionObj = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = questionObj.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    questionObj.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = function() { checkAnswer(option); };
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Wrong! Correct answer was: ' + correctAnswer);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        alert('Quiz completed!');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displayQuestion();
});

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

//apparition des sections
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.5 // 50% de l'élément doit être visible
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

//barre de progression
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + "%";
});
