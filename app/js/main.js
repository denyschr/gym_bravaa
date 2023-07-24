const btn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__container');
const body = document.querySelector('body');

btn.addEventListener('click', ()=>{
	btn.classList.toggle('menu-open');
	menu.classList.toggle('menu-open');
	body.classList.toggle('lock');
});

const swiper = new Swiper(".swiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});
