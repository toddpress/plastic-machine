<script lang=ts>
	export let title: string = 'Units';
</script>
<div class="card p-4 space-x-4 bg-neutral rounded-box w-full">
	<h1 class="ml-4 mb-2 uppercase">{title}</h1>
	<div class="relative">
		<div class="carousel">
			<slot />
		</div>
	</div>
	<div class="flex justify-center w-full py-2 gap-2">
		<slot name="nav" />
	</div>
</div>
