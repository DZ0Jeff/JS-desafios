
let btn = document.querySelector('#send')
btn.addEventListener('click', () => {
    calculadora()
})

function calculadora(){
    let number1 = Number(document.querySelector('#input1').value)
    let number2 = Number(document.querySelector('#input2').value)
    let output = document.querySelector("#output")
    option = '+'

    switch (option) {
        case '+':
            resultado = number1 + number2    
            output.innerHTML = `Resultado: ${resultado}`
            break;

        case '-':
            resultado = number1 - number2    
            output.innerHTML = `Resultado: ${resultado}`
            break;

        case '*':
            resultado = number1 * number2    
            output.innerHTML = `Resultado: ${resultado}`
            break;

        case '/':
            resultado = number1 / number2
            output.innerHTML = `Resultado: ${resultado}`    
            break;

            
        default:
            output.innerHTML = '[ERROR] Opção inválida'
            break;
    }
}


    