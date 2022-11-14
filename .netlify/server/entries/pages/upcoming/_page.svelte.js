import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../../chunks/index.js";
import { M as MovieCard } from "../../../chunks/MovieCard.js";
/* empty css                                                       */const css = {
  code: ".popular-movies.svelte-1mkyha4{display:grid;grid-template-columns:auto auto auto auto;column-gap:1rem;row-gap:2rem}h2.svelte-1mkyha4{margin:1em}",
  map: null
};
const MovieGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movies } = $$props;
  let { title = "" } = $$props;
  if ($$props.movies === void 0 && $$bindings.movies && movies !== void 0)
    $$bindings.movies(movies);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<h2 class="${"svelte-1mkyha4"}">${escape(title)}</h2>
<div class="${"popular-movies svelte-1mkyha4"}">${each(movies, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let movies = data.ret;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${movies ? `${validate_component(MovieGrid, "MovieGrid").$$render($$result, { title: "Upcoming films", movies }, {}, {})}` : `<h3>Loading upcoming films</h3>`}`;
});
export {
  Page as default
};
