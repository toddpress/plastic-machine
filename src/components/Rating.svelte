<script lang="ts">
	import { createEventDispatcher } from 'svelte';

  export let value = 0;

  const dispatch = createEventDispatcher();

  let onChange = (event) => {
    value = parseInt(event.target.value);
    dispatch('rate', { value });
  };
</script>

<div class="rating rating-half">
  <input type="radio" name="rating-10" value="0" checked={`${value}` === '0'} on:change={onChange} class="rating-hidden" />
  <input type="radio" name="rating-10" value="1" checked={`${value}` === '1'} on:change={onChange} class="bg-red-400 mask mask-heart mask-half-1" />
  <input type="radio" name="rating-10" value="2" checked={`${value}` === '2'} on:change={onChange} class="bg-red-400 mask mask-heart mask-half-2" />
  <input type="radio" name="rating-10" value="3" checked={`${value}` === '3'} on:change={onChange} class="bg-orange-400 mask mask-heart mask-half-1" />
  <input type="radio" name="rating-10" value="4" checked={`${value}` === '4'} on:change={onChange} class="bg-orange-400 mask mask-heart mask-half-2" />
  <input type="radio" name="rating-10" value="5" checked={`${value}` === '5'} on:change={onChange} class="bg-yellow-400 mask mask-heart mask-half-1" />
  <input type="radio" name="rating-10" value="6" checked={`${value}` === '6'} on:change={onChange} class="bg-yellow-400 mask mask-heart mask-half-2" />
  <input type="radio" name="rating-10" value="7" checked={`${value}` === '7'} on:change={onChange} class="bg-lime-400 mask mask-heart mask-half-1" />
  <input type="radio" name="rating-10" value="8" checked={`${value}` === '8'} on:change={onChange} class="bg-lime-400 mask mask-heart mask-half-2" />
  <input type="radio" name="rating-10" value="9" checked={`${value}` === '9'} on:change={onChange} class="bg-green-400 mask mask-heart mask-half-1" />
  <input type="radio" name="rating-10" value="10" checked={`${value}` === '10'} on:change={onChange} class="bg-green-400 mask mask-heart mask-half-2" />
</div>