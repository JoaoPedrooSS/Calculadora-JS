function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        inicia(){
            this.clique();
        },
        clique(){
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
            }.bind(this))

            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-clear')){
                    this.clear();
                }
            }.bind(this))

            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-del')){
                    this.delete();
                }
            }.bind(this))

            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-eq')){
                    this.equal();
                }
            }.bind(this))
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },

        clear(){
            this.display.value = '';
        },

        delete(){
            this.display.value = this.display.value.slice(0, -1);
        },

        equal(){
            let conta = this.display.value;

            try{
               conta = eval(conta);

               if(!conta){
                alert('Conta inválida!');
                return;
               }
               this.display.value = conta;
            }catch{
                alert('Conta Inválida!');
                return;
            }
        },
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();