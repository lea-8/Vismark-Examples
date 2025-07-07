<script>
  let { 
    columns = 2,
    gap = 2,
  } = $props();
</script>

<!-- style={`grid-template-columns: repeat(${columns}, 1fr);`} -->
<!-- svelte-ignore slot_element_deprecated -->
<div 
  class="grid-layout"
  style="--num-columns: {columns}"
>
  <slot />
</div>

<style>
  .grid-layout {
    display: grid;
    grid-template-columns: repeat(var(--num-columns), 1fr);
    gap: 1rem;
    border: 2px solid #f76707;
    border-radius: 5px;
    background-color: rgb(248, 248, 248);
  }
</style>