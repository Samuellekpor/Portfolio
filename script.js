const toggleBtn = document.querySelector('.toggle-btn');
const navBarList = document.querySelector('.nav-bar-list');
const navBar = document.querySelector('.nav-bar');

toggleBtn.addEventListener('click', (event) => {
  event.preventDefault();
  toggleBtn.classList.toggle('active');
  navBarList.classList.toggle('active');
  navBar.classList.toggle('active');
});

document.querySelectorAll('.nav-bar-list>li>a').forEach((n) => n.addEventListener('click', () => {
  toggleBtn.classList.remove('active');
  navBarList.classList.remove('active');
  navBar.classList.remove('active');
}));
