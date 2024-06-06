const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDQzOWFmYTE5MGE4YjhjMmZmNGRmNjJiMTc2YWM1OCIsInN1YiI6IjY2NjEyZmU2ZmU5Mzg4Y2JmNjhkNzc0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CDJ7pMmoY1BRZodfoV2h6bRcBdJjpOXdn2ELV8Vo2rM'
    }
  };

const fetchMovies = async (pagina = 1) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${pagina}`, options);
  const data = await response.json();
  //console.log(data);
  const peliculas = data.results;
  const container = document.querySelector("#peliculasContainer")
  container.innerHTML = "";

  //console.log(container);

  peliculas.forEach(pelicula => {
    const div = document.createElement("div");
    div.classList.add("pelicula")
    const ancla = document.createElement("a");
    ancla.href = "./views/detalle.html";
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
    img.alt = pelicula.title;
    img.loading = "lazy";
    const titulo = document.createElement("div");
    titulo.classList.add("titulo")
    const h4 = document.createElement("h4");
    h4.textContent = pelicula.title;

    //agrego elementos al dom de abajo para arriba
    titulo.appendChild(h4);
    div.appendChild(img, titulo); //
    ancla.appendChild(div);
    const wrapper = document.createElement("div");
    wrapper.classList.add("peliculas"); //hacia falta otro contenedor para mantener estructura del html
    wrapper.appendChild(ancla);
    container.appendChild(wrapper);
  })

  container.setAttribute("pagina", pagina);
  

}

document.addEventListener('DOMContentLoaded', () => {
  fetchMovies();
})

document.querySelector("#paginaSiguiente").addEventListener('click', () => {
  let paginaActual = Number(document.querySelector("#peliculasContainer").getAttribute('pagina')); //hubo que agregar number porque sino lo tomaba como string y concatenaba los 1's
  fetchMovies(paginaActual+1);
});

document.querySelector("#paginaAnterior").addEventListener('click', () => {
  let paginaActual = Number(document.querySelector("#peliculasContainer").getAttribute('pagina'));
  if (paginaActual < 2 ) { 
    return;
  }
  fetchMovies(paginaActual-1);
});

