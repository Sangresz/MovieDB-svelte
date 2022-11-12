<script>
	import MovieCard from '../../../components/MovieCard.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    $: movies = data.ret;
</script>

{#if data}
    <div class="searched-movie">
        {#each movies as movie (movie.id)}
            <MovieCard {movie}/>
        {/each}
    </div>
{:else}
    <h3>Loading Movies</h3>
{/if}

<style>
    .searched-movie {
        margin-top: 1em;
        display: grid;
        grid-template-columns: auto auto auto auto;
        column-gap: 1rem;
        row-gap: 2rem;
    }
</style>