<script lang="ts">
  import Navigation from "./Navigation.svelte";
</script>

<header id="header" class="fixed-top">
  <div class="container d-flex align-items-center">
    <h1 class="logo me-auto"><a href="index.html">Medilab</a></h1>
    <Navigation />
    <a href="#become-provider" class="appointment-btn scrollto"
      ><span class="d-none d-md-inline">Become a</span> Provider</a
    >
  </div>
</header>

<style>
  #header {
    background: #fff;
    transition: all 0.5s;
    z-index: 997;
    padding: 15px 0;
    top: 40px;
    box-shadow: 0px 2px 15px rgba(25, 119, 204, 0.1);
  }

  #header .logo {
    font-size: 30px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.5px;
    font-family: "Poppins", sans-serif;
  }
  #header .logo a {
    color: #2c4964;
  }

  /**
* Appointment Button *
*/
  .appointment-btn {
    margin-left: 25px;
    background: #1977cc;
    color: #fff;
    border-radius: 50px;
    padding: 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
  }
  .appointment-btn:hover {
    background: #166ab5;
    color: #fff;
  }
  @media (max-width: 768px) {
    .appointment-btn {
      margin: 0 15px 0 0;
      padding: 6px 18px;
    }
  }
</style>
