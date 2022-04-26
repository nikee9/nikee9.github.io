<script>
	import Dots from './SVG/Dots.svelte';
	import { createPopperActions } from 'svelte-popperjs';
	import { clickOutside } from '../../Directives/clickOutside';
	import Toggle from './Toggle.svelte';
	const [popperRef, popperContent] = createPopperActions({
		placement: 'bottom',
		strategy: 'fixed'
	});
	const extraOpts = {
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
	};

	let showTooltip = false;

	function handleClickOutside(event) {
        showTooltip = false;
	}
</script>

<button id="expand-button" use:popperRef on:click={() => (showTooltip = !showTooltip)}>
	<Dots/>
</button>
{#if showTooltip}
	<div
		id="tooltip"
		use:popperContent={extraOpts}
		use:clickOutside
		on:click_outside={handleClickOutside}
	>
		<a href>Projects</a>
		<a href>Archive</a>
		<a href>About</a>
		<span class="separator" />
		<Toggle />
		<div id="arrow" data-popper-arrow />
	</div>
{/if}

<style>
	#expand-button {
		display: flex;
		align-items: center;
		border: none;
		background: transparent;
	}

	#tooltip {
		padding: 0.5rem;
		width: fit-content;
		height: fit-content;
		border-radius: 8px;
		background-color: black;
		color: white;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	#tooltip a {
		color: white;
		text-decoration: none;
		padding: 0.2rem;
	}

	#tooltip .separator {
		height: 1px;
		width: 100%;
		background-color: white;
		margin: 1rem;
	}
</style>
