const livros = require('./database')


// pegar um input do usuário, perguntando se ele deseja escolher um livro por categoria

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

//Se for Sim, mostra as categorias disponíveis, perguntando qual a categoria escolhida

//Se for Não, mostra todos os livros, em ordem crescente pela quantidade de págians

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade e estilo de vida', '/História brasileira','/Américas','/Tecnologia','/Estilo de vida')

    const entradaCategoria = readline.question('Qual a categoria desejada?')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todas as opções disponíveis: ')
    console.table(livrosOrdenados)
}