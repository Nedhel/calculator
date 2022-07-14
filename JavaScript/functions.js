function getText(idtext){
    return document.getElementById('screenCal').value
}
function setText(text){
    document.getElementById('screenCal').value = text
}

/*document.getElementById("btn1").onclick = setText('screenCal',1);
document.getElementById("btn2").onclick = setText('screenCal',2);
document.getElementById("btn3").onclick = setText('screenCal',3);
document.getElementById("btn4").onclick = setText('screenCal',4);
document.getElementById("btn5").onclick = setText('screenCal',5);
document.getElementById("btn6").onclick = setText('screenCal',6);
document.getElementById("btn7").onclick = setText('screenCal',7);
document.getElementById("btn8").onclick = setText('screenCal',8);
document.getElementById("btn9").onclick = setText('screenCal',9);
document.getElementById("btn0").onclick = setText('screenCal',0);*/
window.addEventListener('load',()=>{
    document.getElementById("btn1").addEventListener("click", setText(1))
    document.getElementById("btn2").addEventListener("click", setText(2))
})

