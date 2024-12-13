<script lang="ts">
  import { page } from '$app/stores';
  import House from 'lucide-svelte/icons/house';
  import FolderOpen from 'lucide-svelte/icons/folder-open';
  import FilePlus from 'lucide-svelte/icons/file-plus';
  import WalletCards from 'lucide-svelte/icons/wallet-cards';
  import * as Sidebar from '$lib/components/ui/sidebar';

  const sidebar = Sidebar.useSidebar();

  const menuItems = [
    {
      title: 'Home',
      url: '/',
      icon: House
    },
    {
      title: 'MyLibrary',
      url: '/my-library',
      icon: FolderOpen
    },
    {
      title: 'Create card set',
      url: '/create-set',
      icon: FilePlus
    }
  ];
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton size="lg">
          {#snippet child({ props })}
            <a href="/" onclick={() => sidebar.setOpenMobile(false)} {...props}>
              <div class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <WalletCards />
              </div>
              <div>
                <span class="font-semibold">Snap Cards</span>
              </div>
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each menuItems as menuItem (menuItem.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={$page.url.pathname === menuItem.url}>
                {#snippet child({ props })}
                  <a href={menuItem.url} onclick={() => sidebar.setOpenMobile(false)} {...props}>
                    <menuItem.icon />
                    <span>{menuItem.title}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
  <Sidebar.Footer />
</Sidebar.Root>

<style lang="scss">
</style>
