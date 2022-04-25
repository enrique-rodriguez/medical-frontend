<script lang="ts">
  import Provider from "./Provider.svelte";
  import Modal from "../components/Modal.svelte";
  import SearchBox from "../components/SearchBox.svelte";
  import { createAppointment } from "../api";
  import { fetchProviders } from "../api";

  let modal: Modal;
  let providers = [];
  let isLoading = false;
  let isSubmitting = false;
  let selected = { id: null, full_name: "none" };
  let didSearch = false;
  let submitMessage: {type: string, text: string};

  function makeAppointment(e) {
    selected = e.detail;
    modal.toggle();
  }

  function search(e?: CustomEvent) {
    isLoading = true;
    fetchProviders(e.detail).then(function (docs) {
      isLoading = false;
      providers = docs;
      didSearch = true;
    });
  }

  function setSubmitMessage(message: string, isError=false) {
    submitMessage = {
      text: message,
      type: isError ? "danger" : "success",
    }
  }

  async function onModalAction(e) {
    const form: HTMLFormElement = document.querySelector("#form");
    const formData = new FormData(form)

    if (!form.checkValidity()) return form.reportValidity();

    isSubmitting = true;
    submitMessage = null;

    formData.forEach((value, key) => console.log(key, value));

    createAppointment(formData)
      .then(function(data){
        console.log(data);
        setSubmitMessage("Appointment request sent successfully")
      })
      .catch(function (error) {
        console.log(error);
        setSubmitMessage(error.toString(), true);
      })
      .finally(function () {
        isSubmitting = false;
      });
  }
</script>

<Modal
  id="modal"
  actionButtonText="Submit"
  title="Make an Appointment with {selected.full_name}"
  bind:this={modal}
  on:action={onModalAction}
>
  <form id="form">
    <input
      id="provider_id"
      name="provider_id"
      type="text"
      hidden
      bind:value={selected.id}
    />
    <div class="row form-group">
      <div class="col mb-3">
        <label for="full_name" class="form-label">Full Name</label>
        <input
          required
          type="text"
          class="form-control"
          id="full_name"
          name="full_name"
        />
      </div>
      <div class="col mb-3">
        <label for="gender" class="form-label">Gender</label>
        <select required name="gender" id="gender" class="form-select">
          <option value="">Select gender</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
          <option value="o">Other</option>
        </select>
      </div>
    </div>
    <div class="row form-group">
      <div class="col mb-3">
        <label for="dob" class="form-label">Date of Birth</label>
        <input required type="date" name="dob" class="form-control" id="dob" />
      </div>
      <div class="col mb-3">
        <label for="phone_number" class="form-label">Phone Number</label>
        <input
          required
          type="text"
          name="phone_number"
          class="form-control"
          id="phone_number"
        />
      </div>
    </div>
    <div class="col mb-3">
      <label for="reason" class="form-label">Appointment Reason</label>
      <input
        required
        type="text"
        name="reason"
        class="form-control"
        id="reason"
      />
    </div>
    <div class="mb-3">
      <label for="date" class="form-label">Appointment Date</label>
      <input required type="date" name="date" class="form-control" id="date" />
    </div>
    <div class="row form-group">
      <div class="col mb-3">
        <label for="start" class="form-label">Start Time</label>
        <input
          required
          type="time"
          name="start"
          class="form-control"
          id="start"
        />
      </div>
      <div class="col mb-3">
        <label for="end" class="form-label">End Time</label>
        <input required type="time" name="end" class="form-control" id="end" />
      </div>
    </div>
  </form>
  {#if isSubmitting}
    <div class="d-flex justify-content-center">
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  {/if}
  {#if submitMessage}
    <div class="alert alert-{submitMessage.type}">{submitMessage.text}</div>
  {/if}
</Modal>

<section id="doctors" class="doctors">
  <div class="container">
    <div class="section-title">
      <h2>Providers</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>

      <SearchBox placeHolder="Search Providers..." on:search={search}/>
      {#if didSearch && providers.length == 0}
        <div class="alert alert-warning">
          No providers found using search criteria.
        </div>
      {/if}
    </div>

    {#if isLoading}
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    {:else}
      <div class="row">
        {#each providers as doctor}
          <div class="col-lg-6">
            <Provider on:make-appointment={makeAppointment} {...doctor} />
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .doctors {
    background: #fff;
  }
</style>
