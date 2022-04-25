<script lang="ts">
</script>

<nav id="navbar" class="navbar order-last order-lg-0">
  <ul>
    <li>
      <a class="nav-link scrollto active" href="#hero">Home</a>
    </li>
    
    <li>
      <a class="nav-link scrollto" href="#doctors">Providers</a>
    </li>

    <li>
      <a class="nav-link scrollto" href="#about">About</a>
    </li>

    <li>
      <a class="nav-link scrollto" href="#services">Services</a>
    </li>

    <li>
      <a class="nav-link scrollto" href="#departments">Departments</a>
    </li>


    <li>
      <a class="nav-link scrollto" href="#contact">Contact</a>
    </li>
  </ul>
  <i class="bi bi-list mobile-nav-toggle" />
</nav>

<style>
  .navbar {
    padding: 0;
  }
  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }
  .navbar li {
    position: relative;
  }
  .navbar > ul > li {
    position: relative;
    white-space: nowrap;
    padding: 8px 0 8px 20px;
  }
  .navbar a,
  .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #2c4964;
    white-space: nowrap;
    transition: 0.3s;
    border-bottom: 2px solid #fff;
    padding: 5px 2px;
  }
  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }
  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover > a {
    color: #1977cc;
    border-color: #1977cc;
  }
  .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 20px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
  }
  .navbar .dropdown ul li {
    min-width: 200px;
  }
  .navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: none;
    color: #082744;
    border: none;
  }
  .navbar .dropdown ul a i {
    font-size: 12px;
  }
  .navbar .dropdown ul a:hover,
  .navbar .dropdown ul .active:hover,
  .navbar .dropdown ul li:hover > a {
    color: #1977cc;
  }

  .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }

  @media (max-width: 1366px) {
    .navbar .dropdown .dropdown ul {
      left: -90%;
    }

  }

  /**
* Mobile Navigation 
*/
  .mobile-nav-toggle {
    color: #2c4964;
    font-size: 28px;
    cursor: pointer;
    display: none;
    line-height: 0;
    transition: 0.5s;
  }

  @media (max-width: 991px) {
    .mobile-nav-toggle {
      display: block;
    }

    .navbar ul {
      display: none;
    }
  }

  .navbar-mobile .dropdown ul li {
    min-width: 200px;
  }
  .navbar-mobile .dropdown ul a {
    padding: 10px 20px;
  }

  .navbar-mobile .dropdown ul a:hover,
  .navbar-mobile .dropdown ul .active:hover,
  .navbar-mobile .dropdown ul li:hover > a {
    color: #1977cc;
  }
</style>
