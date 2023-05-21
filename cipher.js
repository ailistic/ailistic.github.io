const cipher = {  
  encode: function(clave, mensaje) {
    let mensajeCifrado = '';	       
    for (let i = 0; i < mensaje.length; i++) {
      let charCode = mensaje.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // mayúsculas 
        charCode = ((charCode - 65 + clave) % 26) + 65; // aplicar el desplazamiento
      }
      mensajeCifrado += String.fromCharCode(charCode);
    }
    return mensajeCifrado;
  },

  decode: function(clave, mensajeCifrado) {
    let mensajeOriginal = '';
    for (let i = 0; i < mensajeCifrado.length; i++) {
      let charCode = mensajeCifrado.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // mayúsculas 
        charCode = ((charCode - 65 - clave + 26) % 26) + 65; // deshacer el desplazamiento
      }
      mensajeOriginal += String.fromCharCode(charCode);
    }
    return mensajeOriginal;

  }}
export default cipher