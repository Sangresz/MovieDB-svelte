<script>
  export let movie;

  console.log(movie);
</script>

<div class="movie-card hvr-grow">
  <a href="/movie/{movie.id}">
    {#if movie.backdrop_path == null}
    <img src="/images/no-image.png" alt="{movie.title}">
    {:else}
      <img src="https://image.tmdb.org/t/p/w500/{movie.poster_path}" alt="{movie.title}">
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
    min-height: max-content;
    position: relative;
  }
  .description {
    position: absolute;
    bottom: 20px;
    left: 20px;
    height: min-content;
    text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  img {
    width: 100%;
    border-radius: 10px;
    height: 100%;
    object-fit: cover;
  }
  h2 {
    font-size: 0.9rem;
  }
  a {
    text-decoration: none;
    color: var(--primary-color);
  }
  /* Grow */
  .hvr-grow {
      display: inline-block;
      vertical-align: middle;
      transform: translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
      transition-duration: 0.3s;
      transition-property: transform;
  }

  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
      transform: scale(1.1);
  }
</style>