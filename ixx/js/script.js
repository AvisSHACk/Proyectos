let btnMenu = document.querySelector('.btn-menu');
let body = document.querySelector('body');
let menu = document.querySelector('.main-nav');


btnMenu.addEventListener('click', () => {
	menu.classList.toggle('active');
	body.classList.toggle('active');
})