<script lang="ts">
  import { page } from '$app/stores';
  import House from "lucide-svelte/icons/house";
  import * as Sidebar from '$lib/components/ui/sidebar';

  const menuItems = [
    {
      title: "Home",
      url: "/",
      icon: House
    },
    {
      title: "MyLibrary",
      url: "/my-library",
      icon: House,
    },
    {
      title: "Create card set",
      url: "/create-set",
      icon: House,
    }
  ];
</script>

<Sidebar.Root>
  <Sidebar.Header>
    Snap Cards
  </Sidebar.Header>
  
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel>Snap Cards</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each menuItems as menuItem (menuItem.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={$page.url.pathname === menuItem.url}>
                {#snippet child({ props })}
                  <a href={menuItem.url} {...props}>
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
