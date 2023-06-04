<script type="ts">
  export let loading = false;
</script>

<button class="btn btn-primary" disabled={loading}>
	<span class="loading loading-spinner" class:hidden={!loading} />
	<slot></slot>
</button>
