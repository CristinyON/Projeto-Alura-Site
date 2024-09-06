function pesquisar() {
    let section = document.getElementById ("resultados-pesquisa")

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value 
    if (!campoPesquisa) {
        section.innerHTML = "<p>Não Encontrado</p>"
        return 
    }
    campoPesquisa = campoPesquisa.toLowerCase()


let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {

    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `

        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}
                <a href=${dado.link} target="_blank"><br>Sobre</a>
            </p>
        </div>
    `;  
    }
      
}
if (!resultados) {
    resultados= "<p>Não Encontrado</p>"
}
section.innerHTML = resultados 
}



