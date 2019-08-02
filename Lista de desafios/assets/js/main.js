const output = document.querySelector('#enter')
const footer = document.querySelector('.horas')
let date = new Date()
let hora = date.getHours()
let atualHora = hora == 0 ? `${hora} hora: meia noite` : `São ${hora} horas` 

function fileExists(url){
    let file = new XMLHttpRequest()
    file.open('HEAD', url, false)
    file.send()
    return file.status != 404
}


function readListFile(file){
    let plainFile = new XMLHttpRequest()
    plainFile.open("GET", file, false)

    plainFile.onreadystatechange = () => {
        if(plainFile.readyState == 4)
        {
            if(plainFile.status === 200 || plainFile.status == 0)
            {
                let responseText = plainFile.responseText

                let h1 = document.createElement('h1')
                let titleText = responseText.split('-')[0]
                h1.innerHTML = titleText

                output.innerText += responseText.slice(10)
                output.appendChild(h1)
            }
        }
    }

    plainFile.send(null);
}


function layout(){
    
    if (hora >= 06 && hora < 12){
        document.body.backgroundColor = '#f7f8f800'
        document.body.style.color = '#6e6f7'

    } else if(hora >= 12 && hora < 18){
        document.body.style.backgroundColor = '#e75d00'
        document.body.style.color = "white"

    } else {
        document.body.style.backgroundColor = '#001629'
        document.body.style.color = "white"
        document.body.style.fontWeight = "bold"
    }
    
}


const absoluteFile = "file:///C:/Users/jeferson/Documents/dev/Desafios/JS/Lista%20de%20desafios/view/desafios.txt"
const relativeFile = '/view/desafios.txt'

readListFile(relativeFile)
footer.innerHTML = `${atualHora}`
layout()