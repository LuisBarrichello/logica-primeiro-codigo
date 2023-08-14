let buttonsCopy = document.querySelectorAll('.btn-copy')
let paragraph = document.querySelectorAll('.text-to-copy')

buttonsCopy.forEach((button, index) => {
    button.addEventListener('click', () => {
        let textArea = document.createElement('textarea')
        
        textArea.value = paragraph[index].textContent
        document.body.appendChild(textArea)

        textArea.select();
        document.execCommand("copy");

        document.body.removeChild(textArea);
    
        alert("Texto copiado: " + paragraph[index].textContent);
    })
})