<script lang="ts">
  import type { Snippet } from 'svelte';
  import { ModeWatcher } from 'mode-watcher';
  import { navigating } from '$app/stores';
  import AppSidebar from '$lib/components/app-sidebar.svelte';
  import * as Avatar from '$lib/components/ui/avatar';
  import * as Sidebar from "$lib/components/ui/sidebar";
  import '../app.css';

  let { children }: { children: Snippet } = $props();
</script>

<Sidebar.Provider>
  <ModeWatcher />
  <AppSidebar />
  <Sidebar.Inset>
    <header class="flex h-16 shrink-0 items-center justify-between border-b px-4">
      <Sidebar.Trigger />
      <Avatar.Root>
        <Avatar.Fallback>AZ</Avatar.Fallback>
      </Avatar.Root>
    </header>
    <main class="flex flex-1 flex-col p-4">
      
      {#if $navigating?.to}
        <div class="loader">
          <p>Loading...</p>
        </div>
      {:else}
        {@render children?.()}
      {/if}
    </main>
  </Sidebar.Inset>
</Sidebar.Provider>

<style>
</style>
