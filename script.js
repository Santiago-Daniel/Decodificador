document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');
    const copyButton = document.getElementById('copyButton');

    encryptButton.addEventListener('click', function() {
        const text = inputText.value.toLowerCase();
        const encryptedText = encrypt(text);
        outputText.value = encryptedText;
    });

    decryptButton.addEventListener('click', function() {
        const encryptedText = inputText.value.toLowerCase();
        const decryptedText = decrypt(encryptedText);
        outputText.value = decryptedText;
    });

    copyButton.addEventListener('click', function() {
        outputText.select();
        document.execCommand('copy');
    });

    function encrypt(text) {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function decrypt(text) {
        return text
            .replace(/ufat/g, 'u')
            .replace(/ober/g, 'o')
            .replace(/ai/g, 'a')
            .replace(/imes/g, 'i')
            .replace(/enter/g, 'e');
    }
});
