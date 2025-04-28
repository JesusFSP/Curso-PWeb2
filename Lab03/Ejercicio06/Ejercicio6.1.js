document.addEventListener('DOMContentLoaded', function() {
    const texto = document.getElementById('texto-modificable');
    const aumentarBtn = document.getElementById('aumentar-btn');
    const disminuirBtn = document.getElementById('disminuir-btn');
    const cambiarColorBtn = document.getElementById('cambiar-color-btn');
    const resetColorBtn = document.getElementById('reset-color-btn');
    
    let fontSize = 16;
    const colores = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5'];
    let colorIndex = 0;
    
    aumentarBtn.addEventListener('click', function() {
        fontSize += 2;
        texto.style.fontSize = `${fontSize}px`;
    });
    
    disminuirBtn.addEventListener('click', function() {
        if (fontSize > 10) {
            fontSize -= 2;
            texto.style.fontSize = `${fontSize}px`;
        }
    });
    
    
});