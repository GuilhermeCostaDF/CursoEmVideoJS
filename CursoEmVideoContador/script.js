function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] FALTAM DADOS!!!!")
        res.innerHTML = `Impossível Contar.... \u{1F61E}`
    }
    else{
        res.innerHTML= 'Contando:<br/>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0)
        {
            window.alert('Passo inválido....\n Considerando passo = 1')
            p=1
        }
        
        if(i < f){
            //Contagem Crescente
            for(let c = i ; c <= f ; c += p )
            {
            res.innerHTML += ` ${c}`
            }
           
        }
        else{
            //Contagem Decrescente
            for(let c = i; c >= f; c -= p)
            {
                res.innerHTML += ` ${c}`
            }
            
        }
        res.innerHTML += ` \u{1F3C1}`
    }
    
}