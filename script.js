const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick=()=>{
        if(item.id == "clear"){
            display.innerText = "";
        }else if(item.id =="backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length-1); 
        }else if(display.innerText !=""&& item.id == "equal"){
            display.innerText = eval(display.innerText);
        }else if(display.innerText == "" && item.id == "equal"){
            display.innerText="null";
            setTimeout(()=>(display.innerText = ""),800);
        }else if(display.innerText == "" && item.classList == "btn-operator"){
            display.innerText="";
            setTimeout(()=>(display.innerText=""),500);
        }else{
            display.innerText+= item.id;
        }
    }
}) 


const themeToggglerBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggglerBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeToggglerBtn.classList.toggle("active");
    inDark =! isDark;
}