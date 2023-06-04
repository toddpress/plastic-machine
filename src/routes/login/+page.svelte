<script type="ts">
	import { applyAction, enhance } from '$app/forms';
	import LoadingButton from '$components/LoadingButton.svelte';
  import { pb } from '$lib/pocketbase';
	let loading = false;
</script>

<form method="post" class="card sm:max-w-sm sm:w-full sm:mx-auto" use:enhance={() => {
	loading = true;
  return async ({ result }) => {
		loading = false;
    pb.authStore.loadFromCookie(document.cookie);
    await applyAction(result);
  }
}}>
	<h1 class="text-2xl mb-4">Register</h1>
	<div class="form-control gap-2 mb-4">
		<input class="input input-bordered" type="text" name="email" placeholder="Email" />
		<input class="input input-bordered" type="password" name="password" placeholder="Password" />
	</div>
	<LoadingButton {loading}>Submit</LoadingButton>
</form>
