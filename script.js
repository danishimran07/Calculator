const input = document.getElementById('value');
const button = document.getElementsByClassName('grid-item');
const symbols = ['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','*','']
const themeButtons = document.getElementsByTagName('button');
const outer = document.querySelector('.outer');
const inner3 = document.querySelector('.inner3');
console.log(outer);
let themeSelect =0;

for (let x in symbols){
    if (x!=3){
        button[x].addEventListener('click', ()=>input.value+= symbols[x])
    }
}
button[16].addEventListener('click', ()=>input.value='')
button[17].addEventListener('click', ()=>
{
var value = input.value;
input.value = eval(value);

}
);

window.addEventListener("keydown", (e)=>
{
    if (e.key === "Enter") {
        var value = input.value;
console.log(eval(value));
input.value = eval(value);
     }


}
   );

   button[3].addEventListener('click', ()=>{
    const length = input.value.length;
    input.value=input.value.substring(0, length-1)
})

function theme(sel){
    themeSelect=sel;
    console.log(themeSelect);
    switch(themeSelect){
        case 0:
             {  outer.style.backgroundColor='hsl(222, 26%, 31%)';
                themeButtons[sel].style.backgroundColor='hsl(6, 63%, 50%)';
                themeButtons[1].style.backgroundColor='hsl(223, 31%, 20%)';
                themeButtons[2].style.backgroundColor='hsl(223, 31%, 20%)';
                inner3.style.backgroundColor='hsl(223, 31%, 20%)';


            }   
            break;    
         case 1:
            {  outer.style.backgroundColor='hsl(0, 0%, 90%)';
                themeButtons[sel].style.backgroundColor='hsl(25, 98%, 40%)';
                themeButtons[0].style.backgroundColor='hsl(0, 5%, 81%)';
                themeButtons[2].style.backgroundColor='hsl(0, 5%, 81%)';
                inner3.style.backgroundColor='hsl(0, 5%, 81%)';


            }   
            break;  
        case 2 :
            return console.log('theme3');    
    }
}


themeButtons[0].addEventListener('click',()=>theme(0));
themeButtons[1].addEventListener('click',()=>theme(1));
themeButtons[2].addEventListener('click',()=>theme(2));

