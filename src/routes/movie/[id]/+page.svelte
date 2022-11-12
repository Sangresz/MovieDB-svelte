<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="movie-details">
	<div class="img-container">
		{#if data.img == null}
    <img src="/images/no-image.png" alt="{data.title}">
    {:else}
      <img src="https://image.tmdb.org/t/p/w500/{data.img}" alt="{data.title}">
    {/if}
	</div>
	<div class="text-container">
		<h1>{data.title}</h1>
		<h3>
			{#each data.genres as { name }, index}
				{#if index == data.genres.length - 1}
					{name}
				{:else}
					{name},
				{/if}
			{/each}
		</h3>
		<br />
		<span>Description : </span><br />{data.overview}<br />
		<p>
			<span>Release date:</span>
			{data.date} <br />
			<span>Rating:</span>
			{data.rating} <br />
			<span>Runtime:</span>
			{data.mins} mins <br />
			{#if data.link != ""}
				<span><a href={data.link} target="_blank" rel="noreferrer">Link to the website</a></span>
			{/if}
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
		font-size: larger;
		font-weight: bold;
	}
	p {
		padding: 1rem 0rem;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	.text-container {
		margin-bottom: 1em;
	}
	span {
		font-weight: bold;
	}
</style>
