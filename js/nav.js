const bar = document.getElementById('bar');
const navLinks = document.querySelector('.nav-links')
const close = document.getElementById('close')

if (bar) {
    bar.addEventListener('click', () => {
        navLinks.classList.toggle('active')
    })
}
if (close) {
    close.addEventListener('click', ()=>{
        navLinks.classList.toggle('active')
    })
}