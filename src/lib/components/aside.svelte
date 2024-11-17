<script lang="ts">
    import ThemeToggle from "./theme-toggle.svelte";

</script>

<aside class="text-body-emphasis bg-body-secondary">
  <a class="aside-title link-body-emphasis" href="/">
    <span class="fs-4">Snap Cards</span>
  </a>
  <hr>
  <ul class="aside-menu nav nav-pills">
    <li class="nav-item">
      <a class="nav-link link-body-emphasis" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/">My Library</a>
    </li>
    <li class="nav-item">
      <a class="nav-link link-body-emphasis" href="/">Create card set</a>
    </li>
  </ul>
  <hr>
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
