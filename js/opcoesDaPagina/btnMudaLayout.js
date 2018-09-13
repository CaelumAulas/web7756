(function(){
    const btn = document.querySelector('#btnMudaLayout');
    const mural = document.querySelector('.mural');
    
    function mudaLayout(){
        mural.classList.toggle('mural--linha')
    }
    
    // Função Anônima
    btn.addEventListener('click', function mudaTexto(){
        if(btn.innerText == 'Linhas'){            
            btn.innerText = 'Blocos'
        }   
        else {
            btn.innerText = 'Linhas'
        }
    });
    
    btn.addEventListener('click', mudaLayout);
    
    btn.classList.remove('no-js')
})()