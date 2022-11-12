<script>
  export let movie;
</script>

<div class="movie-card">
  <a href="/movie/{movie.id}">
    {#if movie.backdrop_path == null}
    <img src="/images/no-image.png" alt="{movie.title}">
    {:else}
      <img src="https://image.tmdb.org/t/p/w500/{movie.backdrop_path}" alt="{movie.title}">
    {/if}
  </a>

  <div class="description">
    <h2><a href="/movie/{movie.id}">{movie.title}</a></h2>
    <p>{movie.release_date}</p>
  </div>
</div>

<style>
  .movie-card {
    padding: 1rem;
    background-color: var(--third-color);
    min-height: 100%;
  }
  .description {
    height: min-content;
  }
  img {
    width: 100%;
    border-radius: 10px;
    height: 30vh;
    object-fit: cover;
  }
  h2 {
    font-size: 0.9rem;
  }
  a {
    text-decoration: none;
    color: var(--primary-color);
  }
</style>