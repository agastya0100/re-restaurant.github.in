let foods = document.getElementById('food');
let food2s = document.getElementById('food2');
let foodds = document.getElementById('foodd');

foods.addEventListener('click', ()=>{
    foodds.style.backgroundImage="url(food.png.png)";
})

food2s.addEventListener('click', ()=>{
    foodds.style.backgroundImage="url(food2.png.png)";
})