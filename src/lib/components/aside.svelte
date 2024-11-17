<script lang="ts">
  import { page } from '$app/stores';
  import ThemeToggle from './theme-toggle.svelte';
</script>

<aside class="text-body-emphasis bg-body-secondary">
  <a class="aside-title link-body-emphasis" href="/">
    <span class="fs-4">Snap Cards</span>
  </a>
  <hr />
  <ul class="aside-menu nav nav-pills">
    <li class="nav-item">
      <a
        class="nav-link"
        class:link-body-emphasis={$page.url.pathname !== '/'}
        class:active={$page.url.pathname === '/'}
        aria-current={$page.url.pathname === '/' ? 'page' : undefined}
        href="/">Home</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        class:link-body-emphasis={$page.url.pathname !== '/my-library'}
        class:active={$page.url.pathname === '/my-library'}
        aria-current={$page.url.pathname === '/my-library' ? 'page' : undefined}
        href="/my-library">My Library</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        class:link-body-emphasis={$page.url.pathname !== '/create-set'}
        class:active={$page.url.pathname === '/create-set'}
        aria-current={$page.url.pathname === '/create-set' ? 'page' : undefined}
        href="/create-set">Create card set</a
      >
    </li>
  </ul>
  <hr />
  <ThemeToggle />
</aside>

<style lang="scss">
  aside {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    background-color: var(--bs-tertiary-bg);
    color: var(--bs-nav-link-color);
  }

  .aside-title {
    text-decoration: none;
  }

  .aside-menu {
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
  }
</style>
