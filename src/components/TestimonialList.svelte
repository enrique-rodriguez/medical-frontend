<script lang="ts">
  import Testimonial from "./Testimonial.svelte";
  import { testimonials } from "../stores/testimonials";
</script>

<section id="testimonials" class="testimonials">
  <div class="container">
    <div
      class="testimonials-slider swiper"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="testimonial-wrap">
            {#each $testimonials as testimonial}
              <Testimonial {...testimonial} />
            {/each}
          </div>
        </div>
        <!-- End testimonial item -->
      </div>
      <div class="swiper-pagination" />
    </div>
  </div>
</section>

<style>
  .testimonials .testimonial-wrap {
    padding-left: 50px;
  }
  .testimonials .testimonials-slider {
    overflow: hidden;
  }
  .testimonials .swiper-pagination {
    margin-top: 20px;
    position: relative;
  }

  @media (max-width: 767px) {
    .testimonials .testimonial-wrap {
      padding-left: 0;
    }
    .testimonials .testimonials-slider {
      overflow: hidden;
    }
  }
</style>
