btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
radioButtons = document.querySelectorAll('[name="contact"]');

resultElement.textContent = "0 рублей";
let Sum = 0;
btnElement.addEventListener("click", function(){ 
    resultElement.textContent = "0 рублей";
    for (const radioButton of radioButtons){
        if(radioButton.checked){
            Sum += parseInt(radioButton.value);
        }
    }

    
    resultElement.textContent = `${Sum} рублей`;
    Sum = 0;
});