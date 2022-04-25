<script>
  import { Modal } from "bootstrap";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let id;
  export let title;
  export let actionButtonText;

  var myModal;
  const dispatch = createEventDispatcher();

  onMount(async function () {
    myModal = new Modal(document.getElementById("modal"), {
      keyboard: false,
    });
  });

  function onAction(e) {
    dispatch("action");
  }

  export function toggle() {
    myModal.toggle();
  }
</script>

<div
  class="modal fade"
  {id}
  tabindex="-1"
  aria-labelledby="{id}Label"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="{id}Label">{title}</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body"><slot /></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
          >Close</button
        >
        <button type="button" on:click={onAction} class="btn btn-primary"
          >{actionButtonText}</button
        >
      </div>
    </div>
  </div>
</div>
