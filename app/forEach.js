const conteiner = document.querySelector("#livros")

function exibirOsLivrosNaTela(livros){
    let livrosComDesconto = aplicarDesconto(livros)

    conteiner.innerHTML = " "
    livrosComDesconto.forEach(element => {
        let disponibilidade = element.quantidade > 0 ? 'livros__imagens' : 'livros__imagens indisponivel'
        conteiner.innerHTML += `<div class="livro">
                                     <img class="${disponibilidade}" src="${element.imagem}" alt="${element.alt}" />
                                     <h2 class="livro__titulo"> ${element.titulo} </h2>
                                     <p class="livro__descricao">${element.autor}</p>
                                     <p class="livro__preco" id="preco">$ ${element.preco.toFixed(2)}</p>
                                     <div class="tags">
                                         <span class="tag">Front-end</span>
                                     </div>
                                 </div>`
 
     });
}