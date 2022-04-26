<script>
	import Toggle from './Elements/Toggle.svelte';
	import MediaQuery from 'svelte-media-query';
	import Dropdown from './Elements/Dropdown.svelte';
	import { onMount } from 'svelte';

	let isLoaded = false;
	onMount(() => {
		isLoaded = true;
	});
</script>

<header>
	<div class="bg" />
	<div class="h-container">
		<span id="name">Nikhil Gandhi</span>
		{#if isLoaded}
			<MediaQuery query="(max-width: 600px)" let:matches>
				{#if matches}
					<Dropdown />
				{:else}
					<span id="r">
						<a href>Projects</a>
						<a href>Archive</a>
						<a href>About</a>
						<Toggle />
					</span>
				{/if}
			</MediaQuery>
		{/if}
	</div>
</header>

<style>
	header {
		font-size: 14px;
		width: 100%;
		color: var(--f-color);
		height: var(--nav-height);
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		box-shadow: rgba(50, 50, 93, 0.04) 0px 6px 12px -2px, rgba(0, 0, 0, 0.04) 0px 3px 7px -3px;
		/*background-color: var(--b-color);*/
		position: fixed;
		z-index: 2;
		overflow: hidden;
	}

	#name {
		font-weight: 500;
		font-size: 16px;
	}

	#r {
		display: flex;
		align-items: center;
	}

	.h-container {
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		color: var(--f-color);
		text-decoration: none;
	}

	a:not(:last-child) {
		margin-right: 1rem;
	}

	@media only screen and (max-width: 600px) {
		.h-container {
			width: 90%;
		}
	}

	@media only screen and (max-width: 768px) {
		.h-container {
			width: 80%;
		}
	}
</style>
