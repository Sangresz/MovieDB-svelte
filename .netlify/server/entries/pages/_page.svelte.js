import { c as create_ssr_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".home.svelte-1vk7b5m.svelte-1vk7b5m{display:flex;margin-top:2em;justify-content:space-between;align-items:center}h3.item.svelte-1vk7b5m.svelte-1vk7b5m{font-size:45px;margin-right:2em}div.item.svelte-1vk7b5m img.svelte-1vk7b5m{margin-left:2em;border-radius:1em}span.svelte-1vk7b5m.svelte-1vk7b5m{color:#02D46F}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"home svelte-1vk7b5m"}"><h3 class="${"item svelte-1vk7b5m"}">Movie database App done by <span class="${"svelte-1vk7b5m"}">Corrado Cionini</span> using <span class="${"svelte-1vk7b5m"}">tmdb</span> api</h3>
  <div class="${"item svelte-1vk7b5m"}"><img src="${"/images/tmdb.png"}" alt="${"tmdb logo"}" class="${"svelte-1vk7b5m"}"></div>
</div>`;
});
export {
  Page as default
};
