;(function(){
    const form = document.querySelector('.formNovoCartao');
    
    form.addEventListener('submit', function(evento){

        evento.preventDefault();
        const textarea = this.querySelector('textarea'),
              temTexto = textarea.value.trim()

        if(temTexto){

            let objetoCartao = {
                conteudo: temTexto
            }

            criarCartaoInserirNoMural(objetoCartao);

            form.reset();
            
        } else {
            const msgErro = document.createElement('p')
            
            msgErro.classList.add('formNovoCartao-msg');
            msgErro.innerText = 'Digite um texto para criar o cartão';
            
            textarea.insertAdjacentElement('afterend', msgErro)

            //quando o elemento sair de visibilidade da tela, remove ele do HTML

            form.addEventListener('animationend', function(evento){
                evento.target.remove()
            });
            

        }
    })

    
    form.classList.remove('no-js');
})()