/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=f9cb0ee77cfefb5cac858614cdc5ff86&language=en-US&page=1`);
	const data = await res.json();

	const ret = data.results;

	return { ret };
}
