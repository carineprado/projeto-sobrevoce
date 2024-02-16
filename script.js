function verificar() {
    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value
    var linguagem = document.getElementById('linguagem').value
    var msg = document.getElementById('msg')

    if (nome.length == 0 || idade.length == 0 || linguagem.length == 0) {
        window.alert('Erro: Faltam dados! Preencha todos os campos e tente novamente.')
    } else {
        msg.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`
        
        setTimeout(function() {
            var resposta = prompt(`Você gosta de estudar ${linguagem} ? Responda com o número 1 para SIM ou 2 para NÃO.`)
            
            if (resposta === '1') {
                window.alert('Muito bom! Continue estudando e você terá muito sucesso.')
            } else if (resposta === '2') {
                window.alert('Ahh que pena... Já tentou aprender outras linguagens?')
            } else {
                window.alert('Opção inválida. Responda com o número 1 para SIM ou 2 para NÃO.')
            }

            document.getElementById('formulario').reset()
            msg.innerHTML = 'Preencha os dados acima!'

        }, 100); // Atraso de 100 milissegundos (0.1 segundos)        
    }    
}