<script lang="ts">
  import SetCards from '$lib/components/set-cards.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let count = $state(0);
</script>

<h1>Hello word</h1>
<button onclick={() => count++}>
  Clicks: {count}
</button>

<div class="card-container">
  <SetCards cardList={data.cards} />
</div>

<style>
  .card-container {
    max-width: 800px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
