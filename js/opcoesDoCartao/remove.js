//IIFE - Immediately invoked function expression
(function(){
    //localizamos em quem queremos adicionar uma funcionalidade
    const btns = document.querySelectorAll('.opcoesDoCartao-remove')

    for (let indice = 0; indice < btns.length; indice++) {
       
        let btn = btns[indice]

        btn.addEventListener('click', function(){

            //guardamos a referencia do cartao do botao clicado
            const cartao = this.parentElement.parentElement
    
            //adicionamos a classe cartao--some
            cartao.classList.add('cartao--some')
    
            //qdo a transição de CSS acabar, remove o cartao
            cartao.addEventListener('transitionend', cartao.remove )
    
        })
        
    }

})();