/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

(function (win, doc) {


    var $visor = doc.querySelector('[data-js="visor"]')
    var $btnNumbers = doc.querySelectorAll('[data-js="btnNum"]')
    var $btnCe = doc.querySelector('[data-js="btnCe"]')
    var $btnOperacao = doc.querySelectorAll('[data-js="btnOperacao"]')
    var $btnIgual = doc.querySelector('[data-js="btnIgual"]')


    Array.prototype.forEach.call($btnNumbers, function (button) {
        button.addEventListener('click', mostraNumeroClicado, false)
    })
    Array.prototype.forEach.call($btnOperacao, function (button) {
        button.addEventListener('click', mostraOperadorClicado, false)
    })

    $btnCe.addEventListener('click', resetCalc, false)
    $btnIgual.addEventListener('click', mostarIgual, false)

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
        var operadores = ['+', '-', 'x', '÷'];
        var item = number.split('').pop()
        return operadores.some(function (operador) {
            return operador === item
        })
    }
    
    function removeUltimoItemSeOperador(number) {
        if (ultimoItem(number)) {
            return number.slice(0, -1)
        }
        return number
    }

    function mostarIgual() {
        $visor.value = removeUltimoItemSeOperador($visor.value)
        var valores = $visor.value.match(/\d+[+x÷-]?/g)
        $visor.value = resultado = valores.reduce(function (acumulado, atual) {
            var primeiroValor = acumulado.slice(0, -1)
            var operador = acumulado.split('').pop()
            var ultimoValor = removeUltimoItemSeOperador(atual)
            var ultimoOperador = ultimoItem(atual) ? atual.split('').pop() : ''
            switch (operador) {
                case '+':
                    return (Number(primeiroValor) + Number(ultimoValor)) + ultimoOperador
                case '-':
                    return (Number(primeiroValor) - Number(ultimoValor)) + ultimoOperador
                case 'x':
                    return (Number(primeiroValor) * Number(ultimoValor)) + ultimoOperador
                case '÷':
                    return (Number(primeiroValor) / Number(ultimoValor)) + ultimoOperador
            }
        })

    }


})(window, document)