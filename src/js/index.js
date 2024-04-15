const hearts = document.querySelectorAll('.shop-box__heart');
const footerYear = document.querySelector('.footer-bottom__year');
const currentDate = new Date();

const heartFunction = (e) => {
	e.target.classList.toggle('heart-active');
};


hearts.forEach((heart) => {
    heart.addEventListener('click', heartFunction);
});

footerYear.textContent = currentDate.getFullYear();