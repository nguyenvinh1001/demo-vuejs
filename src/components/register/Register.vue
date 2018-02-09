<template>
  <div class="form-register">
    <form name="SignInForm" id="SignInForm" method="post" class="register">
      <div>
        <form name="Title" id="Title" class="lg-title">
          <div class="font">
            <h4>Sign up now</h4>
            <h5>Fill in the form below to get instant access</h5>
          </div>
          <img src="../../assets/pencil.jpg" class="img-pencil">
        </form>
      </div>
      <div class="form-group">
        <input type="text" placeholder="First Name" class="rg-first-name" >
      </div>
      <div class="form-group">
        <input type="text" placeholder="Last Name" class="rg-last-name">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Email" class="rg-email">
      </div>
      <div class="form-group">
        <input type="text" placeholder="About yourseft" class="rg-about">
      </div>
      <div>
        <button class="bt-sign-up">Sign me up!</button>
      </div>
     </form>
  </div>
</template>

<script>
export default {
  name: 'form-register'
}
</script>

<style spoced>
.register {
  width: 350px;
  margin: 250px auto 0;
  background-color: #3c6086 ;
}
.lg-title {
  text-decoration-color: white;
  background-color: #375b80;
}
.bt-sign-up {
  border: none;
  background: rgb(0, 195, 255);
  border-radius: 3px;
  padding: 6px;
  width: 200px;
  color: white;
  margin-left: 60px;
  margin-bottom: 10px;
}
.form-group {
  margin: 10px 60px 10px;
  width: 200px;
  height: 35px;
  display: block;
  border: none;
  padding: 0;
  background: white;
  color: #0e6252;
}
.img-pencil {
  height: 50px;
  right: 20px;
  top: 20px;
  position: absolute;
}
.font {
  color: white;
  margin-left: 20px;
  padding: 1px;
  position: relative;
}
</style>
