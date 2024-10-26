<script lang="ts">
  let showBack = $state(false);
</script>

<div class="card">
  <button class="card-inner" class:show-back={showBack} onclick={() => (showBack = !showBack)}>
    <div class="card-side card-front">Front card</div>
    <div class="card-side card-back">Back card</div>
  </button>
</div>

<style>

  .card {
    display: block;
    width: 100%;
    height: 300px;
    perspective: 1000px;
    user-select: none;
    touch-action: none;
    transition: transform 0.8s;
  }

  .card-inner {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    border: 1px solid #323232;
    border-radius: 20px;
    color: #323232;
    background-color: #ffffff;
    font-size: 1.3rem;
    transition: transform 0.8s;
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
