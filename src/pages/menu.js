
function createMenuItem(name, price, description){
    const menuCard= document.createElement('article');
    menuCard.setAttribute('class','card');

    const menuImg= document.createElement('img');
    menuImg.setAttribute('class','thumb');
    const imgSrc=name.replace(/\s+/g, '').toLowerCase();
    menuImg.src=`/styles/images/${imgSrc}.jpg`;
    menuImg.alt=name;

    const descriptionContainer=document.createElement('div');
    descriptionContainer.setAttribute('class','infos');

    const itemName=document.createElement('h2');
    itemName.setAttribute('class','food-title')
    itemName.textContent= name;

    const itemPrice=document.createElement('span');
    itemPrice.setAttribute('class','price')
    itemPrice.textContent=price;

    
    const itemDescription= document.createElement('p');
    itemDescription.textContent=description;
    itemDescription.setAttribute('class','txt');
    
    itemName.appendChild(itemPrice);
    descriptionContainer.appendChild(itemName);
    descriptionContainer.appendChild(itemDescription);
    menuCard.appendChild(menuImg);
    menuCard.appendChild(descriptionContainer);

    return menuCard;
}

function createMenu(){
    const menuContainer=document.createElement('div');
    menuContainer.setAttribute('class','menu-container');

    menuContainer.appendChild(createMenuItem("Hot Honey Chicken", "$40", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et turpis sollicitudin, ornare felis at, aliquet ante. Vivamus pharetra nisl lorem, ac egestas nisl porttitor et. Quisque commodo ut eros sit amet eleifend."));

    menuContainer.appendChild(createMenuItem("Jalapeno Bagels", "$20", "ed velit diam, pulvinar sed orci vitae, cursus fringilla nisl. Cras faucibus tempus euismod. Phasellus sodales velit ac ipsum volutpat iaculis. Aenean maximus tortor sit amet ex congue volutpat."));

    menuContainer.appendChild(createMenuItem("King Fish", "$70", "Quisque ut ante gravida, tincidunt velit at, lacinia mi. Vivamus mollis vel leo eu faucibus. Integer placerat velit finibus enim bibendum, aliquet commodo turpis pulvinar."));

    menuContainer.appendChild(createMenuItem("Oriental Spring Rolls", "$10", "Quisque ut ante gravida, tincidunt velit at, lacinia mi. Vivamus mollis vel leo eu faucibus. Integer placerat velit finibus enim bibendum, aliquet commodo turpis pulvinar."));

    menuContainer.appendChild(createMenuItem("Submarine Beef", "$60", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et turpis sollicitudin, ornare felis at, aliquet ante. Vivamus pharetra nisl lorem, ac egestas nisl porttitor et. Quisque commodo ut eros sit amet eleifend."));

    menuContainer.appendChild(createMenuItem("Alfan So Good", "$20", "Quisque ut ante gravida, tincidunt velit at, lacinia mi. Vivamus mollis vel leo eu faucibus. Integer placerat velit finibus enim bibendum, aliquet commodo turpis pulvinar."));

    menuContainer.appendChild(createMenuItem("Flat Lime Soda", "$69", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et turpis sollicitudin, ornare felis at, aliquet ante. Vivamus pharetra nisl lorem, ac egestas nisl porttitor et. Quisque commodo ut eros sit amet eleifend."));

    menuContainer.appendChild(createMenuItem("Meri Berry", "$20", "In vehicula mattis aliquam. Curabitur bibendum sagittis diam vel mattis. Mauris libero felis, pellentesque in egestas a, lacinia non nisl. Vestibulum ultrices mauris vel neque mattis eleifend. "));

    menuContainer.appendChild(createMenuItem("Spicy Cucumber", "$22", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et turpis sollicitudin, ornare felis at, aliquet ante. Vivamus pharetra nisl lorem, ac egestas nisl porttitor et. Quisque commodo ut eros sit amet eleifend."));

    return menuContainer;
}

export default function loadMenu(){
    const main=document.getElementById('content');
    main.textContent='';
    main.appendChild(createMenu());    
}