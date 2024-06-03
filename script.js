document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.container div');
    let currentIndex = 0;

    document.querySelector('.arrow-left').addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        images[currentIndex].classList.add('active');
    });

    document.querySelector('.arrow-right').addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        images[currentIndex].classList.add('active');
    });

    document.querySelector('.contact').addEventListener('click', () => {
        window.location.href = "https://www.google.com";
    });
    document.querySelector('.container').addEventListener('click', () => {
        window.location.href = "Games.html";
    });    
});
