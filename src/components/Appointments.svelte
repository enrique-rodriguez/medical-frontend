<script lang="ts">
</script>

<section id="appointment" class="appointment section-bg">
  <div class="container">
    <div class="section-title">
      <h2>Make an Appointment</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
    </div>

    <form action="forms/appointment.php" method="post" class="appointment-form">
      <div class="row">
        <div class="col-md-4 form-group">
          <input
            type="text"
            name="name"
            class="form-control"
            id="name"
            placeholder="Your Name"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
          <div class="validate" />
        </div>
        <div class="col-md-4 form-group mt-3 mt-md-0">
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
            data-rule="email"
            data-msg="Please enter a valid email"
          />
          <div class="validate" />
        </div>
        <div class="col-md-4 form-group mt-3 mt-md-0">
          <input
            type="tel"
            class="form-control"
            name="phone"
            id="phone"
            placeholder="Your Phone"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
          <div class="validate" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 form-group mt-3">
          <input
            type="datetime"
            name="date"
            class="form-control datepicker"
            id="date"
            placeholder="Appointment Date"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
          <div class="validate" />
        </div>
        <div class="col-md-4 form-group mt-3">
          <select name="department" id="department" class="form-select">
            <option value="">Select Department</option>
            <option value="Department 1">Department 1</option>
            <option value="Department 2">Department 2</option>
            <option value="Department 3">Department 3</option>
          </select>
          <div class="validate" />
        </div>
        <div class="col-md-4 form-group mt-3">
          <select name="doctor" id="doctor" class="form-select">
            <option value="">Select Doctor</option>
            <option value="Doctor 1">Doctor 1</option>
            <option value="Doctor 2">Doctor 2</option>
            <option value="Doctor 3">Doctor 3</option>
          </select>
          <div class="validate" />
        </div>
      </div>

      <div class="form-group mt-3">
        <textarea
          class="form-control"
          name="message"
          rows="5"
          placeholder="Message (Optional)"
        />
        <div class="validate" />
      </div>
      <div class="mb-3">
        <div class="loading">Loading</div>
        <div class="error-message" />
        <div class="sent-message">
          Your appointment request has been sent successfully. Thank you!
        </div>
      </div>
      <div class="text-center">
        <button type="submit">Make an Appointment</button>
      </div>
    </form>
  </div>
</section>

<style>
  .appointment .appointment-form {
    width: 100%;
  }
  .appointment .appointment-form .form-group {
    padding-bottom: 8px;
  }
  .appointment .appointment-form .validate {
    display: none;
    color: red;
    margin: 0 0 15px 0;
    font-weight: 400;
    font-size: 13px;
  }
  .appointment .appointment-form .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;
  }
  .appointment .appointment-form .error-message br + br {
    margin-top: 25px;
  }
  .appointment .appointment-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }
  .appointment .appointment-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }
  .appointment .appointment-form .loading:before {
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
  .appointment .appointment-form input,
  .appointment .appointment-form textarea,
  .appointment .appointment-form select {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 10px !important;
  }
  .appointment .appointment-form input:focus,
  .appointment .appointment-form textarea:focus,
  .appointment .appointment-form select:focus {
    border-color: #1977cc;
  }
  .appointment .appointment-form input,
  .appointment .appointment-form select {
    height: 44px;
  }
  .appointment .appointment-form textarea {
    padding: 10px 12px;
  }
  .appointment .appointment-form button[type="submit"] {
    background: #1977cc;
    border: 0;
    padding: 10px 35px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
  }
  .appointment .appointment-form button[type="submit"]:hover {
    background: #1c84e3;
  }
</style>
