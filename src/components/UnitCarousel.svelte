<script lang="ts">
  import IntersectionObserver from "svelte-intersection-observer";
	import { Carousel, CarouselItem } from '$components/carousel';
	export let units: any[] = [];
	export let title: string = 'Units';

  let lastElement: HTMLElement;
  let intersecting: boolean = false;
</script>

<Carousel {title}>
	{#each units as unit, i (unit.id)}
		<CarouselItem id={`unit-preview_${unit.id}`}>
			<a href={`/unit/${unit.id}`}>
				<img src={`https://loremflickr.com/320/240?random=${i}`} alt="unit ${i + 1}" />
			</a>
		</CarouselItem>
	{/each}
	<svelte:fragment slot="nav">
		{#each units as unit, i (`unit-nav_${unit.id}`)}
			<a href={`#unit-preview_${unit.id}`} class="btn btn-xs">{i + 1}</a>
		{/each}
	</svelte:fragment>
</Carousel>
