
function createAbout(){
    const container= document.createElement('div');
    container.setAttribute('class','about-container');

    const phoneNumber= document.createElement('p');
    phoneNumber.textContent="Call us: +1 111 222 1111";

    const address= document.createElement('p');
    address.textContent="Address: XYZ co-op, London, ON, N5Y 9Z7  "

    const email=document.createElement('p');
    email.textContent='Email: CumLovers@ThisIsAJoke.com';

    container.appendChild(phoneNumber);
    container.appendChild(email);
    container.appendChild(address);

    return container;
}

export default function loadAbout(){
    const main=document.getElementById('content');
    main.textContent='';
    main.appendChild(createAbout());
    return
}