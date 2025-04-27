document.addEventListener('DOMContentLoaded', function () {
    const urlInput = document.getElementById('meet-url');
    const extraerBtn = document.getElementById('extraer-btn');
    const codigoSesion = document.getElementById('codigo-sesion');

    extraerBtn.addEventListener('click', function () {
        const url = urlInput.value;
        const codigo = extraerCodigoMeet(url);

        codigoSesion.textContent = codigo;
    });

    function extraerCodigoMeet(url) {
        const regex = /([a-z]{3})-([a-z]{4})-([a-z]{3})$/;
        const match = url.match(regex);
        
        if (match) {
            // Eliminar guiones y unir las partes
            return match[1] + match[2] + match[3];
        }
        return null;
    }
});