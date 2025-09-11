// const movie = {
//   title: "Phim Hàn Quốc mới",
//   movies_elemen: 'Xem toàn bộ',

//   movies: [
//     {
//       src: "./img/thosandaoma.webp",
//       alt: "Movie Thợ săn dao mổ",
//       name: "Thợ săn dao mổ",
//       sub: "Huter with a Scalpel",
//     },
//     {
//       src: "./img/ngoinhanuahoang.webp",
//       alt: "Movie Ngôi nhà nữ hoàng",
//       name: "Ngôi nhà nữ hoàng",
//       sub: "Queen's House",
//     },
//     {
//       src: "./img/nguoiphunu.webp",
//       alt: "Movie Người phụ nữ nuốt chửng mặt trời",
//       name: "Người phụ nữ nuốt chửng mặt trời",
//       sub: "KPop Demon Hunters",
//     },
//   ],
// };
// const btnMovies = document.getElementsByClassName("btn-movie");
// btnMovies[0].addEventListener("click", function () {
//   const newDiv = document.getElementById("wrapper-categpries");

//   //title
//   const sectionMovies = document.createElement("section");
//   sectionMovies.classList.add("categories");

//   const divMovies = document.createElement("div");
//   divMovies.classList.add("movie-welding");

//   const div_top_list = document.createElement("div");
//   div_top_list.classList.add("top-title");

//   const list_h4 = document.createElement("h4");
//   list_h4.innerHTML = movie.title;
//   const list_p = document.createElement('p')
//   list_p.innerHTML = movie.movies_elemen;

//   div_top_list.appendChild(list_h4);
//   div_top_list.appendChild(list_p);
//   divMovies.appendChild(div_top_list);
//   sectionMovies.appendChild(divMovies);
//   newDiv.appendChild(sectionMovies);
//   //movies
//    const movieListElement = document.createElement("div");
//    movieListElement.classList.add("movie-container")
//    movie.movies.forEach((element) => {
//     const movieContainer = document.createElement("div");
//     movieContainer.classList.add("part-movie")
//     const divMovieImg = document.createElement("div");
//     divMovieImg.classList.add("cover-movie")
//     const movie_img = document.createElement('img');
//     movie_img.classList.add("movie-new-img")
//     movie_img.src = element.src;
//     movie_img.alt = element.alt;

//     divMovieImg.appendChild(movie_img);
//     movieContainer.appendChild(divMovieImg);
//     divMovies.appendChild(movieListElement)
//    });
// });

const movie = {
  title: "Phim Hàn Quốc mới",
  movies_elemen: "Xem toàn bộ",

  movies: [
    {
      src: "./img/thosandaoma.webp",
      alt: "Movie Thợ săn dao mổ",
      name: "Thợ săn dao mổ",
      sub: "Huter with a Scalpel",
    },
    {
      src: "./img/ngoinhanuahoang.webp",
      alt: "Movie Ngôi nhà nữ hoàng",
      name: "Ngôi nhà nữ hoàng",
      sub: "Queen's House",
    },
    {
      src: "./img/nguoiphunu.webp",
      alt: "Movie Người phụ nữ nuốt chửng mặt trời",
      name: "Người phụ nữ nuốt chửng mặt trời",
      sub: "KPop Demon Hunters",
    },
  ],
};

const btnMovies = document.getElementsByClassName("btn-movie");

btnMovies[0].addEventListener("click", function () {
  const newDiv = document.getElementById("wrapper-categpries");

  const sectionMovies = document.createElement("section");
  sectionMovies.classList.add("categories");

  const divMovies = document.createElement("div");
  divMovies.classList.add("movie-welding");

  const div_top_list = document.createElement("div");
  div_top_list.classList.add("top-title");

  const list_h4 = document.createElement("h4");
  list_h4.innerHTML = movie.title;

  const list_p = document.createElement("p");
  list_p.innerHTML = movie.movies_elemen;

  div_top_list.appendChild(list_h4);
  div_top_list.appendChild(list_p);
  divMovies.appendChild(div_top_list);

  const movieListElement = document.createElement("div");
  movieListElement.classList.add("movie-container");

  movie.movies.forEach((element) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("part-movie");

    const divMovieImg = document.createElement("div");
    divMovieImg.classList.add("cover-movie");

    const movie_img = document.createElement("img");
    movie_img.classList.add("movie-new-img");
    movie_img.src = element.src;
    movie_img.alt = element.alt;

    divMovieImg.appendChild(movie_img);
    movieContainer.appendChild(divMovieImg);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name-movie");

    const nameTitle = document.createElement("h4");
    nameTitle.innerText = element.name;

    const subTitle = document.createElement("p");
    subTitle.innerText = element.sub;

    nameDiv.appendChild(nameTitle);
    nameDiv.appendChild(subTitle);
    movieContainer.appendChild(nameDiv);

    movieListElement.appendChild(movieContainer);
  });

  divMovies.appendChild(movieListElement);
  sectionMovies.appendChild(divMovies);
  newDiv.appendChild(sectionMovies);
  btnMovies.appendChild(sectionMovies)
});
