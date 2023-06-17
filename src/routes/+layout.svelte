<script type="ts">
	import '../app.postcss';
	import LogoutForm from '$components/LogoutForm.svelte';
	import { pb, user } from '$lib/pocketbase';
</script>


<div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">

		<div class="navbar bg-primary text-primary-content shadow-lg">
			<div class="navbar-start">
				<div class="flex-none lg:hidden">
					<label for="my-drawer-3" class="btn btn-square btn-ghost">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
					</label>
				</div>
				<div class="flex-1 px-2 mx-2 text-xl">
					<a href="/">Plastic Machine</a>
				</div>
			</div>
			<div class="navbar-end">
				<div class="hidden lg:flex justify-end">
					<!-- <slot name="navbar-nav" /> -->
					<ul class="menu menu-horizontal">
						{#if $user}
							<li><a href="/profile">Profile</a></li>
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
		</div>
		<div class="wrapper py-4 px-8">
			<main class="px-2 py-4">
				<slot />
			</main>
		</div>
	</div>

	<div class="drawer-side lg:hidden">
    <label for="my-drawer-3" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 h-full bg-base-200">
      <!-- Sidebar content here -->
			<!-- <slot name="sidebar-nav" /> -->
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