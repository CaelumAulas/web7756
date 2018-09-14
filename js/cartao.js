;(function(){
    const cartoes = document.querySelectorAll(".cartao")

    for(let posicao = 0; posicao < cartoes.length; posicao++){
        const cartao = cartoes[posicao]

        function foca(){
            cartao.classList.add('cartao--focado')
        }

        function desfoca(){
            cartao.classList.remove('cartao--focado')
        }

        cartao.addEventListener('focusin', foca)
        cartao.addEventListener('focusout', desfoca)

        cartao.addEventListener('change', function mudaCor(event){
            if(event.target.classList.contains("opcoesDoCartao-radioTipo")){
                console.log(event.target)
                const cor = event.target.value
                cartao.style.backgroundColor = cor
            }
        })

        //mudaCor(objetoEvento)

        // const inputsCor = cartao.querySelectorAll(".opcoesDoCartao-radioTipo")

        // for(let posicao = 0; posicao < inputsCor.length; posicao++){
        //     const input = inputsCor[posicao]

        //     input.addEventListener('change', function(){
               
        //     })   
        // }

    }
})()
