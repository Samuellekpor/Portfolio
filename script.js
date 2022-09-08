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

const big_container = document.getElementById('big-container');

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function createDom() {

  const work_section = document.createElement('div');

  work_section.className = 'work-section';
  work_section.id = 'portfolio';

  Object.keys(data).forEach((key) => {
    const section = document.createElement('section');
    section.className = 'tonic-section';
  
    const img = document.createElement('img');
    img.className = 'tonic-section-image';
    img.src = data[key].image;
  
    const descCont = document.createElement('div');
    descCont.className = 'tonic-section-description';
  
    const titleC = document.createElement('h2');
    titleC.className = 'section-title';
    titleC.textContent = data[key].title;
  
    const subEl = document.createElement('div');
    subEl.className = 'section-subtitle';
  
    const authorName = document.createElement('h6');
    authorName.className = 'canopy';
    authorName.textContent = data[key].sub_title.author;
  
    const separator = document.createElement('img');
    separator.src = 'images/Counter.svg';

    const separator1 = document.createElement('img');
    separator1.src = 'images/Counter.svg';
  
    const jobPost = document.createElement('h6');
    jobPost.textContent = data[key].sub_title.job;
  
    const projectYear = document.createElement('h6');
    projectYear.textContent = data[key].sub_title.year;
  
    const desc = document.createElement('p');
    desc.className = 'section-description';
    desc.textContent = data[key].description;
  
    const tech = document.createElement('ul');
    tech.className = 'technologies';
  
    const {technologies} = data[key];
  
    Object.keys(technologies).forEach((key) => {
      const t = document.createElement('li');
      t.textContent = technologies[key];
      tech.appendChild(t);
    });
  
    const butt = document.createElement('button');
    butt.className = 'button';
    butt.type = 'button';
    butt.innerHTML = 'See Project';
  
    work_section.appendChild(section);
    section.appendChild(img);
    section.appendChild(descCont);
    descCont.appendChild(titleC);
    descCont.appendChild(subEl);
    subEl.appendChild(authorName);
    subEl.appendChild(separator1);
    subEl.appendChild(jobPost);
    subEl.appendChild(separator);
    subEl.appendChild(projectYear);
    descCont.appendChild(desc);
    descCont.appendChild(tech);
    descCont.appendChild(butt);
  
    insertAfter(big_container, work_section);

    butt.addEventListener('click', () => {
      const modal = document.querySelector('.modal-container');
      const name = document.querySelector('.section-title');
      const mImage = document.getElementById('tonic-section-image');
      const company = document.getElementById('company');
      const job = document.getElementById('job');
      const year = document.getElementById('year');
      const descript = document.getElementById('section-description');
      const techno = document.getElementById('techno');
      const menu = document.querySelector('.header');
  
      name.textContent = data[key].title;
      company.textContent = data[key].sub_title.author;
      job.textContent = data[key].sub_title.job;
      year.textContent = data[key].sub_title.year;
      descript.innerHTML = data[key].commplete_desc;
  
      for(let i= 0; i <data[key].technologies.length; i++) {
        const t = document.createElement('li');
        t.textContent = data[key].technologies[i];
        techno.appendChild(t);
      }
      
      menu.style.display = 'none';
      mImage.src = data[key].image;
      modal.classList.add('show');
    })
  });
}

const close = document.querySelector('.close');
const modal = document.querySelector('.modal-container');

close.addEventListener('click',() => {
  modal.style.display = 'none';
})


window.addEventListener('load', () => {
  createDom();
});


