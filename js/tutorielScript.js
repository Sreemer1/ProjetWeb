document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('h2').forEach(header => {
    header.addEventListener('click', function() {
        const section = this.nextElementSibling; 
        if (section.style.maxHeight) {
            section.style.maxHeight = null;
            section.style.overflow = 'hidden';
        } else {
            section.style.maxHeight = section.scrollHeight + "px";
            section.style.overflow = 'visible';
        }
    });
});

const githubLink = document.querySelector('a[href^="https://github.com"]');
githubLink.addEventListener('click', function (e) {
    e.preventDefault();
    navigator.clipboard.writeText(this.getAttribute('href')).then(() => {
        alert('GitHub link copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy text: ', err);
    });
});

