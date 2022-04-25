<script lang="ts">
  import { createProvider } from "../api";

  let isSubmitting = false;
  let submitMessage: { type: string; text: string };
  let full_name = "";
  let specialty_name = "";

  function setSubmitMessage(text: string, isError = false) {
    submitMessage = {
      type: isError ? "danger" : "success",
      text: text,
    };
  }

  function onSubmit(e) {
    isSubmitting = true;

    const form: HTMLFormElement = document.querySelector("#become-provider-form");
    createProvider(new FormData(form))
      .then(function () {
        setSubmitMessage("Your request to become a provider has been sent!");
      })
      .catch(function (error) {
        setSubmitMessage(error.toString(), true);
      })
      .finally(function () {
        isSubmitting = false;
      });
  }
</script>

<section id="become-provider" class="become-provider">
  <div class="container">
    <div class="section-title">
      <h2>Become a Provider</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
    </div>

    <form id="become-provider-form" class="form" method="POST" on:submit|preventDefault={onSubmit}>
      <div class="mb-3">
        <label for="full_name" class="form-label">Full Name</label>
        <input
          required
          type="text"
          class="form-control"
          id="full_name"
          name="full_name"
          bind:value={full_name}
        />
        <small class="text-muted">A minimum of 5 characters is required</small>
      </div>
      <div class="mb-3">
        <label for="specialty_name" class="form-label">Specialty</label>
        <input
          required
          type="text"
          class="form-control"
          id="specialty_name"
          name="specialty_name"
          bind:value={specialty_name}
        />
        <small class="text-muted">A minimum of 5 characters is required</small>
      </div>
      <button
        disabled={full_name.length < 5 || specialty_name.length < 5}
        type="submit"
        class="btn btn-primary form-control mb-4">Submit</button
      >
    </form>
    {#if isSubmitting}
      <div class="d-flex justify-content-center mt-4">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    {:else if submitMessage}
      <div class="alert alert-{submitMessage.type} alert-dismissible fade show">
        {submitMessage.text}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    {/if}
  </div>
</section>
