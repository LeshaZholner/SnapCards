<script lang="ts">
</script>

<div class="create-set-page">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card bg-body-tertiary mb-3">
          <div class="card-body ">
            <h4>Create a new card set</h4>
          </div>
        </div>
        <div class="card bg-body-tertiary mb-3">
          <div class="card-header">
            <h5>General Info</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <div class="form-floating mb-3">
                  <input id="field-set-title" class="form-control" type="text" placeholder="Card title, e.g. 'English - irregular verbs'"/>
                  <label for="field-set-title">Title</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating mb-3">
                  <textarea id="field-set-description" class="form-control" placeholder="Add a descrtion" ></textarea>
                  <label for="field-set-description">Description</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-body-tertiary mb-3">
          <div class="card-header">
            <h5>Cards</h5>
          </div>
          <div class="card-body">
            <div class="border rounded-1 bg-body mb-3 p-3">
              <div class="row">
                <div class="col-12">
                  1
                </div>
                <div class="col-6">
                  <div class="form-floating">
                    <textarea id="field-set-card-term-1" class="form-control" placeholder="Term"></textarea>
                    <label for="field-set-card-term-1">Term</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-floating">
                    <textarea id="field-set-card-def-1" class="form-control" placeholder="Definition"></textarea>
                    <label for="field-set-card-def-1">Definition</label>
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-outline-primary">
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>