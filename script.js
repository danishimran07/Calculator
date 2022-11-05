const input = document.getElementById('value');
const button = document.getElementsByClassName('grid-item');
const symbols = ['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','*','']



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