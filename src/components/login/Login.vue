<template>
  <div class="form-login">
    <form name="SignInForm" id="SignInForm" method="post" class="login">
      <div>
        <form name="Title" id="Title" class="lg-title">
          <div class="font">
            <h4>Login to our site</h4>
            <h5>Enter username and password to log on:</h5>
            <img src="../../assets/lock-black.svg" class="img-lock-black">
          </div>
        </form>
      </div>

      <div class="form-group">
        <input type="text" placeholder="Username" class="lg-username" >
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" class="lg-password">
      </div>
      <div>
        <button class="bt-sign-in">Sign in!</button>
      </div>
     </form>
  </div>
</template>

<script>
export default {
  name: 'form-login'
}
</script>

<style spoced>
.login {
  width: 350px;
  margin: 250px auto 0;
  background-color: #3c6086;
  position: relative;
}
.lg-title {
  text-decoration-color: white;
  background-color: #375b80;
}
.bt-sign-in {
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
  width: 100%;
  height: 35px;
  display: block;
  border: none;
  padding: 0;
  background: white;
  color: #0e6252;
}
.img-lock-black {
  height: 50px;
  right: 20px;
  top: 20px;
  position: absolute;
}
.font {
  color: white;
  margin-left: 20px;
  padding: 1px;
}
</style>
