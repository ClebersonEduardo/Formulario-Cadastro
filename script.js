async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepCovertida = await consultaCep.json()
        if(consultaCepCovertida.erro) {
            throw Error ('CEP não existente!')
        }
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')

        cidade.value = consultaCepCovertida.localidade
        logradouro.value = consultaCepCovertida.logradouro
        estado.value = consultaCepCovertida.uf

        console.log(consultaCepCovertida)
        return consultaCepCovertida
    }catch (erro){
        mensagemErro.innerHTML = `<p>Cep inválido. Tente Novamente!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))
// .then(resposta => resposta.json())
// .then(r => {
//     if(r.erro) {
//         throw Error('Esse CEP não existe')
//     }else 
//     console.log(r)
// })
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluido'))

// let ceps = ['01001000' , '01001001']
// let conjuntoCeps = ceps.map( valores => buscaEndereco(valores))
// Promise.all(conjuntoCeps).then( respostas => console.log(respostas))
