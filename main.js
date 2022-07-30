const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const result = document.querySelector('#result')
const select = document.querySelector('#selection')
const calculate = document.querySelector('#calculate')
const reset = document.querySelector('#reset')
console.log(reset)



function Calculate(){
    if(select.value == '+' ){
        result.value = Number(num1.value )+ Number(num2.value)
        
    }else if(select.value == '-'){
        result.value = num1.value - num2.value
    }else if(select.value == '*'){
         result.value = num1.value * num2.value
    }else if(select.value == '/'){
        result.value = num1.value / num2.value
    }else if(num1.value || num2.value == ""){
        alert('preencha os campos')
    }
        
    
      return result.value;
}
calculate.addEventListener('click',Calculate)


function Reset(){
  if(num1.value || num2.value ||result.value != ""){
    num1.value = ""
    num2.value = ""
    result.value = ""
  }
}

reset.addEventListener('click',Reset)

 