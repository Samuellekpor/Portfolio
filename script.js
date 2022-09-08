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
    imageMobile: 'images/Snapshoot-Portfolio1.svg',
    imageDesktop: 'images/Snapshoot-Portfolio-dt1.svg',
    title: 'Tonic',
    sub_title: {
      author: 'CANOPY',
      job: 'Back End Dev',
      year: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    commplete_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javaScript'],
    live_version: true,
    source: true,
  },
  {
    imageMobile: 'images/Snapshoot-Portfolio2.svg',
    imageDesktop: 'images/Snapshoot-Portfolio-dt2.svg',
    title: 'Multi-Post Stories',
    sub_title: {
      author: 'CANOPY',
      job: 'Back End Dev',
      year: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    commplete_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javaScript'],
    live_version: true,
    source: true,
  },
  {
    imageMobile: 'images/Snapshoot-Portfolio3.svg',
    imageDesktop: 'images/Snapshoot-Portfolio-dt3.svg',
    title: 'Tonic',
    sub_title: {
      author: 'CANOPY',
      job: 'Back End Dev',
      year: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    commplete_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javaScript'],
    live_version: true,
    source: true,
  },
  {
    imageMobile: 'images/Snapshoot-Portfolio4.svg',
    imageDesktop: 'images/Snapshoot-Portfolio-dt4.svg',
    title: 'Multi-Post Stories',
    sub_title: {
      author: 'CANOPY',
      job: 'Back End Dev',
      year: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    commplete_desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'javaScript'],
    live_version: true,
    source: true,
  },
];

const bigContainer = document.getElementById('big-container');

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function createDom() {
  const workSection = document.createElement('div');

  workSection.className = 'work-section';
  workSection.id = 'portfolio';

  Object.keys(data).forEach((key) => {
    const section = document.createElement('section');
    section.className = 'tonic-section t-section';

    const img = document.createElement('img');
    img.className = 'tonic-section-image mobile';
    img.src = data[key].imageMobile;

    const imgD = document.createElement('img');
    imgD.className = 'tonic-section-image desktop';
    imgD.src = data[key].imageDesktop;

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

    const { technologies } = data[key];

    Object.keys(technologies).forEach((key) => {
      const t = document.createElement('li');
      t.textContent = technologies[key];
      tech.appendChild(t);
    });

    const butt = document.createElement('button');
    butt.className = 'button';
    butt.type = 'button';
    butt.innerHTML = 'See Project';

    workSection.appendChild(section);
    section.appendChild(img);
    section.appendChild(imgD);
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

    insertAfter(bigContainer, workSection);

    butt.addEventListener('click', () => {
      const modal = document.querySelector('.modal-container');
      const name = document.querySelector('.section-title');
      const mImage = document.getElementById('tonic-section-imageM');
      const mImageD = document.getElementById('tonic-section-imageD');
      const company = document.getElementById('company');
      const jobb = document.getElementById('job');
      const year = document.getElementById('year');
      const descript = document.getElementById('section-description');
      const techno = document.getElementById('techno');

      while (techno.lastElementChild) {
        techno.removeChild(techno.lastElementChild);
      }
      name.textContent = data[key].title;
      company.textContent = data[key].sub_title.author;
      jobb.textContent = data[key].sub_title.job;
      year.textContent = data[key].sub_title.year;
      descript.innerHTML = data[key].commplete_desc;

      Object.keys(technologies).forEach((key) => {
        const t = document.createElement('li');
        t.textContent = technologies[key];
        techno.appendChild(t);
      });

      const menu = document.querySelector('.header');

      menu.style.display = 'none';
      mImage.src = data[key].imageMobile;
      mImageD.src = data[key].imageDesktop;
      modal.classList.add('show');
    });

    const menu = document.querySelector('.header');
    const close = document.querySelector('.close');
    const modal = document.querySelector('.modal-container');

    document.querySelector('.modal-container');
    close.style.cursor = 'pointer';

    close.addEventListener('click', () => {
      modal.classList.remove('show');
      menu.style.display = 'inline';
    });
  });
}

window.addEventListener('load', () => {
  createDom();
});
