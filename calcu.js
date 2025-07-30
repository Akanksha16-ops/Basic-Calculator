const buttonsEl=document.querySelectorAll("button");
const input=document.querySelector("#result");

for(let i=0;i<buttonsEl.length;i++)
{
   buttonsEl[i].addEventListener("click",()=>{
    const buttonVal=buttonsEl[i].textContent;
    if(buttonVal=='C')
        clearRes();
    else if(buttonVal=='=')
        calculateRes();
    else if(buttonVal=='B')
        backspace();
    else
        appendVal(buttonVal);
   })
}

function clearRes(){
    input.value='';
}

function calculateRes(){
   input.value=eval(input.value);
}

function appendVal(val){
   input.value+=val;
}

function backspace()
{
    input.value=input.value.slice(0,-1);
}