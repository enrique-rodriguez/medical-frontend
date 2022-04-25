<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from 'svelte/transition';

  
  export let id: number;
  export let full_name: string;
  export let specialty: string;

  let dispatch = createEventDispatcher();

  function onClick(e) {
    dispatch('make-appointment', {id, full_name, specialty });
  }

</script>

<div in:fly="{{ y: 200, duration: 2000 }}" out:fade class="member d-flex align-items-start">
  <div class="member-info">
    <h4>{full_name}</h4>
    <span>{specialty}</span>

    <button on:click={onClick} class="btn btn-primary mt-2">Make an appointment</button>
  </div>
</div>

<style>
  .member {
    position: relative;
    box-shadow: 0px 2px 15px rgba(44, 73, 100, 0.08);
    padding: 30px;
    border-radius: 10px;
  }
  .member .pic {
    overflow: hidden;
    width: 180px;
    border-radius: 50%;
  }
  .member .pic img {
    transition: ease-in-out 0.3s;
  }
  .member:hover img {
    transform: scale(1.1);
  }
  .member .member-info {
    padding-left: 30px;
  }
  .member h4 {
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 20px;
    color: #2c4964;
  }
  .member span {
    display: block;
    font-size: 15px;
    padding-bottom: 10px;
    position: relative;
    font-weight: 500;
  }
  .member span::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 1px;
    background: #b2c8dd;
    bottom: 0;
    left: 0;
  }
  .member p {
    margin: 10px 0 0 0;
    font-size: 14px;
  }
  .member .social {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .member .social a {
    transition: ease-in-out 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 32px;
    height: 32px;
    background: #a0bcd5;
  }
  .member .social a i {
    color: #fff;
    font-size: 16px;
    margin: 0 2px;
  }
  .member .social a:hover {
    background: #1977cc;
  }
  .member .social a + a {
    margin-left: 8px;
  }
</style>
