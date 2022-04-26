<div class="container">
	<div class="bg" />
	<span id="hi">Hello I'm</span>
	<span id="splash">Nikhil Gandhi</span>
	<span>Software Engineer | Web Developer</span>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--f-color);
		min-height: 75%;
		user-select: none;
		font-weight: 600;
		overflow: hidden;
	}

	#hi {
		font-size: 1.5em;
		font-weight: 600;
	}

	#splash {
		font-size: 4.5em;
		font-family: 'Blacksword';
		font-weight: 600;
		background: linear-gradient(to top, #2bdce2, #33abf1);
		-webkit-background-clip: text;
		color: transparent;
		padding: 1rem;
	}

	@media only screen and (max-width: 650px) {
		#splash {
			font-size: 3rem;
		}
	}


</style>
