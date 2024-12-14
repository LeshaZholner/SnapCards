<script lang="ts">
  import { fade } from 'svelte/transition';
  import * as Card from '$lib/components/ui/card';

  interface Props {
    frontText: string;
    backText: string;
  }

  let { frontText, backText }: Props = $props();
  let showBack = $state(false);
</script>

<div in:fade class="card-wrapper w-full h-72">
  <button class="card-inner" class:show-back={showBack} onclick={() => (showBack = !showBack)} >
    <Card.Root class="absolute top-0 flex justify-center w-full h-full [backface-visibility:hidden]">
      <Card.Content class="flex justify-center items-center w-full h-full">
        {frontText}
      </Card.Content>
    </Card.Root>
    <Card.Root class="absolute top-0 flex justify-center w-full h-full [transform:rotateX(180deg)] [backface-visibility:hidden]">
      <Card.Content class="flex justify-center items-center w-full h-full">
        {backText}
      </Card.Content>
    </Card.Root>
  </button>
</div>

<style>
  .card-wrapper {
    display: block;
    perspective: 1000px;
    user-select: none;
    touch-action: none;
    transition: transform .8s;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform .8s;
    transform-style: preserve-3d;
  }

  .show-back {
    transform: rotateX(180deg);
  }
</style>
