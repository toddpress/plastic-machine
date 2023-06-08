<script lang="ts">
  export let component;
  export let fallback;
</script>

{#if component === null}
  {#if fallback}
    <slot name="fallback" />
  {:else}
    <div
      class="radial-progress"
      style="--value: 60; --size: 3.5rem;"
    >
    </div>
  {/if}
{:else}
  <svelte:component this={component} />
{/if}


