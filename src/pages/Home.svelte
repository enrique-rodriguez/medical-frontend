<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import WhyUs from "../components/WhyUs.svelte";
  import AboutUs from "../components/AboutUs.svelte";
  import Counts from "../components/Counts.svelte";
  import Services from "../components/Services.svelte";
  import Departments from "../components/Departments.svelte";
  import ProviderList from "../components/ProviderList.svelte";
  import Faq from "../components/Faq.svelte";
  import Testimonials from "../components/TestimonialList.svelte";
  import Gallery from "../components/Gallery.svelte";
  import Contact from "../components/Contact.svelte";
  import BecomeProvider from "../components/BecomeProvider.svelte";
  
</script>

<Hero />

<main id="main">
  <WhyUs />
  <ProviderList />
  <AboutUs />
  <Counts />
  <Services />
  <Departments />
  <Faq />
  <Testimonials />
  <Gallery />
  <BecomeProvider />
  <Contact />
</main>
