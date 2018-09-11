const btn = document.querySelector('#btnMudaLayout');


function mudaLayout(){
    console.log('oiii');
}

function mudaTexto(){
    
    if(this.textContent == 'Blocos'){
        
        this.textContent = 'Linhas'
    }
    else {
        this.textContent = 'Blocos'
    }
}

btn.onclick = mudaTexto
