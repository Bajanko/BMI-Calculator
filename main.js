const getElement = _class => document.querySelector(_class)

const result = getElement(".result");
const weightInput = getElement("#weight")
const heightInput = getElement("#height")
const btn = getElement(".btn");

result.textContent =0;
btn.textContent ="enter"
btn.addEventListener("click", showBMI);

function showBMI(){
    // let BMI;
    showBMIFunc()
}

function showBMIFunc(){
    if(btn.textContent.toLowerCase()==="enter"){
        if(weightInput.value === '' || heightInput.value === ''){
            errFunc('input values first', 'white')
            setTimeout (() =>{
                result.textContent =0;
                result.style.color="#fff";
                setChanges("enter", "darkblue");
                focusFunc(weightInput, heightInput)
            },2000)
        }else if(!isNaN(weightInput.value) && !isNaN(heightInput.value)){
           let  BMI = weightInput.value /(heightInput.value * heightInput.value);
        
           
            result.textContent="Your BMI is: " + BMI.toFixed(2);
        }else{
            errFunc("Only numbers are allowed" , "white")
            setTimeout (() =>{
                errFunc(0,'#fff')
            },2000)
        }
    
    setChanges("reset", "red");
    }
    else{
        weightInput.focus();
        reset(result, weightInput,heightInput);
        setChanges("enter", "darkblue");
    }
}
function reset(...elements){
    elements.forEach((el) =>{
        if(el.tagName.toLowerCase()==="div"){
            el.textContent = 0;
        }
        else{
            el.value ="";
        
        }
    });
}
function setChanges(text, color){
    btn.textContent=text;
    btn.style.backgroundColor = color;

} 
function errFunc(message, color){
    result.style.color = color;
    result.textContent = message;
}

function focusFunc(...elements){
    elements.forEach(el=>{
        if(el.value === ''){
            el.focus()
        }
    }) 
}

document.addEventListener("keyup", (e)=>{
    if (e.keyCode ===13){
        showBMIFunc()
}
})