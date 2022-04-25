<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let placeHolder = "Search...";

  let searchText = "";

  const dispatch = createEventDispatcher();

  const search = () => dispatch("search", searchText);
  
</script>

<div class="input-group mt-3 mb-3">
  <input
    type="text"
    class="form-control form-control-lg"
    placeholder={placeHolder}
    bind:value={searchText}
    on:keyup={(e) => (e.code == "Enter" ? search() : () => {})}
  />
  <button on:click={search} type="submit" class="input-group-text btn-primary"
    ><i class="bi bi-search me-2" /> Search
  </button>
</div>
