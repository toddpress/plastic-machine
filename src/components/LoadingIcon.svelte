<script type="ts">
  export let loading = false;
  export let color = 'currentColor';
</script>

<style>
  .loading-icon {
    display: none;
  }

  .is-loading {
    display: inline-block;
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<span class="loading-icon" class:is-loading={loading}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={color} class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
</span>
