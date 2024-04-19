let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let img = document.getElementById('img')
let body = document.getElementById('body')
btn1.addEventListener('click',onBulb)
btn2.addEventListener('click',offBulb)

function offBulb(e){
    img.src = "offBulb.jpg"
    body.style.backgroundColor = "#000000"
}  

function onBulb(e){
    img.src = "onBulb.png"
    body.style.backgroundColor = "#D1D047"
}  