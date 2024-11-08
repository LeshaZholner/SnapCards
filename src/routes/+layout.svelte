<script lang="ts">
  import type { Snippet } from 'svelte';
  import "$lib/scss/app.scss";
  import Header from '$lib/components/header.svelte';

  let { children }: { children: Snippet } = $props();
</script>

<Header />
{@render children?.()}

<style gloabl lang="scss">
</style>