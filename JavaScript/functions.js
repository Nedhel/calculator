function getScreen(id){
    return document.getElementById(id).innerHTML
}
function setTextOnScreen(id,text){
    document.getElementById(id).innerHTML= text
}
function setCharOnScreen(id,text){
    document.getElementById(id).innerHTML = getScreen(id) + text
}
function eraseChar(id){
    let number = getScreen(id).split('')
    number.pop()
    setTextOnScreen(id,number.join(''))
}
function setDotOnScreen(id){
    let number = getScreen(id)
    if(/\D/.test(number)){        
    }else{
        setCharOnScreen(id,'.')
    }
}
function clearAll(){
    setTextOnScreen('screen','')
    setTextOnScreen('screenOperation','')
}
function operation(text){
    setCharOnScreen('screen',text)
    setTextOnScreen('screenOperation',getScreen('screen'))
    setTextOnScreen('screen','')
}
function equal(){
    let sOperation = getScreen('screenOperation').split('')
    let sign = sOperation[sOperation.length - 1]
    sOperation.pop()
    let num1= Number(sOperation.join(''))    
    switch (sign){
        case '+':
            num1+=Number(getScreen('screen'))                
            break;
        case '-':
            num1-=Number(getScreen('screen'))
            break;
        case '/':
            num1/=Number(getScreen('screen'))
            break;
        case '*':
            num1*=Number(getScreen('screen'))
            break;
    }
    setTextOnScreen('screen',num1)
    setTextOnScreen('screenOperation','')
}
 
window.addEventListener('load', function() {
    document.getElementById('btn0')
        .addEventListener('click', ()=>setCharOnScreen('screen',0))
    document.getElementById('btn1')
        .addEventListener('click', ()=>setCharOnScreen('screen',1))
    document.getElementById('btn2')
        .addEventListener('click', ()=>setCharOnScreen('screen',2))
    document.getElementById('btn3')
        .addEventListener('click', ()=>setCharOnScreen('screen',3))
    document.getElementById('btn4')
        .addEventListener('click', ()=>setCharOnScreen('screen',4))
    document.getElementById('btn5')
        .addEventListener('click', ()=>setCharOnScreen('screen',5))
    document.getElementById('btn6')
        .addEventListener('click', ()=>setCharOnScreen('screen',6))
    document.getElementById('btn7')
        .addEventListener('click', ()=>setCharOnScreen('screen',7))
    document.getElementById('btn8')
        .addEventListener('click', ()=>setCharOnScreen('screen',8))
    document.getElementById('btn9')
        .addEventListener('click', ()=>setCharOnScreen('screen',9))
    document.getElementById('btnplus')
        .addEventListener('click', ()=>{
            operation('+')            
        })
    document.getElementById('btnminus')
        .addEventListener('click', ()=>{
            operation('-')            
        })
    document.getElementById('btntimes')
        .addEventListener('click', ()=>{
            operation('*')            
        })
    document.getElementById('btndivided')
        .addEventListener('click', ()=>{
            operation('/')            
        })
    document.getElementById('btndot')
        .addEventListener('click',()=>setDotOnScreen('screen'))
    document.getElementById('btneraseall')
        .addEventListener('click', ()=>clearAll())
    document.getElementById('btnerase')
        .addEventListener('click', ()=>eraseChar('screen'))
    document.getElementById('btnequal')
        .addEventListener('click', ()=>equal())
});

