<script lang="ts">
  export let username: string = 'Anonymous'
  export let src: string = `https://api.dicebear.com/6.x/bottts/svg?seed=${username}`
  export let alt: string = `${username}'s profile picture`
</script>

<div class="avatar" style="pointer-events: none;">
  <div class="w-24 rounded-full">
    <img {src} {alt} />
  </div>
</div>