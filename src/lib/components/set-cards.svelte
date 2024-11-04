<script lang="ts">
  import Card from './card.svelte';
  import type { CardType } from '$lib/types/card-type';

  interface Props {
    cardList: CardType[];
  }

  let { cardList }: Props = $props();
  let currentCardIndex = $state(cardList[0].id);
  let leftCardIds: number[] = $state([]);
  let rightCardIds: number[] = $state([]);
  let currentSetCardIds: number[] = $state([]);

  cardList.map((_card, index) => {
    currentSetCardIds.push(index);
  });

  function nextCard() {
    currentCardIndex = currentCardIndex < cardList.length - 1 ? currentCardIndex + 1 : 0;
  }
</script>

<div class="set-cards">
  {#key currentCardIndex}
    <Card
      frontText={cardList[currentCardIndex].frontText}
      backText={cardList[currentCardIndex].backText}
    />
  {/key}
  <button class="btn btn-danger" onclick={() =>  {
    leftCardIds.push(currentCardIndex);
    nextCard();
  }}>Don't know</button>
  <button class="btn btn-success" onclick={() => {
    rightCardIds.push(currentCardIndex);
    nextCard();
  }}>Know</button>
  <div>
    know - {rightCardIds.length}
    don't know - {leftCardIds.length}
  </div>
</div>

<style lang="scss">
</style>
