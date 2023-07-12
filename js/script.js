const menu = document.querySelector('.nav__menu')
const bars = document.querySelector('.nav__bars')
const allNavItems = document.querySelectorAll('.nav__menu-items')

const handleNav = () => {
	menu.classList.toggle('nav__menu--active')

	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			menu.classList.remove('nav__menu--active')
			bars.classList.remove('nav__bars-show')
		})
	)
	handleBars()
}

const handleBars = () => {
	bars.classList.toggle('nav__bars-show')
}

bars.addEventListener('click', handleNav)