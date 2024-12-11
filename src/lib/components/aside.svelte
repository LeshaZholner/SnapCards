<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import ThemeToggle from './theme-toggle.svelte';

  onMount(async () => {
    console.log('a-1');
    const bootstrap2 = await window.bootstrap;
    console.log(bootstrap2);
    console.log('a-2')
    let navBar = document.getElementById('sc-navbar')!;
    let bsNavBar = bootstrap2.Collapse.getOrCreateInstance(navBar, {toggle: false})
    let navLinks = Array.from(navBar.getElementsByClassName('nav-link'));
    console.log(navLinks);
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', () => {
          if (navBar.classList.contains('show')) {
            console.log('test');
            bsNavBar.hide() 
          }
        })
    });
  });
</script>

<aside class="navbar navbar-expand-lg sticky-bottom text-body-emphasis bg-body-secondary">
  <a class="aside-title link-body-emphasis" href="/">
    <span class="fs-4">Snap Cards</span>
  </a>
  <hr />
  <div id="sc-navbar" class="collapse navbar-collapse">
    <ul class="aside-menu nav nav-bar nav-pills">
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
          href="/create-set"
        >
          Create card set
        </a>
      </li>
    </ul>
  </div>
  <hr />
  <ThemeToggle />
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#sc-navbar"
    aria-controls="sc-navbar"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
</aside>

<style lang="scss">
  aside {
    display: flex;
    padding: 1rem 2rem;
    align-items: normal;
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

  .navbar-collapse {
    order: -1;
  }

  @include media-breakpoint-up(lg) {
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

    .navbar-collapse {
      order: 0;
    }
  }
</style>
