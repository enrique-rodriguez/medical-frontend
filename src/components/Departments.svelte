<script lang="ts">
  import { departments } from "../stores/departments";

  let selectedDepartment = 0;
</script>

<section id="departments" class="departments">
  <div class="container">
    <div class="section-title">
      <h2>Departments</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
    </div>

    <div class="row gy-4">
      <div class="col-lg-3">
        <ul class="nav nav-tabs flex-column">
          {#each $departments as department, did}
            <li class="nav-item">
              <a
                class="nav-link {selectedDepartment == did
                  ? 'active show'
                  : ''}"
                data-bs-toggle="tab"
                href="#tab-{did}">{department.name}</a
              >
            </li>
          {/each}
        </ul>
      </div>
      <div class="col-lg-9">
        <div class="tab-content">
          {#each $departments as department, did}
            <div
              class="tab-pane {selectedDepartment == did ? 'active show' : ''}"
              id="tab-{did}"
            >
              <div class="row gy-4">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>{department.name}</h3>
                  <p class="fst-italic">
                    {department.excerpt}
                  </p>
                  <p>
                    {department.description}
                  </p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img
                    src={department.image}
                    alt="Image of {department.name} department"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .departments {
    overflow: hidden;
  }
  .departments .nav-tabs {
    border: 0;
  }
  .departments .nav-link {
    border: 0;
    padding: 12px 15px 12px 0;
    transition: 0.3s;
    color: #2c4964;
    border-radius: 0;
    border-right: 2px solid #ebf1f6;
    font-weight: 600;
    font-size: 15px;
  }
  .departments .nav-link:hover {
    color: #1977cc;
  }
  .departments .nav-link.active {
    color: #1977cc;
    border-color: #1977cc;
  }
  .departments .tab-pane.active {
    -webkit-animation: fadeIn 0.5s ease-out;
    animation: fadeIn 0.5s ease-out;
  }
  .departments .details h3 {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #2c4964;
  }
  .departments .details p {
    color: #777777;
  }
  .departments .details p:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 992px) {
    .departments .nav-link {
      border: 0;
      padding: 15px;
    }
    .departments .nav-link.active {
      color: #fff;
      background: #1977cc;
    }
  }
</style>
