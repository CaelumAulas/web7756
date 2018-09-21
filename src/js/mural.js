;(function(){

    $.ajax({
        url: 'https://ceep.herokuapp.com/cartoes/carregar',
        method: 'GET',
        data: {usuario: 'vanessa'},
        dataType: 'jsonp',
        success: function(resposta){
            console.log(resposta);

            resposta.cartoes.forEach(cartao => {
        
                criarCartaoInserirNoMural(cartao)
                
            });
        }
    })

})()