//IIFE - Immediately invoked function expression
(function(){
    const celularPodre = false
    
    //localizamos em quem queremos adicionar uma funcionalidade
    const btns = document.querySelectorAll('.opcoesDoCartao-remove')
    
    for(let posicao = 0; posicao < btns.length; posicao++){
        let btn = btns[posicao]

        btn.addEventListener('click', function(xuxu){
            //guardamos a referencia do cartao do botao clicado
            const cartao = xuxu.target.parentElement.parentElement
            
            if(celularPodre){
                cartao.remove()
            } else {
                //adicionamos a classe cartao--some
                cartao.classList.add('cartao--some')
    
                // Função Callback
                //qdo a transição de CSS acabar, remove o cartao
                cartao.addEventListener('transitionend', cartao.remove)
        
            }
        })
    }
})();