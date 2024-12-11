<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import Aside from '$lib/components/aside.svelte';
  import '$lib/scss/app.scss';

  onMount(async () => {
    console.log('1')
    const bootstrap2 = await import('bootstrap');
    console.log('2')
    window.bootstrap = bootstrap2;
  });
  let { children }: { children: Snippet } = $props();
</script>

<div class="layout-container">
  <div class="layout-menu">
    <Aside />
  </div>
  <div class="layout-page">
    {@render children?.()}
  </div>
</div>

<style gloabl lang="scss">
  .layout-container {
    display: flex;
    flex-direction: column-reverse;
    min-height: 100vh;
  }

  .layout-page {
    flex: 1 0 0;
  }

  .layout-menu {
    position: sticky;
    bottom: 0;
    z-index: 101;
  }

  @include media-breakpoint-up(lg) {
    .layout-container {
      display: flex;
      flex-direction: row;
    }

    .layout-page {
      flex: 0 0 auto;
      width: 80%;
    }

    .layout-menu {
      flex: 0 0 auto;
      align-self: start;
      width: 20%;
      height: 100vh;
      top: 0;
      left: 0;
    }
  }
</style>