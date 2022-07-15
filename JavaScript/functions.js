function getText(idtext){
    return document.getElementById('screenCal').value
}
function setText(text){
    document.getElementById('screenCal').value = text
}
function erasechar(){
    
}
 
window.addEventListener('load', function() {
    console.log("entra al load")
    document.getElementById('btn0')
        .addEventListener('click', ()=>setText(0))
    document.getElementById('btn1')
        .addEventListener('click', ()=>setText(1))
    document.getElementById('btn2')
        .addEventListener('click', ()=>setText(2))
    document.getElementById('btn3')
        .addEventListener('click', ()=>setText(3))
    document.getElementById('btn4')
        .addEventListener('click', ()=>setText(4))
    document.getElementById('btn5')
        .addEventListener('click', ()=>setText(5))
    document.getElementById('btn6')
        .addEventListener('click', ()=>setText(6))
    document.getElementById('btn7')
        .addEventListener('click', ()=>setText(7))
    document.getElementById('btn8')
        .addEventListener('click', ()=>setText(8))
    document.getElementById('btn9')
        .addEventListener('click', ()=>setText(9))
    document.getElementById('btnplus')
        .addEventListener('click', ()=>setText('+'))
    document.getElementById('btnminus')
        .addEventListener('click', ()=>setText('-'))
    document.getElementById('btntimes')
        .addEventListener('click', ()=>setText('*'))
    document.getElementById('btndivided')
        .addEventListener('click', ()=>setText('/'))
});

