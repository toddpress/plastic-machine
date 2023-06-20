<script lang="ts">
  import IntersectionObserver from "svelte-intersection-observer";
	import { Carousel, CarouselItem } from '$components';
	export let units: any[] = [];
	export let title: string = 'Units';
  export let fade: boolean = true;

  let lastElement: HTMLImageElement;
  let intersecting: boolean = false;
</script>

<style>
  :root {
    --bg-neutral: rgb(42, 50, 60);
  }
  .carousel-gradient {
    position: absolute;
		display: block;
		width: 50%;
		height: 100%;
		pointer-events: none;
		z-index: 100;
		background-image: linear-gradient(to right, transparent, transparent, var(--bg-neutral));
		right: 0;
    position: absolute;
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
  }
  .carousel-gradient.intersecting {
    opacity: 0;
  }
</style>

<Carousel {title}>
	{#each units as unit, i (unit.id)}
    <CarouselItem id={`unit-preview_${unit.id}`} >
      <a href={`/unit/${unit.id}`}>
        {#if fade && i === units.length - 1}
          <IntersectionObserver element={lastElement} bind:intersecting>
            <img src={`https://loremflickr.com/g/320/240/3d-printed,plastic?foo={i}`} alt="unit ${i + 1}" bind:this={lastElement} />
          </IntersectionObserver>
        {:else}
          <img src={`https://loremflickr.com/g/320/240/3d-printed,plastic?foo=${i}`} alt="unit ${i + 1}" />
        {/if}
      </a>
    </CarouselItem>
	{/each}

  {#if fade}
    <div class="carousel-gradient" class:intersecting />
  {/if}

	<svelte:fragment slot="nav">
		{#each units as unit, i (`unit-nav_${unit.id}`)}
			<a href={`#unit-preview_${unit.id}`} class="btn btn-xs">{i + 1}</a>
		{/each}
	</svelte:fragment>

</Carousel>
