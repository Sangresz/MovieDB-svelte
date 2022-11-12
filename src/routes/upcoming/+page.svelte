<script>
	import MovieGrid from '../../components/MovieGrid.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    let movies = data.ret;
</script>

{#if movies}
    <MovieGrid title="Upcoming films" movies={movies}/>
{:else}
    <h3>Loading upcoming films</h3>
{/if}