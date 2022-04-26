<script>
	import MainBar from '../Components/MainBar.svelte';

</script>

<svelte:head>
	<link rel="stylesheet" href="/global.css" />
	<title>Nikhil Gandhi</title>
</svelte:head>

<div>
	<MainBar />
	<slot />
</div>

<style>
	:global(body) {
		--nav-height: 60px;
		--f-color: #70697a;
		--b-color: white;
		--d-background: linear-gradient(0.33turn, #d0eee5, #cdd3dd, #b5d1d875, #989ea8);
		overflow: hidden;
	}
	:global(body.dark-mode) {
		--f-color: #c7c7c7;
		--b-color: #13141b;
		--d-background: linear-gradient(0.33turn, #1b1f20, #19191f, #111618b7, #19191a);
	}
	div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

</style>
