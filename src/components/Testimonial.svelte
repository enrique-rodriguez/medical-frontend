<script lang="ts">
  export let name;
  export let image;
  export let role;
  export let review;
</script>

<div class="testimonial-item">
  <img src={image} class="testimonial-img" alt="An image of {name}" />
  <h3>{name}</h3>
  <h4>{role}</h4>
  <p>
    <i class="bx bxs-quote-alt-left quote-icon-left" />
    {review}
    <i class="bx bxs-quote-alt-right quote-icon-right" />
  </p>
</div>

<style>
  .testimonial-item {
    box-sizing: content-box;
    padding: 30px 30px 30px 60px;
    margin: 30px 15px;
    min-height: 200px;
    box-shadow: 0px 2px 12px rgba(44, 73, 100, 0.08);
    position: relative;
    background: #fff;
  }
  .testimonial-item .testimonial-img {
    width: 90px;
    border-radius: 10px;
    border: 6px solid #fff;
    position: absolute;
    left: -45px;
  }
  .testimonial-item h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #111;
  }
  .testimonial-item h4 {
    font-size: 14px;
    color: #999;
    margin: 0;
  }
  .testimonial-item .quote-icon-left,
  .testimonial-item .quote-icon-right {
    color: #badaf7;
    font-size: 26px;
  }
  .testimonial-item .quote-icon-left {
    display: inline-block;
    left: -5px;
    position: relative;
  }
  .testimonial-item .quote-icon-right {
    display: inline-block;
    right: -5px;
    position: relative;
    top: 10px;
  }
  .testimonial-item p {
    font-style: italic;
    margin: 15px auto 15px auto;
  }

  @media (max-width: 767px) {
    .testimonial-item {
      padding: 30px;
      margin: 15px;
    }
    .testimonial-item .testimonial-img {
      position: static;
      left: auto;
    }
  }
</style>
