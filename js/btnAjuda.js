;(function(){

    const btnAjuda = document.querySelector('#btnAjuda');
    const listaAjuda = [
        {
            conteudo:'Bem vindo ao ceep',
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

    btnAjuda.addEventListener('click', function(){
        
        listaAjuda.forEach(function(objetoAjuda){

            criarCartaoInserirNoMural(objetoAjuda)

        }) //fim foreach

    })//fim click

    btnAjuda.classList.remove('no-js')

})()
