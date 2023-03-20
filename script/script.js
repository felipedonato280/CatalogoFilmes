let inputBuscarFilme = document.querySelector("#input-buscar-filme")
let btnBuscarFilme = document.querySelector("#btn-buscar-filme")

let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    // console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme) => {
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
        });
    }
}

let detalhesFilme = async (id) =>{
    fetch("http://www.omdbapi.com/?apikey=21779dab&i="+id)
    .then((resp) => resp.json())
    .then((resp) => {

        console.log(resp);
        let filme= new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        )

        console.log(filme);

    });
}

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes =  new Array();
        fetch("http://www.omdbapi.com/?apikey=21779dab&s="+inputBuscarFilme.value)
        .then((resp) => resp.json())
        .then((resp)=> {
                resp.Search.forEach((item) => {
                    console.log(item);
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