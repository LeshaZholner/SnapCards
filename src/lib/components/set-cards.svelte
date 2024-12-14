<script lang="ts">
  import Card from './card.svelte';
  import type { CardType } from '$lib/types/card-type';
  import { Button } from '$lib/components/ui/button';

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
      frontText={cardList[currentCardIndex].term}
      backText={cardList[currentCardIndex].definition}
    />
  {/key}
  <div class="my-2">
    <Button variant="destructive" onclick={() =>{
      leftCardIds.push(currentCardIndex);
      nextCard();
    }}>
      Don't know
    </Button>
    <Button onclick={() =>{
      rightCardIds.push(currentCardIndex);
      nextCard();
    }}>
      Know
    </Button>
    <div>
      don't know - {leftCardIds.length}
      know - {rightCardIds.length}
    </div>
  </div>
</div>

<style>
</style>
