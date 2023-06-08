<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
  import { pb } from '$lib/pocketbase';

	export let method: 'POST' | 'GET' | 'PUT' | 'DELETE' = 'POST';
	export let action: string = '/logout';
	// export let onEnhance: Function = async () => {};

  let loading: boolean = false;
</script>

<form
	{method}
	{action}
	use:enhance={() => {
		loading = true;
		return async (response) => {
			const { result } = response;
			pb.authStore.clear();
			await applyAction(result);
			loading = false;
		};
	}}
>
	<button class="btn btn-ghost" type="submit" disabled={loading}>
		Logout
	</button>
</form>
