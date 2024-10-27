<script lang="ts">
  import Card from "./card.svelte";
  import type { CardType } from "$lib/types/card-type";

  interface Props {
    cardList: CardType[];
  }

  let { cardList }: Props = $props();
</script>

<div class="set-cards">
  {#each cardList as card}
    <Card frontText={card.frontText} backText={card.backText} />
  {/each}
</div>

<style>

</style>