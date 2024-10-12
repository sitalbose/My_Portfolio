// Typed Text Effect
const phrases = ["I'm a Web Developer", "I create interactive websites", "Let's build something amazing"];
let charIndex = 0;
let phraseIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    const typedText = document.getElementById('dynamic-text');

    if (isDeleting) {
        typedText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting
