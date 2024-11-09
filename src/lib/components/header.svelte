<script lang="ts">
  import { page } from '$app/stores';
</script>

<aside>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Link</a>
          </li>
          <li class="nav-item dropdown">
            <button class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">Action</a></li>
              <li><a class="dropdown-item" href="/">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</aside>
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
