<script lang="ts">
  import { services } from "../stores/services";
</script>

<section id="services" class="services">
  <div class="container">
    <div class="section-title">
      <h2>Services</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
    </div>

    <div class="row">
      {#each $services as service, sid}
        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch {sid >= 3
            ? 'mt-4'
            : ''}"
        >
          <div class="icon-box">
            <div class="icon"><i class={service.icon} /></div>
            <h4><a href="#hello">{service.name}</a></h4>
            <p>{service.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .services .icon-box {
    text-align: center;
    border: 1px solid #d5e1ed;
    padding: 80px 20px;
    transition: all ease-in-out 0.3s;
  }
  .services .icon-box .icon {
    margin: 0 auto;
    width: 64px;
    height: 64px;
    background: #1977cc;
    border-radius: 5px;
    transition: all 0.3s ease-out 0s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transform-style: preserve-3d;
  }
  .services .icon-box .icon i {
    color: #fff;
    font-size: 28px;
  }
  .services .icon-box .icon::before {
    position: absolute;
    content: "";
    left: -8px;
    top: -8px;
    height: 100%;
    width: 100%;
    background: #badaf7;
    border-radius: 5px;
    transition: all 0.3s ease-out 0s;
    transform: translateZ(-1px);
  }
  .services .icon-box h4 {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 24px;
  }
  .services .icon-box h4 a {
    color: #2c4964;
  }
  .services .icon-box p {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
  }
  .services .icon-box:hover {
    background: #1977cc;
    border-color: #1977cc;
  }
  .services .icon-box:hover .icon {
    background: #fff;
  }
  .services .icon-box:hover .icon i {
    color: #1977cc;
  }
  .services .icon-box:hover .icon::before {
    background: #3291e6;
  }
  .services .icon-box:hover h4 a,
  .services .icon-box:hover p {
    color: #fff;
  }
</style>
