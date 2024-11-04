<script lang="ts">
  import type { Snippet } from 'svelte';
  import "$lib/scss/app.scss";

  let { children }: { children: Snippet } = $props();
</script>

{@render children?.()}

<style gloabl lang="scss">
</style>