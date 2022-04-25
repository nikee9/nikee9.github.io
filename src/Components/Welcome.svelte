<script>
	let height = 100;

	setTimeout(() => {
		height = 0;
	}, 500);
</script>

<div style="height: {height}%; min-height: {height}%">
	<span>Hi 😃</span>
</div>

<style>
	div {
		overflow: hidden;
		transition: height 1s ease 0s, min-height 1s ease 0s;
		min-height: 100%;
		height: 100%;
		max-height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 5rem;
	}
</style>
