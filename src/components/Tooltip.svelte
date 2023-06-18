<script lang="ts">
  export let text: string;
  export let direction: 'top' | 'bottom' | 'left' | 'right' = 'top';
  export let color: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' = 'primary';
</script>

<div class={`tooltip tooltip-${direction}`} data-tip={text}>
  <slot />
</div>