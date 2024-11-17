<script lang="ts">
  let isDark = $state(false)
  $effect(() => {
    console.log(isDark);
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
  });
</script>

<div class="form-check form-switch">
  <input class="form-check-input" bind:checked={isDark} type="checkbox" role="switch" id="sc-color-theme">
</div>

<style lang="scss">

</style>