let input=document.getElementById('demo');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(buttons=>{
    buttons.addEventListener("click",(j)=>{
        if(j.target.innerHTML == "="){
            string=eval(string);
            input.value=string;
        }
        else if(j.target.innerHTML == "AC"){
            string="";
            input.value=string;
        }
        else if(j.target.innerHTML == "DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string=string+j.target.innerHTML;
            input.value=string;
        }
    })
})
