const button = document.getElementById('changeThemeButton');
const cssLink = document.getElementById('cssStyles');

let cssFile = cssLink.getAttribute('href');
let darkTheme = 'css/dark-theme.css';
let lightTheme = 'css/light-theme.css';

button.addEventListener('click', () => {
    if (cssFile === darkTheme) {
        cssFile = lightTheme;
    } else {
        cssFile = darkTheme;
    }
    cssLink.setAttribute('href', cssFile);

    localStorage.setItem('savedCssFile', cssFile);
});

document.addEventListener("DOMContentLoaded", function () {
    var savedCssFile = localStorage.getItem('savedCssFile');
    if (savedCssFile !== null) {
        cssLink.setAttribute('href', savedCssFile);
    } else {
        cssLink.setAttribute('href', cssFile);
    }
});
