document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.header-text i');
    const letters = textElement.innerText.split('');
    textElement.innerHTML = letters.map((letter, index) => {
        if (letter === ' ') {
            return `<span style="animation-delay:${index * 0.1}s">&nbsp;</span>`;
        }
        return `<span style="animation-delay:${index * 0.1}s">${letter}</span>`;
    }).join('');
});