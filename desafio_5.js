/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var meuArray = [1, 'Juliano', true, 33, 123]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function minhaFuncao(arr) {
    return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(minhaFuncao(meuArray)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function minhaFuncao2(arr2, num2) {
    return arr2[num2]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var meuArray2 = [2, 'Lilia', false, 35, 65]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(minhaFuncao2(meuArray2, 0))
console.log(minhaFuncao2(meuArray2, 1))
console.log(minhaFuncao2(meuArray2, 2))
console.log(minhaFuncao2(meuArray2, 3))
console.log(minhaFuncao2(meuArray2, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeLivro) {

    var livros = {
        'JavaScript: O Guia Definitivo': {
            quantidadePagina: 150,
            autor: 'David Flanagan',
            editora: 'OREILLY'
        },
        'O Melhor do JavaScript': {
            quantidadePagina: 200,
            autor: 'Douglas Crockford',
            editora: 'OREILLY'
        },
        'Segredos do Ninja Javascript': {
            quantidadePagina: 400,
            autor: 'John Resig, Bear Bibeault',
            editora: 'NOVATEC'
        }
    };

    return !nomeLivro?livros:livros[nomeLivro]

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = "JavaScript: O Guia Definitivo"

console.log('O livro '+nomeLivro+' tem '+book(nomeLivro).quantidadePagina+' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro '+nomeLivro+' é '+book(nomeLivro).autor+'.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro '+nomeLivro+' foi publicado pela editora '+book(nomeLivro).editora+'.')