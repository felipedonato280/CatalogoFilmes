class Ator {
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Diretor {
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Filme {
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao,){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = null;
    }

getCard = async () => {
    let card = document.createElement("div");
    card.setAttribute("class", "card , cardd");
    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class", "card-img-topz");
    imgCartaz.setAttribute("src", this.cartaz);
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body , cardd-body");
    let hCardTitle = document.createElement("h5");
    hCardTitle.setAttribute("class", "card-title , cardd-title");
    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("style","display:flex; justify-content:space-around;");
    // let divGenero = document.createElement("div");
    // divGenero.setAttribute("style", "flex-grow:1;");
    let divAnoProducao = document.createElement("div");
    divAnoProducao.setAttribute("class", "p-ano-producao");
    divAnoProducao.setAttribute("style", "flex-grow:1;");
    // let divClassificacao = document.createElement("div");
    // divClassificacao.setAttribute("style", "flex-grow:1;");
    hCardTitle.appendChild(document.createTextNode(this.titulo));
    // divGenero.appendChild(document.createTextNode(this.genero));
    divAnoProducao.appendChild(document.createTextNode(this.ano));
    // divClassificacao.appendChild(document.createTextNode(this.classificacao));
    // divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divAnoProducao);
    // divDetalhes.appendChild(divClassificacao);
    card.appendChild(imgCartaz);
    card.appendChild(cardBody);
    cardBody.appendChild(hCardTitle);
    cardBody.appendChild(divDetalhes);

    this.setBtnDetalhes();
    cardBody.appendChild(this.getBtnDetalhes());

    return card;
    
}
    setBtnDetalhes = () =>{
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btn btn-primary");
    }

    getBtnDetalhes = () =>{
        return this.btnDetalhes;
    }

    getDetalhesFilme = () =>{

        let detalhesFilme = document.createElement("div");
        detalhesFilme.setAttribute("class", "row g-0");
        // detalhesFilme.setAttribute("style", "display:flex; justify-content:space-around;");

        let divimgdetalhes = document.createElement("div");
        divimgdetalhes.setAttribute("class","col-md-4");

        let imgDetalhes = document.createElement("img");
        imgDetalhes.setAttribute("class", "img-fluid rounded-start");
        imgDetalhes.setAttribute("src", this.cartaz);

        let divbodydetalhes = document.createElement("div");
        divbodydetalhes.setAttribute("class","col-md-8");

        let bodydetalhes = document.createElement("div");
        bodydetalhes.setAttribute("class","card-body");

        let btnfechar = document.createElement("button");
        btnfechar.setAttribute("class","btn-close");
        btnfechar.setAttribute("id","btn-fechar");

        let btnsalvar = document.createElement("button");
        btnsalvar.setAttribute("class","bi bi-heart");
        btnsalvar.setAttribute("id","btn-salvar");

        let titledetalhes = document.createElement("h5");
        titledetalhes.setAttribute("class","card-title");
        titledetalhes.appendChild(document.createTextNode(this.titulo));

        let sinopsedetalhes = document.createElement("p");
        sinopsedetalhes.setAttribute("class","card-text");
        sinopsedetalhes.appendChild(document.createTextNode(this.sinopse));

        let generodetalhes = document.createElement("p");
        generodetalhes.setAttribute("class","card-text");
        generodetalhes.appendChild(document.createTextNode(this.genero));

        let classificacaodetalhes = document.createElement("p");
        classificacaodetalhes.setAttribute("class","card-text");
        classificacaodetalhes.appendChild(document.createTextNode(this.classificacao));

        let elencodetalhes = document.createElement("p");
        elencodetalhes.setAttribute("class","card-text");
        elencodetalhes.appendChild(document.createTextNode(this.elenco));

        let direcaodetalhes = document.createElement("p");
        direcaodetalhes.setAttribute("class","card-text");
        direcaodetalhes.appendChild(document.createTextNode(this.direcao));

        let anodetalhes = document.createElement("p");
        anodetalhes.setAttribute("class","card-text");
        anodetalhes.appendChild(document.createTextNode(this.ano));

        let curacaodetalhes = document.createElement("p");
        curacaodetalhes.setAttribute("class","card-text");
        curacaodetalhes.appendChild(document.createTextNode(this.duracao));

        let avaliacaodetalhes = document.createElement("p");
        avaliacaodetalhes.setAttribute("class","card-text");
        avaliacaodetalhes.appendChild(document.createTextNode(this.avaliacao));

        divimgdetalhes.appendChild(imgDetalhes);
        detalhesFilme.appendChild(divimgdetalhes);
        divbodydetalhes.appendChild(bodydetalhes);
        detalhesFilme.appendChild(divbodydetalhes);
        bodydetalhes.appendChild(btnfechar);
        bodydetalhes.appendChild(titledetalhes);
        bodydetalhes.appendChild(sinopsedetalhes);
        bodydetalhes.appendChild(generodetalhes);
        bodydetalhes.appendChild(classificacaodetalhes);
        bodydetalhes.appendChild(elencodetalhes);
        bodydetalhes.appendChild(direcaodetalhes);
        bodydetalhes.appendChild(anodetalhes);
        bodydetalhes.appendChild(curacaodetalhes);
        bodydetalhes.appendChild(avaliacaodetalhes);
        bodydetalhes.appendChild(btnsalvar);


        return detalhesFilme;
    }
}