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

const data = [
  {
    image: 'images/Snapshoot-Portfolio1.svg',
    title: 'Tonic',
    sub_title: {
      author: 'CANOPY',
      job: 'Back End Dev',
      year: '2015'
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    commplete_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html','css','javaScript'],
    live_version: true,
    source: true
  },
  {
    image: 'images/Snapshoot-Portfolio2.svg',
    title: 'MMulti-Post Stories',
    sub_title: {
      author: 'CANOPY',
      job: 'Back End Dev',
      year: '2015'
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    commplete_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html','css','javaScript'],
    live_version: true,
    source: true
  },
  {
    image: 'images/Snapshoot-Portfolio3.svg',
    title: 'Tonic',
    sub_title: {
      author: 'CANOPY',
      job: 'Back End Dev',
      year: '2015'
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    commplete_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html','css','javaScript'],
    live_version: true,
    source: true
  },
  {
    image: 'images/Snapshoot-Portfolio4.svg',
    title: 'Multi-Post Stories',
    sub_title: {
      author: 'CANOPY',
      job: 'Back End Dev',
      year: '2015'
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    commplete_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html','css','javaScript'],
    live_version: true,
    source: true
  },
]