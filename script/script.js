let inputBuscarFilme = document.querySelector("#input-buscar-filme")
let btnBuscarFilme = document.querySelector("#btn-buscar-filme")

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes =  new Array();
        fetch("http://www.omdbapi.com/?apikey=21779dab&s="+inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp)=> {
                resp.Search.forEach((item) => {
                    // console.log(item);
                    let filme=new Filme(
                        item.imdbID,
                        item.Title,
                        item.Year,
                        null,
                        null,
                        item.Poster,
                        null,
                        null,
                        null,
                        null,
                        null
                    );
                    filmes.push(filme);
                });
                listarFilmes(filmes);
        });
    }
    return false;
};

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.style.display="flex";
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filmes").innerHTML="";
    document.querySelector("#mostrar-filmes").style.display="none";
    // console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme) => {
            // console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
                document.querySelector("#mostrar-filmes").style.display="flex";
            }
        });
    }
}

let detalhesFilme = async (id) =>{
    fetch("http://www.omdbapi.com/?apikey=21779dab&i="+id)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        )
        document.querySelector("#mostrar-filmes").appendChild(filme.getDetalhesFilme());
        document.querySelector("#lista-filmes").style.display="none";
        document.querySelector("#mostrar-filmes").style.display="flex";

        document.querySelector("#btn-fechar").onclick = ()=>{
            document.querySelector("#lista-filmes").style.display="flex";
            document.querySelector("#mostrar-filmes").innerHTML="";
            document.querySelector("#mostrar-filmes").style.display="none";
        }
    });
}