import cipher from './cipher.js';

document.getElementById('cifrar').addEventListener('click', () => {
  const mensaje = document.getElementById('mensaje').value;
  const clave = parseInt(document.getElementById('key').value);
  document.getElementById('text').value = cipher.encode(clave, mensaje);
    
});
    
document.getElementById('descifrar').addEventListener('click', () => {
  const mensaje = document.getElementById('mensaje').value;
  const clave = parseInt(document.getElementById('key').value);
  document.getElementById('text').value = cipher.decode(clave, mensaje);

});