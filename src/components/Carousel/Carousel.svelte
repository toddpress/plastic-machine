<script lang="ts">
	import GradientBackground from '$components/GradientBackground.svelte';
	export let title: string = 'Units';
</script>

<div class="card p-4 space-x-4 bg-neutral rounded-box w-full">
	<h1 class="ml-4 mb-2 uppercase">{title}</h1>
	<GradientBackground>
		<div class="carousel">
			<slot />
		</div>
	</GradientBackground>
	<div class="flex justify-center w-full py-2 gap-2">
		<slot name="nav" />
	</div>
</div>
