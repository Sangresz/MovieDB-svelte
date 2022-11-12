<script>
  import { fly, blur } from 'svelte/transition'
</script>

<div class="home">
  <h3 in:blur class="item">Movie database App done by <span>Corrado Cionini</span> using <span>tmdb</span> api</h3>
  <div in:fly class="item">
    <img src="/images/tmdb.png" alt="tmdb logo">
  </div>
</div>

<style>
  .home {
    display: flex;
    margin-top: 2em;
    justify-content: space-between;
    align-items: center;
  }
  h3.item{
    font-size: 45px;
    margin-right: 2em;
  }
  div.item img {
    margin-left: 2em;
    border-radius: 1em;
  }
  span {
    color:#02D46F;
  }
</style>