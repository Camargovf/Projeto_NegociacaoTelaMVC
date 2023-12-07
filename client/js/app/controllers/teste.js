class Aluno {
  constructor(matricula, nome) {
    this.matricula = matricula;
    this.nome = nome;
  }
}

class Prova {
  constructor(aluno, nota) {
    this.aluno = aluno;
    this.nota = nota;
  }
}

let avaliacoes = [
  new Prova(new Aluno(1, "Luana"), 8),
  new Prova(new Aluno(2, "Cássio"), 7),
  new Prova(new Aluno(3, "Barney"), 9),
  new Prova(new Aluno(4, "Bira"), 5),
];

let aprovados = avaliacoes
  .filter((prova) => prova.nota >= 7)
  .map((prova) => prova.aluno.nome);

console.log(aprovados);

/* function fibonacciRecursivo(n) {
    if (n < 2){
      return n;
    } else {
      return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
    }
  }
  

  function fibonacciIterativo(n){
    let a = 0, b = 1, temp;
  
    while (n > 0){
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }
  
    return a;
  }
   */
