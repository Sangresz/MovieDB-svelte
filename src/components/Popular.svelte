<script>
	import MovieGrid from "./MovieGrid.svelte";

  export let movies;
</script>

<MovieGrid title="Popular Films" movies={movies}/>