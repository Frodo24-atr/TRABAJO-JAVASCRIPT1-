///E1
function numeroparimpar(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es un número par.");
    } else {
      console.log(numero + " es un número impar.");
    }
  }
  
  numeroparimpar(2);
  numeroparimpar(5);
  numeroparimpar(0);
  numeroparimpar(-2);


  
  ///E2
  function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
      console.log(numero1 + " es mayor que " + numero2);
    } else if (numero1 < numero2) {
      console.log(numero2 + " es mayor que " + numero1);
    } else {
      console.log("Ambos números son iguales.");
    }
  }
  
  compararNumeros(5, 10);
  compararNumeros(20, 5);
  compararNumeros(7, 7);


  
  ///E3
  function MultiploDeCinco(numero) {
    if (numero % 5 === 0) {
      console.log(numero + " es múltiplo de 5.");
    } else {
      console.log(numero + " no es múltiplo de 5.");
    }
  }
  
  MultiploDeCinco(10);
  MultiploDeCinco(7);
  MultiploDeCinco(25);


  
  ///E4
  function ImprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }
  
  ImprimirNumerosHasta(5);


  
  ///E5
  function REPETICIONES(palabra, repeticiones) {
    for (let i = 0; i < repeticiones; i++) {
      console.log(palabra);
    }
  }
  
  REPETICIONES("Hola", 3);


  
  ///E6
  function IMPRIMIRARRAYS(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  const miArrays = [1, 2, 3, "Hola"];
  IMPRIMIRARRAYS(miArrays);


  
  ///E7
  function ARRAYSINCINCO(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }
  
  const miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ARRAYSINCINCO(miArray);
  
  
  //E8
  function MULTIPLICACIONPORPARAMETRO(array, multiplicador) {
    for (let i = 0; i < array.length; i++) {
      const resultado = array[i] * multiplicador;
      console.log(resultado);
    }
  }
  
  const numeros = [1, 2, 3, 4, 5];
  MULTIPLICACIONPORPARAMETRO(numeros, 3);