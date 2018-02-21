/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.
- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

(function (win, doc) {

    var $visor = doc.querySelector('[data-js="visor"]')
    var $btnNumbers = doc.querySelectorAll('[data-js="btnNum"]')
    var $btnCe = doc.querySelector('[data-js="btnCe"]')
    var $btnOperacao = doc.querySelectorAll('[data-js="btnOperacao"]')
    var $btnIgual = doc.querySelector('[data-js="btnIgual"]')

    function initalize() {
        initEvents()
    }

    function initEvents() {
        Array.prototype.forEach.call($btnNumbers, function (button) {
            button.addEventListener('click', mostraNumeroClicado, false)
        })
        Array.prototype.forEach.call($btnOperacao, function (button) {
            button.addEventListener('click', mostraOperadorClicado, false)
        })
        $btnCe.addEventListener('click', resetCalc, false)
        $btnIgual.addEventListener('click', mostarIgual, false)
    }

    function mostraNumeroClicado() {
        $visor.value += this.value
    }

    function mostraOperadorClicado() {
        $visor.value = removeUltimoItemSeOperador($visor.value)
        $visor.value += this.value
    }

    function resetCalc() {
        $visor.value = 0
    }

    function ultimoItem(number) {
        var operadores = obterOperacoes();
        var item = number.split('').pop()
        return operadores.some(function (operador) {
            return operador === item
        })
    }

    function obterOperacoes(){
        return Array.prototype.map.call($btnOperacao, function(operadorBtn){
            return operadorBtn.value
        })
    }

    function removeUltimoItemSeOperador(string) {
        if (ultimoItem(string)) {
            return string.slice(0, -1)
        }
        return string
    }

    function mostarIgual() {
        $visor.value = removeUltimoItemSeOperador($visor.value)
        var valores = $visor.value.match(/\d+[+x÷-]?/g)
        $visor.value = valores.reduce(calcularValores)
    }

    function calcularValores(acumulado, atual) {
        var primeiroValor = acumulado.slice(0, -1)
        var operador = acumulado.split('').pop()
        var ultimoValor = removeUltimoItemSeOperador(atual)
        var ultimoOperador = ultimoItem(atual) ? atual.split('').pop() : ''
        return operacoes(primeiroValor, operador,ultimoValor) + ultimoOperador
    }

    function operacoes(primeiroValor, operador, ultimoValor) {
        switch (operador) {
            case '+':
                return Number(primeiroValor) + Number(ultimoValor) 
            case '-':
                return Number(primeiroValor) - Number(ultimoValor)
            case 'x':
                return Number(primeiroValor) * Number(ultimoValor)
            case '÷':
                return Number(primeiroValor) / Number(ultimoValor)
        }
    }

    initalize()

})(window, document)