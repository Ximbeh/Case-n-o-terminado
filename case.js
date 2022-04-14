const verificarProduto = function(opcao){
    let resultado = "<br><h3>Opção selecionada</h3>"

    switch (opcao) {
        case "hb1":
            resultado += 'Suvaco de urso está com preço de R$30,10'
            console.log('Suvaco de urso está com preço de R$30,10')
            break

        case "hb2":
            resultado += 'canela de bufalo está com preço de R$38,10'
            console.log('canela de bufalo está com preço de R$38,10')
            break

        case "hb3":

            resultado += "Asfalto enlatado está com preço de R$40,10"
            console.log("Asfalto enlatado está com preço de R$40,10")
            break

        default:
            resultado += "Opção inválida"
            console.log("Opção inválida")
            break

    }

    document.getElementById('resultado').innerHTML = resultado;

}
