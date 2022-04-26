<script>
	import Moon from './SVG/Moon.svelte';
	import Sun from './SVG/Sun.svelte';
	import { theme } from '../../store';
	import { browser } from '$app/env';

	let dark = false;

	theme.subscribe((value) => {
		dark = value == 'dark'
		if (browser) {
			dark
				? window.document.body.classList.add('dark-mode')
				: window.document.body.classList.remove('dark-mode');
		}
	});

	function toggle() {
		dark = !dark;
		theme.set(dark ? 'dark' : 'light');
	}
</script>

<label class="switch">
	<input type="checkbox" checked={!dark} on:change={toggle} />
	<span class="slider round" />
	<Sun />
	<Moon />
</label>

<style>
	*:before,
	:global(:root) {
		--toggle-w: 54px;
		--toggle-h: 28px;
		--toggle-b: 2px;
		--toggle-m: 2px;
		--toggle-s-b: 2px;
		--toggle-s-m: 2px;
		--toggle-s-wh: calc(
			var(--toggle-h) - 2 * var(--toggle-b) - 2 * var(--toggle-s-b) - 2 * var(--toggle-s-m)
		);
		--toggle-s-travel: calc(
			var(--toggle-w) - 2 * var(--toggle-b) - 2 * var(--toggle-s-b) - var(--toggle-s-wh) - 2 *
				var(--toggle-m)
		);
	}

	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: inline-block;

		width: var(--toggle-w);
		height: var(--toggle-h);
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: transparent;
		border: 2px solid #ccc;
		border-width: var(--toggle-b);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: var(--toggle-s-wh);
		width: var(--toggle-s-wh);
		left: var(--toggle-m);
		bottom: var(--toggle-m);
		background-color: black;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border: 1px solid white;
		border-width: var(--toggle-s-b);
		z-index: 1;
	}

	input:checked + .slider {
		background-color: orange;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(var(--toggle-s-travel));
		-ms-transform: translateX(var(--toggle-s-travel));
		transform: translateX(var(--toggle-s-travel));
		background-color: orange;
		border-color: rgb(255, 255, 255);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: calc(var(--toggle-h) / 2);
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
