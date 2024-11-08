btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
nameElement = document.querySelector(".name");
surnameElement = document.querySelector(".surname");

btnElement.addEventListener("click",function(){
    if (nameElement.value === `` || surnameElement.value === ``){
        resultElement.innerHTML = `Вы не ввели имя или фамилию!`;
    }
    else{
        resultElement.innerHTML = `Здраствуйте, ${nameElement.value} ${surnameElement.value} !`;
    }
})