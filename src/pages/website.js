
import '@fortawesome/fontawesome-free/css/all.min.css';

import loadHome from "./home";

import loadMenu from './menu';

function createHeader(){
    const headerContainer= document.createElement('div');
    headerContainer.classList.add("header-container");
    const restoName= document.createElement('h1');
    restoName.classList.add("resto-name");
    restoName.textContent="Cum Lovers";

    headerContainer.appendChild(restoName);
    
    headerContainer.appendChild(createNav());
    return headerContainer;
}

function createBtn(name){                                       
    const btn= document.createElement('li');
    btn.setAttribute('id',name);
    btn.setAttribute('data-val', name)
    btn.classList.add("button-nav");
    btn.textContent=name;
    return btn;
}

function createNav(){
    const nav= document.createElement('ul');

    const home=createBtn('Home');
    home.addEventListener('click',()=>{
        if(home.classList.contains("active")) return;
        toggleActiveNav(home);
        loadHome();
    });
    const menu=createBtn('Menu');
    menu.addEventListener('click',(e)=>{
        if(menu.classList.contains("active")) return;
        toggleActiveNav(menu);
        loadMenu();
    });
    const about=createBtn('About Us');
    about.addEventListener('click',(e)=>{
        if(about.classList.contains("active")) return;
        toggleActiveNav(about);
        loadAbout();
    });

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);

    nav.classList.add("button-container");
    return nav
}

function toggleActiveNav(button) {
    const btns = document.querySelectorAll(".button-nav");

    btns.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

function createContent(){
    const content= document.createElement('div');
    content.textContent='';
    content.setAttribute('id','content');
    content.setAttribute('class','content');
    return content;
}




function createFooter(){
    const footer= document.createElement('footer');
    footer.classList.add('footer');

    const footerText=document.createElement('p');
    footer.textContent= `Copyright © ${new Date().getFullYear()} Divyang Kotian `

    const githubLogo= document.createElement('a');
    githubLogo.setAttribute('href','"https://github.com/DivyangKotian');
    githubLogo.setAttribute('target','blank');

    const githubIcon=document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    githubLogo.appendChild(githubIcon);
    footer.appendChild(footerText);
    footer.appendChild(githubLogo);

    return footer;
}

 function initializeWebsite(){
    const contentContainer= document.getElementById('content-container');

    contentContainer.appendChild(createHeader());
    contentContainer.appendChild(createContent());
    contentContainer.appendChild(createFooter());
}

export{ initializeWebsite, toggleActiveNav}