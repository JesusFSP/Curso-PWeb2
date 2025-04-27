document.addEventListener('DOMContentLoaded', function(){
    const inputTexto = document.getElementById('inputTexto');
    const invertir =  document.getElementById('invertir');
    const resultado =  document.getElementById('resultado');

    invertir.addEventListener('click', function(){
        const textoOriginal = inputTexto.value;
        resultado.textContent = invertirTexto(textoOriginal);

    });

    function invertirTexto(texto) {
        let textoInvertido = '';
        for(let i = texto.length -1; i >= 0; i--){
            textoInvertido += texto[i];
        }
        return textoInvertido;
    }

});