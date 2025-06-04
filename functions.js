
// This script handles the fading out of a scroll symbol as the user scrolls down the page.
function handleScrollSymbolFade() {
    const scrollSymbol = document.querySelector('.scroll-symbol');
    const divider = document.querySelector('.bottom-divider');
    if (!scrollSymbol || !divider) return;

    const dividerRect = divider.getBoundingClientRect();
    // If the divider is at or above the top of the viewport, fade out
    if (dividerRect.top <= 0) {
        scrollSymbol.classList.add('fade-out');
    } else {
        scrollSymbol.classList.remove('fade-out');
    }
}

window.addEventListener('scroll', handleScrollSymbolFade);
window.addEventListener('DOMContentLoaded', handleScrollSymbolFade);