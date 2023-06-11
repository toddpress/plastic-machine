<script lang="ts">
import { Carousel } from '$components/carousel';

	const things = [
		{
			id: 1,
			name: 'thing 1',
			image: 'https://loremflickr.com/320/240?random=1',
		},
		{
			id: 2,
			name: 'thing 2',
			image: 'https://loremflickr.com/320/240?random=2',
		},
		{
			id: 3,
			name: 'thing 3',
			image: 'https://loremflickr.com/320/240?random=3',
		},
		{
			id: 4,
			name: 'thing 4',
			image: 'https://loremflickr.com/320/240?random=4',
		},
		{
			id: 6,
			name: 'thing 6',
			image: 'https://loremflickr.com/320/240?random=6',
		},
		{
			id: 7,
			name: 'thing 7',
			image: 'https://loremflickr.com/320/240?random=7',
			isPreview: true
		}
	];
</script>
<!-- TODO: -->
<!-- componentize carousel -->
<!-- 		-	slot for items and nav -->
<!-- 		- create ThingsCarousel.svelte -->
<!-- 		- create ThingPreviewCarousel.svelte -->

<!-- create profile -->
<!-- 	- file upload for avatar -->


<Carousel things={things} />

