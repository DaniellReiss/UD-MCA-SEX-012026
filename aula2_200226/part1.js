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

//Thiago Viana Meira
//RA: 8224566
// part1.js
// Criando o array com 20 insetos
let especies = [
  'Louva-a-deus', 'Barata', 'Percevejo',
  'Libélula', 'Joaninha', 'Lagarta', 'Mariposa',
  'Formiga', 'Formiga de Fogo', 'Abelha',
  'Mosca', 'Borboleta', 'Besouro', 'Gafanhoto',
  'Grilo', 'Bicho-pau', 'Vespa', 'Cigarra',
  'Pulga', 'Cupim'
];

console.log("Parte 1");

// Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("A) Posição 0:", especies[0]);
console.log("A) Posição 7:", especies[7]);
console.log("A) Posição 11:", especies[11]);
console.log("A) Posição 15:", especies[15]);
console.log("A) Posição 18:", especies[18]);
console.log("A) Posição 20:", especies[20]); 

// Qual elemento está na penúltima e última posição?
console.log("B) Penúltima posição:", especies[especies.length - 2]);
console.log("B) Última posição:", especies[especies.length - 1]);

// Quantos elementos existem no array?
console.log("C) Elementos Totais:", especies.length);

// Adicione um novo elemento ao final do array.
especies.push('Aranha Armadeira');
console.log("D) Elemento adicionado, novo tamanho:", especies.length);

// Imprima todos os elementos usando um for.
console.log("E) Imprimindo");
for (let i = 0; i < especies.length; i++) {
  console.log(`${i}: ${especies[i]}`);
}

//Igor Euripedes Garcia de Oliveira
//RA: 824117373
// part1.js
// Criando o array com 20 jogos (10 RPGs e 10 FPS)
let jogosFamosos = [
  // RPG
  'The Witcher 3: Wild Hunt',
  'Elden Ring',
  'Skyrim',
  'Final Fantasy VII Remake',
  'Cyberpunk 2077',
  'Dragon Age: Inquisition',
  'Persona 5 Royal',
  'Baldur’s Gate 3',
  'Monster Hunter: World',
  'Diablo IV',

  // FPS
  'Call of Duty: Modern Warfare',
  'Battlefield 2042',
  'Counter-Strike 2',
  'Valorant',
  'DOOM Eternal',
  'Halo Infinite',
  'Overwatch 2',
  'Rainbow Six Siege',
  'Apex Legends',
  'Far Cry 6'
];

console.log("--- Respostas da Parte 1 ---");

// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
// Lembrando que o array vai do índice 0 ao 19 (posição 20 será undefined inicialmente)
console.log("A) Posição 0:", jogosFamosos[0]);
console.log("A) Posição 7:", jogosFamosos[7]);
console.log("A) Posição 11:", jogosFamosos[11]);
console.log("A) Posição 15:", jogosFamosos[15]);
console.log("A) Posição 18:", jogosFamosos[18]);
console.log("A) Posição 20:", jogosFamosos[20]); 

// B. Qual elemento está na penúltima e última posição?
console.log("B) Penúltima posição:", jogosFamosos[jogosFamosos.length - 2]);
console.log("B) Última posição:", jogosFamosos[jogosFamosos.length - 1]);

// C. Quantos elementos existem no array?
console.log("C) Total de elementos:", jogosFamosos.length);

// D. Adicione um novo elemento ao final do array.
jogosFamosos.push('Red Dead Redemption 2'); 
console.log("D) Novo jogo adicionado! Novo tamanho:", jogosFamosos.length);

// E. Imprima todos os elementos usando um for.
console.log("E) Imprimindo todos os elementos com FOR:");
for (let i = 0; i < jogosFamosos.length; i++) {

  // Identificando o gênero com base na posição
  let genero = i < 10 ? "RPG 🎮" : "FPS 🔫";

  console.log(`${i}: ${jogosFamosos[i]} - Gênero: ${genero}`);
}
