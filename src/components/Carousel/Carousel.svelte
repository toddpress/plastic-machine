<script lang="ts">
  export let things: any[] = [];
  export let active: number = 0;
</script>

<div class="card p-4 space-x-4 bg-neutral rounded-box w-full">
	<h1 class="ml-4 mb-2 uppercase">Things</h1>
	<div class="carousel">
		{#each things as thing, i (thing.id)}
				<div class="carousel-item" id={`item_${thing.id}`}>
					{#if thing.isPreview}
							<img src={`https://loremflickr.com/320/240?random=${i}`} alt="thing ${i + 1}" />
					{:else}
							<img src={`https://loremflickr.com/320/240?random=${i}`} alt="go to thing ${i + 1}" />
					{/if}
				</div>
		{/each}
	</div>
	<div class="flex justify-center w-full py-2 gap-2">
		{#each things as thing, i (thing.id)}
			<a href={`#item_${thing.id}`} class="btn btn-xs">{i + 1}</a>
		{/each}
	</div>
</div>