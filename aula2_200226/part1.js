//vitor bispo borges
//RA: 825242612
// part1.js
// Criando o array com 20 carros (10 Porsches e 10 McLarens da nossa lista)
let carrosSuperCaros = [
  'Porsche 911 GT1 Strassenversion', 'Porsche 918 Spyder', 'Porsche Carrera GT',
  'Porsche 959', 'Porsche 911 GT2 RS', 'Porsche 935', 'Porsche 911 S/T',
  'Porsche 911 GT3 RS', 'Porsche 911 R', 'Porsche 911 Sport Classic',
  'McLaren F1', 'McLaren P1', 'McLaren W1', 'McLaren Speedtail',
  'McLaren Senna', 'McLaren Solus GT', 'McLaren Elva', 'McLaren Sabre',
  'McLaren Senna GTR', 'McLaren 765LT'
];

console.log("--- Respostas da Parte 1 ---");

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
// Detalhe: como o array tem 20 itens (vai do índice 0 ao 19), a posição 20 vai dar undefined no começo!
console.log("A) Posição 0:", carrosSuperCaros[0]);
console.log("A) Posição 7:", carrosSuperCaros[7]);
console.log("A) Posição 11:", carrosSuperCaros[11]);
console.log("A) Posição 15:", carrosSuperCaros[15]);
console.log("A) Posição 18:", carrosSuperCaros[18]);
console.log("A) Posição 20:", carrosSuperCaros[20]); 

// B. Qual elemento está na penúltima e última posição?
// Usando o length pra não ter que contar na mão rs
console.log("B) Penúltima posição:", carrosSuperCaros[carrosSuperCaros.length - 2]);
console.log("B) Última posição:", carrosSuperCaros[carrosSuperCaros.length - 1]);

// C. Quantos elementos existem no array?
console.log("C) Total de elementos:", carrosSuperCaros.length);

// D. Adicione um novo elemento ao final do array.
carrosSuperCaros.push('Ferrari LaFerrari'); // Coloquei uma intrusa aqui kkk
console.log("D) Novo elemento adicionado! Novo tamanho:", carrosSuperCaros.length);

// E. Imprima todos os elementos usando um for.
console.log("E) Imprimindo todos os elementos com FOR:");
for (let i = 0; i < carrosSuperCaros.length; i++) {
  console.log(`${i}: ${carrosSuperCaros[i]}`);
}

// Cauê Lemos de Carvalho
// RA: 825148851
// part1.js
// Criando um array com 20 elementos (Times de Futebol)
let timesdefutebol = [
    'Corinthians', 'Santos', 'São Paulo', 'Palmeiras', 'Flamengo', 
    'Vasco', 'Botafogo', 'Fluminense', 'Internacional', 'Grêmio',
    'Bahia', 'Ceará', 'Fortaleza', 'Mirassol', 'Goiás',
    'Remo', 'Cruzeiro', 'Atlético Mineiro', 'Vitória', 'Red Bull'
];

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("Posição 0:", timesdefutebol[0]);
console.log("Posição 7:", timesdefutebol[7]);
console.log("Posição 11:", timesdefutebol[11]);
console.log("Posição 15:", timesdefutebol[15]);
console.log("Posição 18:", timesdefutebol[18]);
console.log("Posição 20:", timesdefutebol[20]); 

// B. Qual elemento está na penúltima e última posição?
console.log("Penúltima:", timesdefutebol[timesdefutebol.length - 2]);
console.log("Última:", timesdefutebol[timesdefutebol.length - 1]);

// C. Quantos elementos existem no array?
console.log("Total de elementos:", timesdefutebol.length);

// D. Adicione um novo elemento ao final do array.
timesdefutebol.push('Curitiba');

// E. Imprima todos os elementos usando um for.
for (let i = 0; i < timesdefutebol.length; i++) {
    console.log(`Elemento ${i}: ${timesdefutebol[i]}`);
}

  


