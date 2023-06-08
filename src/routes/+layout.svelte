<script type="ts">
	import '../app.postcss';
	import LogoutForm from '$components/LogoutForm.svelte';
	import { pb, user } from '$lib/pocketbase';
</script>

<div class="wrapper py-4 px-8">
	<div class="navbar bg-base-300 shadow-md rounded-box">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl">Plastic Machine</a>
		</div>
		<div class="navbar-end">
			<ul class="flex-row" class:menu={!$user}>
				{#if $user}
					<li>
						<LogoutForm method="POST" action="/logout" />
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
