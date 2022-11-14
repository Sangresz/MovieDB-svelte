<script>
	import MovieCard from "./MovieCard.svelte";

  export let movies;
  export let title = "";
</script>

<h2>{title}</h2>
<div class="popular-movies">
  {#each movies as movie}
    <MovieCard {movie}/>
  {/each}
</div>

<style>
  .popular-movies {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 1rem;
    row-gap: 2rem;
    margin-bottom: 1em;
  }
  h2 {
    margin: 1em;
  }
</style>