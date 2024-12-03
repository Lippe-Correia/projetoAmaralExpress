function copyToClipboard(elementId) {
    // Seleciona o elemento pelo ID
    var textToCopy = document.getElementById(elementId).textContent;

    // Usa a API de clipboard para copiar o texto
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Exibe a mensagem de "Texto copiado!" ou "Número copiado!"
        var message;
        if (elementId === 'phone') {
            message = document.getElementById('phoneMessage');
        } else if (elementId === 'email') {
            message = document.getElementById('message');
        }

        message.style.display = 'inline';
        
        // Esconde a mensagem após 3 segundos
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}
