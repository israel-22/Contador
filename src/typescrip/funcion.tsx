function calcularArea() {
    const ladoInput = document.getElementById('lado') as HTMLInputElement;
    const resultadoElement = document.getElementById('resultado');
  
    if (ladoInput && resultadoElement) {
      const lado = parseFloat(ladoInput.value);
  
      if (!isNaN(lado)) {
        const area = lado * lado;
        resultadoElement.innerText = `El área del cuadrado con lado ${lado} es ${area}.`;
      } else {
        resultadoElement.innerText = 'Por favor ingrese un número válido.';
      }
    }
  }



 

