let dobro = numeros.map(function(num) {
  return num * 2;
});
let metade = numeros.map(num => num/2);
let raiz = numeros.map(function(num) {
  return Math.sqrt(num);
});


console.log(dobro, metade, raiz);
