<script lang="ts">
import { PUBLIC_DEBUG } from '$env/static/public';
import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
export let data: any;
</script>

{#if PUBLIC_DEBUG}
	<div class="mt-4">
		<SuperDebug data={data} />
	</div>
{/if}