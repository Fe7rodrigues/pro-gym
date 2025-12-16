/**
 * Pro Gym App - Timer Worker
 * Executa a contagem em thread separada para evitar throttling do navegador.
 */

let intervalId = null;
let timeLeft = 0;

self.onmessage = function(e) {
    const { command, value } = e.data;

    switch (command) {
        case 'START':
            // Se já houver um timer, limpa antes de iniciar um novo
            if (intervalId) clearInterval(intervalId);
            
            timeLeft = value;
            
            // Intervalo preciso de 1s
            intervalId = setInterval(() => {
                timeLeft--;
                
                if (timeLeft <= 0) {
                    clearInterval(intervalId);
                    intervalId = null;
                    self.postMessage({ status: 'COMPLETE' });
                } else {
                    self.postMessage({ status: 'TICK', timeLeft: timeLeft });
                }
            }, 1000);
            break;

        case 'PAUSE':
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
            break;

        case 'ADD':
            timeLeft += value;
            self.postMessage({ status: 'TICK', timeLeft: timeLeft });
            break;

        case 'RESET':
            if (intervalId) clearInterval(intervalId);
            timeLeft = value;
            self.postMessage({ status: 'TICK', timeLeft: timeLeft });
            // Reinicia imediatamente
            intervalId = setInterval(() => {
                timeLeft--;
                if (timeLeft <= 0) {
                    clearInterval(intervalId);
                    self.postMessage({ status: 'COMPLETE' });
                } else {
                    self.postMessage({ status: 'TICK', timeLeft: timeLeft });
                }
            }, 1000);
            break;
            
        case 'STOP':
            if (intervalId) clearInterval(intervalId);
            intervalId = null;
            timeLeft = 0;
            break;
    }
};