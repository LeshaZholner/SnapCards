<script lang="ts">
  import type { PageData } from './$types';
  import SetCards from '$lib/components/set-cards.svelte';

  let { data }: { data: PageData } = $props();
</script>

<div class="cards-page">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card-container">
          <h2>{data.set.title}</h2>
          <SetCards cardList={data.set.cards} />
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .card-container {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    @include big-font;
  }
</style>