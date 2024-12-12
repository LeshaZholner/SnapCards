<script lang="ts">
  import type { Snippet } from 'svelte';
  import AppSidebar from '$lib/components/app-sidebar.svelte';
  import * as Sidebar from "$lib/components/ui/sidebar";
  import '../app.css';

  let { children }: { children: Snippet } = $props();
</script>

<Sidebar.Provider>
  <AppSidebar />
  <main>
    <Sidebar.Trigger />
    {@render children?.()}
  </main>
</Sidebar.Provider>

<style gloabl lang="scss">
</style>
