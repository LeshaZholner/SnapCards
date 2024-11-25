<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import Aside from '$lib/components/aside.svelte';
  import "$lib/scss/app.scss";

  onMount(async () => {
    await import('bootstrap');
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
    display: grid;
    grid-template-columns: 1fr 6fr;
    height: 100vh;
    overflow: auto;
  }

  .layout-menu {
    position: sticky;
    height: 100vh;
    top: 0;
    left: 0;
    align-self: start;
  }
</style>