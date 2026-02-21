// Criando um array com 20 elementos (Materiais de Escritório)
let itensEscritorio = [
    'Caneta', 'Lápis', 'Borracha', 'Caderno', 'Régua', 
    'Grampeador', 'Clipes', 'Tesoura', 'Cola', 'Estojo',
    'Mochila', 'Agenda', 'Calculadora', 'Pasta', 'Papel A4',
    'Apontador', 'Corretivo', 'Marca-texto', 'Compasso', 'Esquadro'
];

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("Posição 0:", itensEscritorio[0]);
console.log("Posição 7:", itensEscritorio[7]);
console.log("Posição 11:", itensEscritorio[11]);
console.log("Posição 15:", itensEscritorio[15]);
console.log("Posição 18:", itensEscritorio[18]);
console.log("Posição 20:", itensEscritorio[20]); 

// B. Qual elemento está na penúltima e última posição?
console.log("Penúltima:", itensEscritorio[itensEscritorio.length - 2]);
console.log("Última:", itensEscritorio[itensEscritorio.length - 1]);

// C. Quantos elementos existem no array?
console.log("Total de elementos:", itensEscritorio.length);

// D. Adicione um novo elemento ao final do array.
itensEscritorio.push('Fita Adesiva');

// E. Imprima todos os elementos usando um for.
for (let i = 0; i < itensEscritorio.length; i++) {
    console.log(`Elemento ${i}: ${itensEscritorio[i]}`);
}

  
