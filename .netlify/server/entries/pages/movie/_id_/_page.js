import { e as error } from "../../../../chunks/index2.js";
async function load({ fetch, params }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=f9cb0ee77cfefb5cac858614cdc5ff86&language=en-US`);
  const data = await res.json();
  if (res.ok) {
    return {
      id: data.id,
      img: data.backdrop_path,
      title: data.title,
      genres: data.genres,
      date: data.release_date,
      overview: data.overview,
      link: data.homepage,
      rating: data.vote_average,
      mins: data.runtime
    };
  } else {
    throw error(404, "Not found");
  }
}
export {
  load
};
