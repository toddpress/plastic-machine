<script lang="ts">
	import UserAvatar from '$components/UserAvatar.svelte';
	import { user } from '$lib/pocketbase';
  let avatarFile: HTMLInputElement;
  let email: string;
  let username: string;
  let name: string;
</script>
<form on:submit|preventDefault class="flex flex-col gap-3 max-w-xs">
	<div class="form-control w-full">
		<label class="label label-text" for="name">Name:</label>
		<input class="input input-bordered w-full" type="text" id="name" bind:value={name} />
	</div>
	<div class="form-control w-full">
		<label class="label label-text" for="username">Username:</label>
		<input class="input input-bordered w-full" type="text" id="username" bind:value={username} />
	</div>
	<div class="form-control w-full">
		<label class="label label-text" for="email">Email:</label>
		<input class="input input-bordered w-full" type="email" id="email" bind:value={email} />
	</div>
	<div class="form-control w-full max-w-xs">
		<label class="label" for="avatar">
      <span class="label-text">Photo:</span>
    </label>
		<input type="file"
      id="avatar"
      class="file-input file-input-bordered w-full"
      accept="image/*"
      capture="user"
      bind:this={avatarFile} />
	</div>
	<div class="form-control inline-flex flex-row justify-end mt-8">
		<button class="btn btn-primary btn-md min-w-[10rem]" type="submit">Save</button>
	</div>
</form>
