const magicBtn = document.getElementById("pickbtn");
const baseImageUrl = "https://image.tmdb.org/t/p/";

const apiKey = "53d0a239abb90614daae70f28305714e";
async function getRandomMovie() {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${
    Math.floor(Math.random() * 100) + 1
  }`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch data from TMDb");
    }

    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const randomMovie = data.results[randomIndex];

    // Display the chosen movie's details on your webpage
    console.log(randomMovie);
    // let choice = document.getElementById("choice");
    const movieTitle = document.getElementById("movieTitle");
    const synopsis = document.getElementById("synopsis");

    const moviePoster = document.getElementById("backdrop");
    const backdropSize = "w400"; // appropriate image size
    const backdropUrl = `${baseImageUrl}${backdropSize}${randomMovie.backdrop_path}`;

    moviePoster.src = backdropUrl;
    movieTitle.textContent = `${
      randomMovie.title
    } - ${randomMovie.release_date.slice(0, 4)}`;
    synopsis.textContent = randomMovie.overview;
  } catch (error) {
    console.error("Error:", error);
  }
}

magicBtn.addEventListener("click", getRandomMovie);
