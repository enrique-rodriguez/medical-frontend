<script lang="ts">
</script>

<form action="forms/contact.php" method="post" class="message-form">
  <div class="row">
    <div class="col-md-6 form-group">
      <input
        type="text"
        name="name"
        class="form-control"
        id="name"
        placeholder="Your Name"
        required
      />
    </div>
    <div class="col-md-6 form-group mt-3 mt-md-0">
      <input
        type="email"
        class="form-control"
        name="email"
        id="email"
        placeholder="Your Email"
        required
      />
    </div>
  </div>
  <div class="form-group mt-3">
    <input
      type="text"
      class="form-control"
      name="subject"
      id="subject"
      placeholder="Subject"
      required
    />
  </div>
  <div class="form-group mt-3">
    <textarea
      class="form-control"
      name="message"
      rows="5"
      placeholder="Message"
      required
    />
  </div>
  <div class="my-3">
    <div class="loading">Loading</div>
    <div class="error-message" />
    <div class="sent-message">Your message has been sent. Thank you!</div>
  </div>
  <div class="text-center">
    <button type="submit">Send Message</button>
  </div>
</form>

<style>
  .message-form {
    width: 100%;
    background: #fff;
  }
  .message-form .form-group {
    padding-bottom: 8px;
  }
  .message-form .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
  }
  .message-form .error-message br + br {
    margin-top: 25px;
  }
  .message-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }
  .message-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }
  .message-form .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }
  .message-form input,
  .message-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
  }
  .message-form input {
    height: 44px;
  }
  .message-form textarea {
    padding: 10px 12px;
  }
  .message-form button[type="submit"] {
    background: #1977cc;
    border: 0;
    padding: 10px 35px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
  }
  .message-form button[type="submit"]:hover {
    background: #1c84e3;
  }

  @-webkit-keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
