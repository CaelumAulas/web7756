;(function(){

    const btnSync = document.querySelector('#btnSync');
    
    btnSync.addEventListener('click', function() {

        let listaCartoesObjeto = [];

        //pegar todos os cartoes (vai retornar a lista de todos cartoes)
        let listaCartoes = document.querySelectorAll('.cartao')

        //percorrer todos os cartoes (for)
        for(let cartao of listaCartoes){
            
            let cartaoObjeto = {}
    
            //dentro do for, buscar o conteudo(<p>) , e a cor(input:checked)
            cartaoObjeto.conteudo = cartao.querySelector('.cartao-conteudo').textContent
            cartaoObjeto.cor = cartao.querySelector('input:checked').value
            
            //enviar objeto pro array  (usando push)
            listaCartoesObjeto.push(cartaoObjeto)

        }

        const conexaoApi = new XMLHttpRequest();
        conexaoApi.open('POST','https://ceep.herokuapp.com/cartoes/salvar');
        conexaoApi.setRequestHeader('Content-Type','application/json');

        const cartoesUser = {
            usuario: 'vanessa',
            cartoes: listaCartoesObjeto
        }
    
        conexaoApi.send(JSON.stringify(cartoesUser));

        conexaoApi.addEventListener('load', () => {
            let response = JSON.parse(conexaoApi.response)
            
            console.log(`${response.quantidade} cartões da ${response.usuario} salvos com sucesso`);
            
        })
    })

    btnSync.classList.remove('no-js');

})()