const botoes = document.querySelectorAll(".btn")
botoes.forEach(element => element.addEventListener('click', filtrarLivros));
const valorTotalDisponiveis = document.getElementById("valor_total_livros_disponiveis")

function filtrarLivros() {
    valorTotalDisponiveis.innerHTML = ' '

    const elemento = document.getElementById(this.id)
    const categoria = elemento.value
    let livrosFiltrados = categoria == "disponiveis" ? filtrarPorQuantidade() : filtrarPorCategoria(categoria);

    exibirOsLivrosNaTela(livrosFiltrados)

    if(categoria == 'disponiveis'){
        let valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirOTotalDeLivrosDisponiveis(valorTotal)
    }
}

function filtrarPorQuantidade(){
    return livrosFiltrados = livros.filter(livro => livro.quantidade > 0)
}

function filtrarPorCategoria(categoria){
    return livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
}

function exibirOTotalDeLivrosDisponiveis(valor){
    valor = (valor - valor * desconto).toFixed(2)

    valorTotalDisponiveis.innerHTML = `<div class="livros__disponiveis">
                                            <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
                                        </div>`
}