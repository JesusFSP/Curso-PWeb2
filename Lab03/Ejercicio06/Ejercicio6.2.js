document.addEventListener('DOMContentLoaded', function () {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operadorSelect = document.getElementById('operador');
    const calcularBtn = document.getElementById('calcular-btn');
    const resultadoDiv = document.getElementById('resultado');
    const binarioDiv = document.getElementById('binario');

    calcularBtn.addEventListener('click', calcular);

    function calcular() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operador = operadorSelect.value;

        let resultado;
        let operacion = '';

        switch (operador) {
            case '+':
                resultado = num1 + num2;
                operacion = `${num1} + ${num2}`;
                break;

            case '-':
                resultado = num1 - num2;
                operacion = `${num1} - ${num2}`;
                break;

            case '*':
                resultado = num1 * num2;
                operacion = `${num1} * ${num2}`;
                break;

            case '/':
                resultado = num1 / num2;
                operacion = `${num1} / ${num2}`;
                break;

            case '%':
                resultado = num1 % num2;
                operacion = `${num1} % ${num2}`;
                break;

            case '&&':
                resultado = Boolean(num1) && Boolean(num2);
                operacion = `${Boolean(num1)} && ${Boolean(num2)}`;
                break;

            case '||':
                resultado = Boolean(num1) || Boolean(num2);
                operacion = `${Boolean(num1)} || ${Boolean(num2)}`;
                break;

            default:
                throw new Error("Operador no soportado");
        }
        mostrarResultado(operacion, resultado);
    }

    function mostrarResultado(operacion, resultado) {
        resultadoDiv.innerHTML = `<span class="operacion">${operacion} = </span>${resultado}`;
    }
});