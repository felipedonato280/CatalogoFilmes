class Ator{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

// let ator = new Ator(1,"Neal");

// console.log(ator);

class Diretor{
    constructor(id, nome){
        this.id = id;
        this.nome = nome;
    }
}

class Filme{
    constructor(id, titulo, ano, genero, duração, sinopse, cartaz, direção, elenco, classificação, avaliação){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duração = duração;
        this.sinopse = sinopse;
        this.cartaz = cartaz;
        this.direção = direção;
        this.elenco = elenco;
        this.classificação = classificação;
        this.avaliação = avaliação;
    }
}

let filme = new Filme(
    1,
    "Matrix",
    1999,
    "Ação e Ficção",
    1.36,
    "sinopse",
    "https://pt.wikipedia.org/wiki/Ficheiro:The_Matrix_Poster.jpg",
    "direção",
    "elenco",
    14,
    8.8
);

console.log(filme);