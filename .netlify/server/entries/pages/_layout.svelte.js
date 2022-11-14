import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const global = "";
const NavBar_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-y2xget.svelte-y2xget{width:100%;background-color:var(--third-color);padding-left:30px;padding-right:10px;display:flex;justify-content:space-between;align-items:center}.nav-links.svelte-y2xget.svelte-y2xget{list-style:none;display:flex}.nav-item.svelte-y2xget a.svelte-y2xget{display:inline-block;padding:10px 15px;text-decoration:none;color:var(--primary-color);font-size:large}.nav-item.svelte-y2xget.svelte-y2xget:hover{background-color:var(--primary-color)}.nav-item.svelte-y2xget:hover a.svelte-y2xget{color:black}.searchbar.svelte-y2xget.svelte-y2xget{display:flex;width:min-content;justify-content:end;margin:10px 20px;padding:5px 10px;align-items:center;border-radius:60px;background:rgba(255, 255, 255, 0.2)}.navbar.svelte-y2xget input[type='text'].svelte-y2xget{font-size:17px;background:transparent;flex:1;border:0;outline:none;color:var(--primary-color)}.svelte-y2xget.svelte-y2xget::placeholder{color:var(--primary-color)}.searchbar.svelte-y2xget button.svelte-y2xget{width:25px;border:0;border-radius:50%;height:25px;background-color:transparent;cursor:pointer}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputValue = "";
  $$result.css.add(css);
  return `<nav class="${"navbar svelte-y2xget"}"><ul class="${"nav-links svelte-y2xget"}"><li class="${"nav-item svelte-y2xget"}"><a href="${"/"}" class="${"svelte-y2xget"}">Home</a></li>
		<li class="${"nav-item svelte-y2xget"}"><a href="${"/popular/"}" class="${"svelte-y2xget"}">Popular</a></li>
		<li class="${"nav-item svelte-y2xget"}"><a href="${"/upcoming/"}" class="${"svelte-y2xget"}">Upcoming</a></li></ul>
	<form class="${"searchbar svelte-y2xget"}"><input type="${"text"}" placeholder="${"Search Movie"}" class="${"svelte-y2xget"}"${add_attribute("value", inputValue, 0)}>
		<button class="${"svelte-y2xget"}"><img src="${"/images/search.png"}" alt="${"Search"}" class="${"svelte-y2xget"}"></button></form>
</nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1o7m203_START -->${$$result.title = `<title>MovieDB</title>`, ""}<!-- HEAD_svelte-1o7m203_END -->`, ""}

${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
