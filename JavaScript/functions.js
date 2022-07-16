function getScreen(){
    let textOnScreen = document.getElementById('screenOperation').innerHTML
    if(textOnScreen.length + document.getElementById('screen').innerHTML.length< 18)
        document.getElementById('screenOperation').innerHTML =
        textOnScreen + document.getElementById('screen').innerHTML
    clearScreen()
}
function setText(text){
    let textOnScreen = document.getElementById('screen').innerHTML
    if(textOnScreen.length < 18)
        document.getElementById('screen').innerHTML = textOnScreen.concat(text)
}
function eraseChar(){
    let text=document.getElementById('screen').innerHTML.split('')
    text.pop()
    document.getElementById('screen').innerHTML= text.join('')
}
function clear(){
    document.getElementById('screen').innerHTML=''
    document.getElementById('screenOperation').innerHTML=''
}
function clearScreen(){
    document.getElementById('screen').innerHTML=''
}
 
window.addEventListener('load', function() {
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
        .addEventListener('click', ()=>{
            setText('+')
            getScreen()
        })
    document.getElementById('btnminus')
        .addEventListener('click', ()=>{
            setText('-')
            getScreen()
        })
    document.getElementById('btntimes')
        .addEventListener('click', ()=>{
            setText('*')
            getScreen()
        })
    document.getElementById('btndivided')
        .addEventListener('click', ()=>{
            setText('/')
            getScreen()
        })
    document.getElementById('btndot')
        .addEventListener('click',()=>setText('.'))
    document.getElementById('btneraseall')
        .addEventListener('click', ()=>clear())
    document.getElementById('btnerase')
        .addEventListener('click', ()=>eraseChar())
});

