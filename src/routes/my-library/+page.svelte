<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<div class="my-library-page">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="dashboard">
          {#each data.setsPreview as setPreview}
            <div class="dashboard-item">
              <div class="card set-preview">
                <div class="card-body set-preview-inner">
                  <span class="card-subtitle set-preview-cardLine">
                    {setPreview.termsCount} terms
                  </span>
                  <h5 class="card-title set-preview-cardHeader">{setPreview.title}</h5>
                  <a
                    href="/cards/{setPreview.id}"
                    class="stretched-link"
                    aria-label={setPreview.title}
                  ></a>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .dashboard-item {
    margin-bottom: 1rem;
  }

  // .card {
  //   box-shadow: $box-shadow-sm;
  // }

  // .card:hover {
  //   box-shadow: $box-shadow;
  // }
</style>
