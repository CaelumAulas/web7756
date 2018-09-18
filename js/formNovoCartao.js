;(function(){
    const form = document.querySelector('.formNovoCartao');
    const mural = document.querySelector('.mural');

    form.addEventListener('submit', function(evento){

        evento.preventDefault();
        const textarea = this.querySelector('textarea')

        if(textarea.value.trim()){

            const cartao = document.createElement('article');

            cartao.id = 'cartao_';
            cartao.classList.add('cartao')
            cartao.tabIndex = 0;

            cartao.innerText = textarea.value.trim();

            mural.insertAdjacentElement('afterbegin',cartao);
            
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