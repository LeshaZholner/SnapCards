<script lang="ts">
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Button } from '$lib/components/ui/button';
  import { Separator } from '$lib/components/ui/separator';
  import CirclePlus from 'lucide-svelte/icons/plus';

</script>

<div class="create-set-page">
  <div class="space-y-6">
    <h2 class="text-3xl font-medium">Create a new card set</h2>
    <Separator />
    <div class="mb-3 p-3 rounded-md border bg-secondary">
      <div class="mb-3">
        <Label for="field-set-title">Title</Label>
        <Input id="field-set-title" placeholder="Card title, e.g. 'English - irregular verbs'" />
      </div>
      <div>
        <Label for="field-set-description">Description</Label>
        <Textarea id="field-set-description" placeholder="Add a descrtion" />
      </div>
    </div>
    <Separator />
    <div>
      <div class="flex gap-3 mb-3 p-3 rounded-md border bg-secondary">
        <div class="flex-1">
          <Label for="field-set-card-term-1">Term</Label>
          <Textarea id="field-set-card-term-1" placeholder="Add a Term" />
        </div>
        <div class="flex-1">
          <Label for="field-set-card-def-1">Definition</Label>
          <Textarea id="field-set-card-def-1" placeholder="Add a Definition" />
        </div>
      </div>
      <div class="flex gap-3 mb-3 p-3 rounded-md border bg-secondary">
        <div class="flex-1">
          <Label for="field-set-card-term-1">Term</Label>
          <Textarea id="field-set-card-term-1" placeholder="Add a Term" />
        </div>
        <div class="flex-1">
          <Label for="field-set-card-def-1">Definition</Label>
          <Textarea id="field-set-card-def-1" placeholder="Add a Definition" />
        </div>
      </div>
      <div class="flex gap-3 mb-3 p-3 rounded-md border bg-secondary">
        <div class="flex-1">
          <Label for="field-set-card-term-1">Term</Label>
          <Textarea id="field-set-card-term-1" placeholder="Add a Term" />
        </div>
        <div class="flex-1">
          <Label for="field-set-card-def-1">Definition</Label>
          <Textarea id="field-set-card-def-1" placeholder="Add a Definition" />
        </div>
      </div>
      <div class="flex gap-3 mb-3 p-3 rounded-md border bg-secondary">
        <div class="flex-1">
          <Label for="field-set-card-term-1">Term</Label>
          <Textarea id="field-set-card-term-1" placeholder="Add a Term" />
        </div>
        <div class="flex-1">
          <Label for="field-set-card-def-1">Definition</Label>
          <Textarea id="field-set-card-def-1" placeholder="Add a Definition" />
        </div>
      </div>
      <Button>
        <CirclePlus />
        Add card
      </Button>
    </div>
  </div>
</div>

<style>
</style>