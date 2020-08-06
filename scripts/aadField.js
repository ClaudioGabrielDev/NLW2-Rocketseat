//Procurar o botão
document.querySelector('#add-time').addEventListener('click', cloneField)
//Quando encontar o botao click
function cloneField(){
//Execute a acao //duplicar a secao
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
//limpar os campos que campos?

    const fields = newFieldContainer.querySelectorAll('input')
        fields.forEach( function(field){
            field.value=""
        })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)


    

}


    