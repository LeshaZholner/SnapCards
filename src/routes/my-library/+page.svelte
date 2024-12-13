<script lang="ts">
  import type { PageData } from './$types';
  import { Badge } from '$lib/components/ui/badge';
  import * as Card from '$lib/components/ui/card';

  let { data }: { data: PageData } = $props();
</script>

<div class="my-library-page">
  <div class="flex flex-1 flex-col gap-4">
    {#each data.setsPreview as setPreview}
      <Card.Root class="shadow-md transition-all ease-in-out duration-300 hover:shadow-xl">
        <a href="/cards/{setPreview.id}">
          <Card.Content class="p-4">
            <Badge variant="outline">{setPreview.termsCount} terms</Badge>
            <h4>{setPreview.title}</h4>
          </Card.Content>
        </a>
      </Card.Root>
    {/each}
  </div>
</div>

<style>
</style>
