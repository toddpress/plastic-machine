<script lang="ts">
  import { PUBLIC_POCKETHOST_URL } from '$env/static/public'

  export let id: string;
  export let avatar: string;
  export let username: string;
  export let size: string;

  $: src = getAvatar(id, avatar, username, '_pb_users_auth_', size)

  function getAvatar(id: string, avatar: string, username: string = 'Anonymous', collection: string = '_pb_users_auth_', size='120x120') {
    return id && avatar
      ? `${PUBLIC_POCKETHOST_URL}/_/../api/files/${collection}/${id}/${avatar}?thumb=${size}&token=`
      : `https://api.dicebear.com/6.x/bottts/svg?seed=${username}`
  }
</script>

<div class="avatar" style="pointer-events: none;">
  <div class="w-24 rounded-full">
    <img {src} alt={`${username}'s profile picture`} />
  </div>
</div>