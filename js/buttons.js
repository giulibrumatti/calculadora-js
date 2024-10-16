const container1 = document.getElementById('buttons-container1');
const container2 = document.getElementById('buttons-container2');
const container3 = document.getElementById('buttons-container3');

for(let i = 9 ; i >= 7 ; i--){
    const button = document.createElement('button');
    button.textContent = i;
    button.id = `button-${i}`
    container1.appendChild(button);
}