// menu burger

const menuIcon = document.querySelector(".menu__icon");
if (menuIcon) {
	const menu = document.querySelector(".header-nav");
	menuIcon.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock");
		menuIcon.classList.toggle("_active");
		menu.classList.toggle("_active");
	});
}
