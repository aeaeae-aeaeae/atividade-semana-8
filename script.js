
// B.1 - DEFINIÇÃO DOS DADOS (JSON)

const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.0,
        assistido: true
    },
    {
        id: 2,
        titulo: "One Piece",
        tipo: "serie",
        ano: 1999,
        generos: ["aventura", "ação"],
        nota: 9.2,
        assistido: true
    },
    {
        id: 3,
        titulo: "Coraline",
        tipo: "filme",
        ano: 2009,
        generos: ["animação", "fantasia"],
        nota: 8.5,
        assistido: true
    },
    {
        id: 4,
        titulo: "The Last of Us",
        tipo: "serie",
        ano: 2023,
        generos: ["drama", "ficção científica"],
        nota: 8.8,
        assistido: false
    },
    {
        id: 5,
        titulo: "O Senhor dos Anéis",
        tipo: "filme",
        ano: 2001,
        generos: ["fantasia", "aventura"],
        nota: 9.5,
        assistido: false
    },
    {
        id: 6,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção científica", "terror"],
        nota: 8.7,
        assistido: false
    }
];

// B.2 - ACESSO E LEITURA DOS DADOS

console.log(catalogo);

console.log("Título do primeiro item:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

// B.3 A - ITERATOR FOREACH

console.log("----- TODOS OS TÍTULOS -----");

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B.3 B - ITERATOR MAP

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());

console.log("----- TÍTULOS EM CAIXA ALTA -----");
console.log(titulosEmCaixaAlta);

// B.3 C - ITERATOR FILTER

const naoAssistidos = catalogo.filter(item => item.assistido === false);

console.log("----- NÃO ASSISTIDOS -----");
console.log("Quantidade de itens não assistidos:", naoAssistidos.length);

// B.3 D - ITERATOR FIND

const notaAlta = catalogo.find(item => item.nota >= 9);

console.log("----- PRIMEIRA NOTA >= 9 -----");

if (notaAlta) {
    console.log("Título:", notaAlta.titulo);
    console.log("Nota:", notaAlta.nota);
} else {
    console.log("Nenhum item possui nota maior ou igual a 9.");
}

// B.3 E - ITERATOR REDUCE

const somaNotas = catalogo.reduce((total, item) => total + item.nota, 0);
const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido === true);

const somaNotasAssistidos = assistidos.reduce(
    (total, item) => total + item.nota,
    0
);

const mediaAssistidos = somaNotasAssistidos / assistidos.length;

console.log("----- MÉDIAS -----");
console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));

// B.3 F - ITERATORS SOME E EVERY

const existeAntesDe2000 = catalogo.some(item => item.ano < 2000);

const todosPossuemGenero = catalogo.every(
    item => item.generos.length >= 1
);

console.log("----- SOME E EVERY -----");
console.log("Existe item lançado antes de 2000?", existeAntesDe2000);
console.log("Todos possuem pelo menos um gênero?", todosPossuemGenero);

// B.4 - SAÍDA NA TELA (DOM)

const quantidadeFilmes = catalogo.filter(
    item => item.tipo === "filme"
).length;

const quantidadeSeries = catalogo.filter(
    item => item.tipo === "serie"
).length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Filmes:</strong> ${quantidadeFilmes}</p>

    <p><strong>Séries:</strong> ${quantidadeSeries}</p>

    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral das notas:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 maiores notas</h3>

    <ol>
        ${ranking.map(item => `
            <li>${item.titulo} - Nota: ${item.nota}</li>
        `).join("")}
    </ol>
`;