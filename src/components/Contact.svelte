<script lang="ts">
  import MessageForm from "./MessageForm.svelte";
</script>

<section id="contact" class="contact">
  <div class="container">
    <div class="section-title">
      <h2>Contact</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
    </div>
  </div>

  <div>
    <iframe
      style="border:0; width: 100%; height: 350px;"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
      frameborder="0"
      allowfullscreen
    />
  </div>

  <div class="container">
    <div class="row mt-5">
      <div class="col-lg-4">
        <div class="info">
          <div class="address">
            <i class="bi bi-geo-alt" />
            <h4>Location:</h4>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>

          <div class="email">
            <i class="bi bi-envelope" />
            <h4>Email:</h4>
            <p>info@example.com</p>
          </div>

          <div class="phone">
            <i class="bi bi-phone" />
            <h4>Call:</h4>
            <p>+1 5589 55488 55s</p>
          </div>
        </div>
      </div>

      <div class="col-lg-8 mt-5 mt-lg-0">
        <MessageForm />
      </div>
    </div>
  </div>
</section>

<style>
  .contact .info {
    width: 100%;
    background: #fff;
  }
  .contact .info i {
    font-size: 20px;
    color: #1977cc;
    float: left;
    width: 44px;
    height: 44px;
    background: #d6e9fa;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
  }
  .contact .info h4 {
    padding: 0 0 0 60px;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #2c4964;
  }
  .contact .info p {
    padding: 0 0 0 60px;
    margin-bottom: 0;
    font-size: 14px;
    color: #4b7dab;
  }
  .contact .info .email,
  .contact .info .phone {
    margin-top: 40px;
  }
  .contact .info .email:hover i,
  .contact .info .address:hover i,
  .contact .info .phone:hover i {
    background: #1977cc;
    color: #fff;
  }
</style>
