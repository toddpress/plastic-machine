<script lang="ts">
  export let prefix: string = '';
  export let id: string;
</script>
<div class="carousel-item" id={`${id}`}>
  <slot />
</div>