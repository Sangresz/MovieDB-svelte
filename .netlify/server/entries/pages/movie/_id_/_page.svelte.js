import { c as create_ssr_component, b as add_attribute, e as escape, f as each } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-c9kagm{padding:1rem 0rem 2rem;font-size:larger;font-weight:bold}p.svelte-c9kagm{padding:1rem 0rem}.img-container.svelte-c9kagm{width:100%}img.svelte-c9kagm{width:100%;border-radius:1rem}.movie-details.svelte-c9kagm{margin:2rem 20%}.text-container.svelte-c9kagm{margin-bottom:1em}span.svelte-c9kagm{font-weight:bold}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"movie-details svelte-c9kagm"}"><div class="${"img-container svelte-c9kagm"}">${data.img == null ? `<img src="${"/images/no-image.png"}"${add_attribute("alt", data.title, 0)} class="${"svelte-c9kagm"}">` : `<img src="${"https://image.tmdb.org/t/p/w500/" + escape(data.img, true)}"${add_attribute("alt", data.title, 0)} class="${"svelte-c9kagm"}">`}</div>
	<div class="${"text-container svelte-c9kagm"}"><h1 class="${"svelte-c9kagm"}">${escape(data.title)}</h1>
		<h3>${each(data.genres, ({ name }, index) => {
    return `${index == data.genres.length - 1 ? `${escape(name)}` : `${escape(name)},`}`;
  })}</h3>
		<br>
		<span class="${"svelte-c9kagm"}">Description : </span><br>${escape(data.overview)}<br>
		<p class="${"svelte-c9kagm"}"><span class="${"svelte-c9kagm"}">Release date:</span>
			${escape(data.date)} <br>
			<span class="${"svelte-c9kagm"}">Rating:</span>
			${escape(data.rating)} <br>
			<span class="${"svelte-c9kagm"}">Runtime:</span>
			${escape(data.mins)} mins <br>
			${data.link != "" ? `<span class="${"svelte-c9kagm"}"><a${add_attribute("href", data.link, 0)} target="${"_blank"}" rel="${"noreferrer"}">Link to the website</a></span>` : ``}</p></div>
</div>`;
});
export {
  Page as default
};
