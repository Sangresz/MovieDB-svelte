import { c as create_ssr_component, e as escape, b as add_attribute } from "./index.js";
/* empty css                                         */const css = {
  code: ".movie-card.svelte-1pqpej4{padding:1rem;background-color:var(--third-color);min-height:100%}.description.svelte-1pqpej4{height:min-content}img.svelte-1pqpej4{width:100%;border-radius:10px;height:30vh;object-fit:cover}h2.svelte-1pqpej4{font-size:0.9rem}a.svelte-1pqpej4{text-decoration:none;color:var(--primary-color)}",
  map: null
};
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  return `<div class="${"movie-card svelte-1pqpej4"}"><a href="${"/movie/" + escape(movie.id, true)}" class="${"svelte-1pqpej4"}">${movie.backdrop_path == null ? `<img src="${"/images/no-image.png"}"${add_attribute("alt", movie.title, 0)} class="${"svelte-1pqpej4"}">` : `<img src="${"https://image.tmdb.org/t/p/w500/" + escape(movie.backdrop_path, true)}"${add_attribute("alt", movie.title, 0)} class="${"svelte-1pqpej4"}">`}</a>

  <div class="${"description svelte-1pqpej4"}"><h2 class="${"svelte-1pqpej4"}"><a href="${"/movie/" + escape(movie.id, true)}" class="${"svelte-1pqpej4"}">${escape(movie.title)}</a></h2>
    <p>${escape(movie.release_date)}</p></div>
</div>`;
});
export {
  MovieCard as M
};
