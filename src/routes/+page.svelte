<script lang="ts">
import { UnitCarousel, LikeButton } from '$components';

	const units = [
		{
			id: `unit-1`,
			name: 'thing 1',
			image: 'https://loremflickr.com/320/240?random=1',
		},
		{
			id: `unit-2`,
			name: 'thing 2',
			image: 'https://loremflickr.com/320/240?random=2',
		},
		{
			id: `unit-3`,
			name: 'thing 3',
			image: 'https://loremflickr.com/320/240?random=3',
		},
		{
			id: `unit-4`,
			name: 'thing 4',
			image: 'https://loremflickr.com/320/240?random=4',
		},
		{
			id: `unit-6`,
			name: 'thing 6',
			image: 'https://loremflickr.com/320/240?random=6',
		},
		{
			id: `unit-7`,
			name: 'thing 7',
			image: 'https://loremflickr.com/320/240?random=7',
		},
		{
			id: `unit-8`,
			name: 'thing 8',
			image: 'https://loremflickr.com/320/240?random=8',
			interactive: true
		},
		{
			id: `unit-9`,
			name: 'thing 9',
			image: 'https://loremflickr.com/320/240?random=9',
			interactive: true
		}
	];
</script>

<UnitCarousel {units} title="Units" />
<LikeButton />

<!-- <Carousel things={things} /> -->

