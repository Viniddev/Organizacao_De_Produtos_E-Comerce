let btnOrdenacao = document.getElementById("btnOrdenarPorPreco")
btnOrdenacao.addEventListener("click", ordenarPorPreco)
var opcao = true
function ordenarPorPreco(){
    //a função sort para strings precisa de uma função como parametro para saber qual o critério de avaliação
    //nesse caso usamos o B.preco - A.preco para indicar que queremos do maior para o menor
    if(opcao){
        let livrosOrdenados = livros.sort((a, b) => b.preco - a.preco)
        opcao = false
    }else{
        let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
        opcao = true
    }
    exibirOsLivrosNaTela(livros)
}