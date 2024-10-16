const container1 = document.getElementById('buttons-container1');
const container2 = document.getElementById('buttons-container2');
const container3 = document.getElementById('buttons-container3');

function addButtons(desde, hasta, container){
    for(let i = desde ; i <= hasta ; i++){
        const button = document.createElement('button');
        button.textContent = i;
        button.id = `${i}`
        button.className = "operator"
        container.appendChild(button);
    }
}

addButtons(7,9,container1);
addButtons(4,6,container2);
addButtons(1,3,container3);