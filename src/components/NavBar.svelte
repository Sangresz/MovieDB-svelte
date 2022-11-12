<script>
	import { goto } from '$app/navigation';

	let inputValue = '';

	function submit() {
		goto('/search/'+inputValue);
		inputValue = '';
	}
</script>

<nav class="navbar">
	<ul class="nav-links">
		<li class="nav-item"><a href="/">Home</a></li>
		<li class="nav-item"><a href="/popular/">Popular</a></li>
		<li class="nav-item"><a href="/upcoming/">Upcoming</a></li>
	</ul>
	<form class="searchbar" on:submit|preventDefault={submit}>
		<input bind:value={inputValue} type="text" placeholder="Search Movie" />
		<button><img src="/images/search.png" alt="Search" /></button>
	</form>
</nav>

<style>
	nav {
		width: 100%;
		background-color: var(--third-color);
		padding-left: 30px;
		padding-right: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nav-links {
		list-style: none;
		display: flex;
	}
	.nav-item a {
		display: inline-block;
		padding: 10px 15px;
		text-decoration: none;
		color: var(--primary-color);
		font-size: large;
	}

	.nav-item:hover {
		background-color: var(--primary-color);
	}

	.nav-item:hover a {
		color: black;
	}
	.searchbar {
		display: flex;
		width: min-content;
		justify-content: end;
		margin: 10px 20px;
		padding: 5px 10px;
		align-items: center;
		border-radius: 60px;
		background: rgba(255, 255, 255, 0.2);
	}

	.navbar input[type='text'] {
		font-size: 17px;
		background: transparent;
		flex: 1;
		border: 0;
		outline: none;
		color: var(--primary-color);
	}
	::placeholder {
		color: var(--primary-color);
	}
	.searchbar button {
		width: 25px;
		border: 0;
		border-radius: 50%;
		height: 25px;
		background-color: transparent;
		cursor: pointer;
	}
</style>
