<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { superForm } from 'sveltekit-superforms/client';
  import { pb } from '$lib/pocketbase';
	import type { PageData } from './$types';
	import LoadingButton from '$components/LoadingButton.svelte';
	import DebugForm from '$components/DebugForm.svelte';
	import Rating from '$components/Rating.svelte';
	let loading = false;

	export let data: PageData;
	const { form, errors } = superForm(data.form);

	let onRatingChanged = (e) => {
		$form.rating = e.detail.value;
	}
</script>



<div class="card w-96 bg-base-200 text-primary-content p-8">
	<form method="post" class="card login-form sm:max-w-sm sm:w-full sm:mx-auto" use:enhance={() => {
		loading = true;
		return async ({ result }) => {
			loading = false;
			pb.authStore.loadFromCookie(document.cookie);
			await applyAction(result);
		}
	}}>
		<h1 class="text-2xl mb-4">Login</h1>
		<div class="form-control gap-2 mb-4">
			<input class="input input-bordered" type="text" name="email" placeholder="Email" bind:value={$form.email} />
			{#if $errors.email}
				<small class="text-error">{$errors.email}</small>
			{/if}
			<input class="input input-bordered" type="password" name="password" placeholder="Password" bind:value={$form.password} />
			{#if $errors.password}
				<small class="text-error">{$errors.password}</small>
			{/if}
			<input type="hidden" name="rating" bind:value={$form.rating} />
			{#if $errors.rating}
				<small class="text-error">{$errors.rating}</small>
			{/if}
			<Rating value={$form.rating} on:rate={(e) => {$form.rating = e.detail.value}} />
		</div>
		<LoadingButton {loading}>Submit</LoadingButton>
	</form>
</div>

<DebugForm data={$form} />