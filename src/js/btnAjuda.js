;(function(){

    const btnAjuda = document.querySelector('#btnAjuda');

    let listaAjuda = [
        {
            conteudo:'1 Bem vindo ao ceep',
            cor: 'yellow'
        },
        {
            conteudo: 'Clique no botao linhas',
            cor: 'red'
        },
        {
            conteudo:'O site esta adaptado p dispositivos moveis',
            cor: 'blue'
        }
    ]

    const conexaoApi = new XMLHttpRequest()

    conexaoApi.open('GET','http://ceep.herokuapp.com/cartoes/instrucoes')
    conexaoApi.responseType = 'json';
    conexaoApi.send();    

    conexaoApi.addEventListener('load', function(){    
        listaAjuda = conexaoApi.response.instrucoes        
    })

    btnAjuda.addEventListener('click', function(){
        
        listaAjuda.forEach(function(objetoAjuda){

            criarCartaoInserirNoMural(objetoAjuda)

        })

    })//fim click

    btnAjuda.classList.remove('no-js')

})()
