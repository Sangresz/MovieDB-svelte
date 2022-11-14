import { c as create_ssr_component, f as each, v as validate_component } from "../../../../chunks/index.js";
import { M as MovieCard } from "../../../../chunks/MovieCard.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".searched-movie.svelte-428z31{margin-top:1em;display:grid;grid-template-columns:auto auto auto auto;column-gap:1rem;row-gap:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let movies;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  movies = data.ret;
  return `${data ? `<div class="${"searched-movie svelte-428z31"}">${each(movies, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}</div>` : `<h3>Loading Movies</h3>`}`;
});
export {
  Page as default
};
