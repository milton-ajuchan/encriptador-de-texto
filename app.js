document.getElementById('input-text').addEventListener('input', function() {
  document.getElementById('imagen-2').style.display = 'none';
  document.querySelector('.texto-encriptados').style.display = 'none';
});

document.getElementById('encriptar').addEventListener('click', function() {
  const inputText = document.getElementById('input-text').value;
  const encryptedText = encriptar(inputText);
  mostrarResultado(encryptedText);
});

document.getElementById('desencriptar').addEventListener('click', function() {
  const inputText = document.getElementById('input-text').value;
  const decryptedText = desencriptar(inputText);
  mostrarResultado(decryptedText);
});

function encriptar(texto) {
  const reemplazos = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  return texto.replace(/[eioua]/g, letra => reemplazos[letra]);
}

function desencriptar(texto) {
  const reemplazos = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };
  return texto.replace(/enter|imes|ai|ober|ufat/g, palabra => reemplazos[palabra]);
}

function mostrarResultado(texto) {
  const divEncriptados = document.querySelector('.div-encriptados');
  const textoEncriptados = document.createElement('p');
  textoEncriptados.textContent = texto;
  divEncriptados.innerHTML = '';
  divEncriptados.appendChild(textoEncriptados);
  divEncriptados.style.display = 'block';
}
