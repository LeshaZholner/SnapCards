<script lang="ts">
  import { page } from '$app/stores';
</script>

<header class="navbar navbar-expand">
  <nav class="container">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link"
            aria-current={$page.url.pathname === '/' ? 'page' : undefined}
            href="/">Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            aria-current={$page.url.pathname === '/create-set' ? 'page' : undefined}
            href="/create-set">Your Library</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            aria-current={$page.url.pathname === '/create-set' ? 'page' : undefined}
            href="/create-set">Add card set</a
          >
        </li>
      </ul>
    </div>
  </nav>
</header>

<style lang="scss">
</style>
