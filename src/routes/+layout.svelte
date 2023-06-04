<script type="ts">
	import '../app.postcss';
	import { pb, user } from '$lib/pocketbase';
	import { applyAction, enhance } from '$app/forms';
	let loading = false;
</script>

<div class="wrapper p-8">
	<div class="navbar bg-base-300 shadow-md rounded-box">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl">Plastic Machine</a>
		</div>
		<div class="navbar-end">
			<ul class="flex-row" class:menu={!$user}>
				{#if $user}
					<li>
						<form
							method="POST"
							action="/logout"
							use:enhance={() => {
								loading = true;
								return async ({ result }) => {
									loading = false;
									pb.authStore.clear();
									await applyAction(result);
								};
							}}
						>
							<button class="btn btn-ghost" type="submit" disabled={loading}>Logout</button>
						</form>
					</li>
				{:else}
					<li><a href="/login">Login</a></li>
					<li><a href="/register">Sign up</a></li>
				{/if}
			</ul>
		</div>
	</div>
	<main class="px-2 py-4">
		<slot />
	</main>
</div>
