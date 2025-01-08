function imgSlider(coffeeImage) {
    const coffeeElement = document.querySelector('.coffee');

    coffeeElement.classList.add('fade-out');

    setTimeout(() => {
        coffeeElement.src = `img/${coffeeImage}`;
        coffeeElement.classList.remove('fade-out');
        coffeeElement.classList.add('fade-in');

        setTimeout(() => {
            coffeeElement.classList.remove('fade-in');
        }, 300);
    }, 300);
}

function changeCircleColor(color) {
    document.querySelector('.circle').style.background = color;
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});