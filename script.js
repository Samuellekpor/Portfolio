let toggleBtn = document.querySelector('.toggle-btn');
let navBarList = document.querySelector('.nav-bar-list');
let navBar = document.querySelector('.nav-bar');

toggleBtn.addEventListener('click', function(event){
  event.preventDefault();
  toggleBtn.classList.toggle('active');
  navBarList.classList.toggle('active');
  navBar.classList.toggle('active');
});

document.querySelectorAll(".nav-bar-list>li>a").forEach(n => n.addEventListener("click",function(){
  toggleBtn.classList.remove("active");
  navBarList.classList.remove("active");
  navBar.classList.remove('active');
}))
