<script lang="ts">
  import SetCards from '$lib/components/set-cards.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<div class="card-container">
  <SetCards cardList={data.cards} />
</div>

<style lang="scss">
  .card-container {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    @include big-font;
  }
</style>
