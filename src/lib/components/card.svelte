<script lang="ts">
  import { fade } from 'svelte/transition';
  interface Props {
    frontText: string;
    backText: string;
  }

  let { frontText, backText }: Props = $props();
  let showBack = $state(false);
</script>

<div in:fade class="card-wrapper">
  <button class="card card-inner" class:show-back={showBack} onclick={() => (showBack = !showBack)}>
    <div class="card-side card-front">{frontText}</div>
    <div class="card-side card-back">{backText}</div>
  </button>
</div>

<style lang="scss">
  .card-wrapper {
    display: block;
    width: 100%;
    height: 300px;
    perspective: 1000px;
    user-select: none;
    touch-action: none;
    transition: transform 2.8s;
  }

  .card-inner {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: transform 2.8s;
    transform-style: preserve-3d;
  }

  .card-side {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-back {
    transform: rotateX(180deg);
  }

  .show-back {
    transform: rotateX(180deg);
  }
</style>
