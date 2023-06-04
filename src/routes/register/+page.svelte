<script type="ts">
	import { applyAction, enhance } from '$app/forms';
  import { pb } from '$lib/pocketbase';
	import LoadingButton from '$components/LoadingButton.svelte';

	let loading = false;
</script>

<form method="post" class="card sm:mx-auto sm:max-w-sm" use:enhance={() => {
	loading = true;
  return async ({ result }) => {
		loading = false;
    pb.authStore.loadFromCookie(document.cookie);
    await applyAction(result);
  }
}}>
	<h1 class="text-2xl mb-4">Register</h1>
	<fieldset class="form-control gap-2 mb-4">
		<input class="input input-bordered" type="email" name="email" placeholder="Email" />
		<input class="input input-bordered" type="password" name="password" placeholder="Password" />
		<input
			class="input input-bordered"
			type="password"
			name="passwordConfirm"
			placeholder="Confirm Password"
		/>
	</fieldset>
	<LoadingButton {loading}>Submit</LoadingButton>
</form>
