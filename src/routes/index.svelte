<script>
	import Intro from '../Components/Intro.svelte';
	import Splash from '../Components/Splash.svelte';
</script>

<div class="container">
	<Splash />
	<Intro />
</div>

<style>
	.container {
		margin-top: var(--nav-height);
		flex: 1;
		height: 100%;
		width: 100%;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
	}
</style>
