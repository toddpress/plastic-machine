<div class="pm-gradient-bg">
  <slot />
</div>

<style>
	.pm-gradient-bg {
		position: relative;
	}
	.pm-gradient-bg::before {
		position: absolute;
		content: '';
		display: block;
		width: 50%;
		height: 100%;
		pointer-events: none;
		z-index: 100;
		background-image: linear-gradient(to right, transparent, rgb(42, 50, 60));
		right: 0;
	}
</style>
