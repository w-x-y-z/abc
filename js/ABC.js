// Verifica si el navegador es compatible con la Web Speech API
if ('webkitSpeechRecognition' in window) {
    // Crea un objeto reconocedor de voz
    var reconocedor = new webkitSpeechRecognition();

    // Establece el idioma en español
    reconocedor.lang = 'es-ES';

    // Establece el número máximo de alternativas de reconocimiento para el resultado
    reconocedor.maxAlternatives = 1;

    // Configura el evento de resultado del reconocimiento
    reconocedor.onresult = function (event) {
        // Obtiene el texto reconocido
        var texto = event.results[0][0].transcript;

        // Muestra el texto reconocido
        console.log(texto);
    };

    // Comienza el reconocimiento de voz en vivo
    reconocedor.start();
} else {
    console.log('El navegador no es compatible con la Web Speech API.');
}