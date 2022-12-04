const input = document.getElementById('value');
const button = document.getElementsByClassName('grid-item');
const symbols = ['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','*','']
const themeButtons = document.getElementsByTagName('button');
const outer = document.querySelector('.outer');
const inner3 = document.querySelector('.inner3');
const buttonBackground = document.querySelector('.button');
const keyButton = document.querySelectorAll('.key');
const keyGrid = document.querySelectorAll('.grid-item');


console.log(keyGrid)

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
                outer.style.color='white';
                themeButtons[sel].style.backgroundColor='hsl(6, 63%, 50%)';
                themeButtons[1].style.backgroundColor='hsl(223, 31%, 20%)';
                themeButtons[2].style.backgroundColor='hsl(223, 31%, 20%)';
                inner3.style.backgroundColor='hsl(223, 31%, 20%)';
                buttonBackground.style.backgroundColor='hsl(223, 31%, 20%)';
                input.style.backgroundColor='hsl(224, 36%, 15%)';
                input.style.color='white';
                keyButton[0].style.backgroundColor='hsl(225, 21%, 49%)';
                keyButton[1].style.backgroundColor='hsl(225, 21%, 49%)';
                keyButton[2].style.backgroundColor='hsl(6, 63%, 50%)';
                keyButton[0].style.boxShadow='0 5px hsl(224, 28%, 35%)';
                keyButton[1].style.boxShadow=' 0 5px hsl(224, 28%, 35%)';
                keyButton[2].style.boxShadow='0 5px hsl(6, 70%, 34%)';
                for(let i=0; i<18;i++){
                    if((i!=3)&&(i!=16)&&(i!=17)){
                        keyGrid[i].style.backgroundColor='hsl(30, 25%, 89%)';
                        keyGrid[i].style.color='hsl(221, 14%, 31%)';
                        keyGrid[i].style.boxShadow='0 5px hsl(28, 16%, 65%)';

                    }

                }





            }   
            break;    
         case 1:
            {   outer.style.backgroundColor='hsl(0, 0%, 90%)';
                outer.style.color='hsl(60, 10%, 19%)';
                themeButtons[sel].style.backgroundColor='hsl(25, 98%, 40%)';
                themeButtons[0].style.backgroundColor='hsl(0, 5%, 81%)';
                themeButtons[2].style.backgroundColor='hsl(0, 5%, 81%)';
                inner3.style.backgroundColor='hsl(0, 5%, 81%)';
                buttonBackground.style.backgroundColor='hsl(0, 5%, 81%)';
                input.style.backgroundColor='hsl(0, 0%, 93%)';
                input.style.color='hsl(60, 10%, 19%)';
                keyButton[0].style.backgroundColor='hsl(185, 42%, 37%)';
                keyButton[1].style.backgroundColor='hsl(185, 42%, 37%)';
                keyButton[2].style.backgroundColor='hsl(25, 98%, 40%)';
                keyButton[0].style.boxShadow='0 5px hsl(185, 58%, 25%)';
                keyButton[1].style.boxShadow=' 0 5px hsl(185, 58%, 25%)';
                keyButton[2].style.boxShadow='0 5px hsl(25, 99%, 27%)';
                for(let i=0; i<18;i++){
                    if((i!=3)&&(i!=16)&&(i!=17)){
                        keyGrid[i].style.backgroundColor='hsl(45, 7%, 89%)';
                        keyGrid[i].style.color='hsl(60, 10%, 19%)';
                        keyGrid[i].style.boxShadow='0 5px hsl(35, 11%, 61%)';

                    }

                }
                



            }   
            break;  
        case 2 :
            { outer.style.backgroundColor='hsl(268, 75%, 9%)';
            outer.style.color='hsl(52, 100%, 62%)';
            themeButtons[sel].style.backgroundColor='hsl(176, 100%, 44%)';
            themeButtons[0].style.backgroundColor='hsl(268, 71%, 12%)';
            themeButtons[1].style.backgroundColor='hsl(268, 71%, 12%)';
            inner3.style.backgroundColor='hsl(268, 71%, 12%)';
            buttonBackground.style.backgroundColor='hsl(268, 71%, 12%)';
            input.style.backgroundColor='hsl(268, 71%, 12%)';
            input.style.color='hsl(52, 100%, 62%)';
            keyButton[0].style.backgroundColor='hsl(281, 89%, 26%)';
            keyButton[1].style.backgroundColor=' hsl(281, 89%, 26%)';
            keyButton[2].style.backgroundColor='hsl(176, 100%, 44%)';
            keyButton[0].style.boxShadow='0 5px hsl(285, 91%, 52%)';
            keyButton[1].style.boxShadow=' 0 5px hsl(285, 91%, 52%)';
            keyButton[2].style.boxShadow='0 5px hsl(177, 92%, 70%)';
            for(let i=0; i<18;i++){
                if((i!=3)&&(i!=16)&&(i!=17)){
                    keyGrid[i].style.backgroundColor='hsl(268, 47%, 21%)';
                    keyGrid[i].style.color='hsl(52, 100%, 62%)';
                    keyGrid[i].style.boxShadow='0 5px hsl(290, 70%, 36%)';



                }

            }



        }   
        break;     
    }
}


themeButtons[0].addEventListener('click',()=>theme(0));
themeButtons[1].addEventListener('click',()=>theme(1));
themeButtons[2].addEventListener('click',()=>theme(2));

