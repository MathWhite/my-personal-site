// Aguarda o Docsify terminar de carregar
window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (hook) {
    hook.ready(function () {
        // Função para alternar entre os temas
        function toggleTheme() {
            console.log("Called");
            const themeStyle = document.getElementById('theme-style');
            
            if (themeStyle.getAttribute('href') === '//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css') {
                themeStyle.setAttribute('href', '//cdn.jsdelivr.net/npm/docsify/lib/themes/dark.css');
            } else {
                themeStyle.setAttribute('href', '//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css');
                themeIcon.classList.remove('mdi-weather-sunny'); // Remove o ícone de sol
                themeIcon.classList.add('mdi-weather-night'); // Adiciona o ícone de lua
            }
        }

        // Adiciona o evento de clique ao botão
        const themeToggleButton = document.getElementById('theme-toggle');
        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', toggleTheme);
        } else {
            console.error('Botão de alternância de temas não encontrado!');
        }
    });
});