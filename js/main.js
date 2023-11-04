const ABC = () => {
    // Verifica si el navegador es compatible con la Web Speech API
    if ('webkitSpeechRecognition' in window) {
        var reconocedor = new webkitSpeechRecognition();
        reconocedor.lang = 'es-ES';
        reconocedor.maxAlternatives = 1;
        reconocedor.continuous=true;
        reconocedor.interimResults=true;
        // Configura el evento de inicio del reconocimiento
        reconocedor.onstart = function() {
          console.log('Inicio del reconocimiento de voz');
        };
        
        // Configura el evento de finalización del reconocimiento
        reconocedor.onend = function() {
          console.log('Fin del reconocimiento de voz');
        };
        
        // Configura el evento de resultado del reconocimiento
        reconocedor.onresult = function(event) {
            var resultados = event.results;
            var texto = '';
            
            for (var i = event.resultIndex; i < resultados.length; i++) {
              if (resultados[i].isFinal) {
                // Resultado final
                texto += resultados[i][0].transcript;
              } else {
                // Resultado parcial o intermedio
                texto += resultados[i][0].transcript;
                
                // Detectar una pausa en el habla
                if (resultados[i][0].confidence === 0) {
                  console.log('¡Pausa detectada!');
                }
              }
            }
            
            console.log('Texto reconocido:', texto);
          };
          
        // Comienza el reconocimiento de voz en vivo
        reconocedor.start();
      } else {
        console.log('El navegador no es compatible con la Web Speech API.');
      }
}
