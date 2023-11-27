document.addEventListener('DOMContentLoaded', function() {
    const rangeElement = document.getElementById('myRange');
    let currentSize = rangeElement.value;
    creatediv(currentSize);  
    rangeElement.addEventListener('change', function() {
      const newSize = rangeElement.value;
      const boxElement = document.querySelector('.box');
      while (boxElement.firstChild) {
        boxElement.removeChild(boxElement.firstChild);
      }
      creatediv(newSize);
    });
    document.getElementById('remove').addEventListener('click', function() {
        const divs = document.querySelectorAll('.box div');
        for (const div of divs) {
          div.style.backgroundColor = 'transparent'; // Remove background color
        }
      });
  });
function creatediv(size){
    document.querySelector('.box').style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    document.querySelector('.box').style.gridTemplateRows = `repeat(${size}, 1fr)`;
 let numdiv = size*size;
 for(let i = 0; i < numdiv;i++){
    let div = document.createElement("div");
    div.style.border = '1px solid gray';
    div.addEventListener('click', function() {
        div.style.backgroundColor = 'black';
      });
      div.addEventListener('mousedown', function() {
        div.style.backgroundColor = 'white';
      });
    document.querySelector('.box').appendChild(div);
 } 
}
