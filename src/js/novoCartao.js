;(function(){
    'use strict';


    console.log('asdasdsa');
    let numeroCartao = 1;

    window.criarCartaoInserirNoMural = function (objetoCartao){
    
        console.log(objetoCartao);
    
        const mural = document.querySelector('.mural');
        const cartao = document.createElement('article');
    
        cartao.id = `cartao_${numeroCartao}`;
        cartao.classList.add('cartao')
        cartao.tabIndex = 0;
        cartao.style.backgroundColor = objetoCartao.cor;
    
        cartao.innerHTML = `
        <div class="opcoesDoCartao">
            <button id="btn0" class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
            <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
    
            <input type="radio" name="corDoCartao${numeroCartao}" value="#EBEF40" id="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo" checked>
            <label for="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
            </label>
    
            <input type="radio" name="corDoCartao${numeroCartao}" value="#F05450" id="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
            </label>
    
            <input type="radio" name="corDoCartao${numeroCartao}" value="#92C4EC" id="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo abobora">
            <label for="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
            </label>
    
            <input type="radio" name="corDoCartao${numeroCartao}" value="#76EF40" id="corInspiração-cartao-${numeroCartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao-${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
            </label>
        </div>
        <p class="cartao-conteudo" contenteditable tabindex="0">${objetoCartao.conteudo}</p>
        `
    
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
                const cor = event.target.value
                cartao.style.backgroundColor = cor
            }
        })
    
        cartao.addEventListener('keydown', function(evento){
            const label = evento.target
            if(evento.code == 'Enter'){
                label.click()
            }
            
        })
    
        cartao.addEventListener('click', function(evento){
            if(evento.target.classList.contains('opcoesDoCartao-remove')){
                this.classList.add('cartao--some');
                this.addEventListener('transitionend', this.remove)
            }
        })
    
        mural.insertAdjacentElement('afterbegin',cartao);
    
        numeroCartao++
    }    

})()