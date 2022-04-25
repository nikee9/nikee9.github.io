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
	div {
        width: 100%;
        height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
