<script>
	import { onMount } from "svelte";
	import Popular from "../../components/Popular.svelte";

  let movies;

  onMount(async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f9cb0ee77cfefb5cac858614cdc5ff86&language=en-US&page=1`);
    
    const data = await res.json();
    
    if(res.ok){
      movies = data.results;
    }
  })
</script>

{#if movies}
  <Popular {movies}/>
{:else}
  <p>Loading movies ...</p>
{/if}