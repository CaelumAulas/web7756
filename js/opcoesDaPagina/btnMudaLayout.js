const btn = document.querySelector('#btnMudaLayout');
const mural = document.querySelector('.mural');

function mudaLayout(){

    mural.classList.toggle('mural--linha')
    
    /*
    if(mural.classList.contains('mural--linha')){
        mural.classList.remove('mural--linha')
    } 
    else {
        mural.classList.add('mural--linha')
    }

    */
    
}

function mudaTexto(){
    
    if(this.textContent == 'Blocos'){
        
        this.textContent = 'Linhas'
    }
    else {
        this.textContent = 'Blocos'
    }
}

btn.addEventListener('click', mudaTexto);
btn.addEventListener('click', mudaLayout);
