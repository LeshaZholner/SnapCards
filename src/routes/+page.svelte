<script lang="ts">
  import Card from "$lib/components/card.svelte";
  let count = $state(0);
</script>

<h1>Hello word</h1>
<button onclick={() => count++}>
  Clicks: {count}
</button>
<div class="card-container">
  <Card />
</div>

<style>
  .card-container {
    max-width: 800px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
</style>