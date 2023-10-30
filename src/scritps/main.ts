const checkbox = document.querySelector('#check');


checkbox?.addEventListener('click', () => {
    document.documentElement.classList.toggle('light')
    
});


window.addEventListener('DOMContentLoaded', () => {
    (checkbox as HTMLInputElement).checked = false;
})