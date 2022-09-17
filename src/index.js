
import menu from './menu.json'
import repo from './menu.hbs'





const switchTheme = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const ulMenuEl = document.querySelector('.menu')

switchTheme.addEventListener('change', changeTheme);

function changeTheme(event) {
	const checkedBtn = event.target.checked;

	if (!checkedBtn) {
		
		bodyEl.classList.remove('dark-theme')
		bodyEl.classList.add('light-theme')
	}
	else {
		bodyEl.classList.add('dark-theme')
		bodyEl.classList.remove('light-theme')
	}
	const classL = bodyEl.className;   
	localStorage.setItem('class', classL)
}	
console.log(localStorage.getItem('class'))

function natal() {
 const value = localStorage.getItem('class')
if (value === 'dark-theme'){
	switchTheme.checked = true
	bodyEl.classList.add('dark-theme')
	bodyEl.classList.remove('light-theme')
}
else {
	switchTheme.checked = true
	bodyEl.classList.remove('dark-theme')
	bodyEl.classList.add('light-theme')
}
}

natal()
ulMenuEl.insertAdjacentHTML('afterbegin', repo(menu))
console.log();


