import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=f9cb0ee77cfefb5cac858614cdc5ff86&language=en-US&query=${params.query}&include_adult=false`
  );
  
  const data = await res.json();

  let ret = data.results;
  
  if(res.ok) {
    return { ret }
  }
  else {
    throw error(404, 'Not found');
  }
}