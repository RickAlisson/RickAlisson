function gerar() {

    var min = parseInt(document.getElementById("value-min").value)
    var max = parseInt(document.getElementById("value-max").value)

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
          
    document.getElementById("result").innerHTML = randomNumber
    
}

const button = document.querySelector("button")

button.addEventListener('click', gerar)
