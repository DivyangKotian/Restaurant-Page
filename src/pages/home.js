
import { toggleActiveNav } from "./website";
import loadMenu from "./menu";

function createElementFunction(el, text, className){
    const elem= document.createElement(el);
    elem.textContent=text;
    elem.setAttribute('class',className);
    return elem;
}

function createButton(name){
    const containerMenuBtn= document.createElement('div');
    containerMenuBtn.setAttribute('class','container-menu-btn');
    const btnMenu= document.createElement('button');
    btnMenu.setAttribute('class','discover-menu');
    const spanCircle=document.createElement('span');
    spanCircle.setAttribute('class','circle');
    spanCircle.setAttribute('aria-hidden',true);
    const spanArrow=document.createElement('span');
    spanArrow.setAttribute('class','arrow');
    spanArrow.classList.add('icon');
    const btnText= document.createElement('span');
    btnText.setAttribute('class','button-text');
    btnText.textContent=name; 

    spanCircle.appendChild(spanArrow);
    btnMenu.appendChild(spanCircle);
    btnMenu.appendChild(btnText);
    containerMenuBtn.appendChild(btnMenu);

    containerMenuBtn.addEventListener('click',()=>{
        const menu=document.getElementById('Menu');
        if(menu.classList.contains("active")) return;
        toggleActiveNav(menu);
        loadMenu();
    });
    return containerMenuBtn;

}

function createHome(){
    const home= document.createElement('div');
    home.setAttribute('class','title-container');
    const Title= createElementFunction('h2', 'Made For Lovers, By Lovers', 'sub-title');
    Title.classList.add('tangerine-bold');
    const fillerOne= createElementFunction('p', `Indulge in the art of romance and relish an experience crafted for those who cherish life’s most exquisite moments. We invite lovers, dreamers, and kindred souls to join us on a journey where every detail has been thoughtfully curated to celebrate the beauty of love.Bring your beloved, immerse yourselves in the ambiance, and let the evening unfold with a sense of elegance, warmth, and timeless allure. Because for us, romance isn’t just a feeling, it’s an experience to be savored, together.`, 'filler-text');
    fillerOne.classList.add('tangerine-bold');
    const menuDiscoverBtn= createButton('Discover Menu');

    home.appendChild(Title);
    home.appendChild(fillerOne);
    home.appendChild(menuDiscoverBtn);

    return home;
}

export default function loadHome(){
    const main=document.getElementById('content');
    main.textContent='';
    main.appendChild(createHome());
    return;
}