
function createElement(el, text, className){
    const elem= document.createElement(el);
    elem.textContent=text;
    elem.setAttribute('class',className);
    return elem;
}

function createHome(){
    const home= document.createElement('div');
    const Title= createElement('h2', 'Made for lovers, by lovers', 'sub-title');
    const fillerOne= createElement('p', `Indulge in the art of romance and relish an experience crafted for those who cherish life’s most exquisite moments. We invite lovers, dreamers, and kindred souls to join us on a journey where every detail has been thoughtfully curated to celebrate the beauty of love.`, 'filler-text');
    const fillerTwo= createElement('p' ,`Bring your beloved, immerse yourselves in the ambiance, and let the evening unfold with a sense of elegance, warmth, and timeless allure. Because for us, romance isn’t just a feeling—it’s an experience to be savored, together.`, 'filler-text');


    home.appendChild(Title);
    home.appendChild(fillerOne);
    home.appendChild(fillerTwo);

    return home;
}

export default function loadHome(){
    const main=document.getElementById('content');
    main.textContent='';
    main.appendChild(createHome());
    return;
}