<script lang="ts">
</script>

<section id="counts" class="counts">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="count-box">
          <i class="fas fa-user-md" />
          <span
            data-purecounter-start="0"
            data-purecounter-end="85"
            data-purecounter-duration="1"
            class="purecounter"
          />
          <p>Doctors</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
        <div class="count-box">
          <i class="far fa-hospital" />
          <span
            data-purecounter-start="0"
            data-purecounter-end="18"
            data-purecounter-duration="1"
            class="purecounter"
          />
          <p>Departments</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div class="count-box">
          <i class="fas fa-flask" />
          <span
            data-purecounter-start="0"
            data-purecounter-end="12"
            data-purecounter-duration="1"
            class="purecounter"
          />
          <p>Research Labs</p>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div class="count-box">
          <i class="fas fa-award" />
          <span
            data-purecounter-start="0"
            data-purecounter-end="150"
            data-purecounter-duration="1"
            class="purecounter"
          />
          <p>Awards</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .counts {
    background: #f1f7fd;
    padding: 70px 0 60px;
  }
  .counts .count-box {
    padding: 30px 30px 25px 30px;
    width: 100%;
    position: relative;
    text-align: center;
    background: #fff;
  }
  .counts .count-box i {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    background: #1977cc;
    color: #fff;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
  }
  .counts .count-box span {
    font-size: 36px;
    display: block;
    font-weight: 600;
    color: #082744;
  }
  .counts .count-box p {
    padding: 0;
    margin: 0;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
  }
</style>
