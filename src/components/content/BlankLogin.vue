<template>
  <div class="loginContent">
    <!-- https://www.thepolyglotdeveloper.com/2018/04/simple-user-login-vuejs-web-application/ -->
    <h3 class="pageSubtitle">{{ pageSubtitle }}</h3>
    <form class="login">
      <div class="componentTitle"><span>Welcome</span><span class="subTitle">mystro | admin</span></div>
      <div class="formWrapper">
        <div class="fromItem">
          <input type="text" v-model="input.username" placeholder="Username" name="Username">
        </div>
        <div class="fromItem">
          <input type="password" v-model="input.password" placeholder="Password" name="Password">
        </div>
      </div>
      <button class="btn btn--login" v-on:click="login()">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'BlankHome',
  data () {
    return {
      pageSubtitle: 'Login',
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'secure' })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
  @import "../../scss/variables";
  @import "../../scss/functions";
  @import "../../scss/mixins";
  @import "../../scss/groups";
  .login{
    @extend %clearFix;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    padding: 32px;
    border-radius: $radius;
    background: $brand-2;
    box-shadow: 5px 5px 0 $rgba-black25;
    .formWrapper{
      margin-bottom: 48px;
    }
    input{
      @include appearencNone;
      width: 100%;
      padding-left: 8px;
      background: transparent;
      border: none;
      border-bottom: 1px solid $brand-3;
      outline: none;
      color: white;
      font-family: #{$baseFont};
      font-size: rem(20px);
      font-weight: 300;
      line-height: 36px;
      &::-webkit-input-placeholder{
        color: white;
      }
    }
  }
  .fromItem{
    margin-bottom: 16px;
    &:last-child{
      margin-bottom: 0;
    }
  }
  .componentTitle{
    margin: 0 0 32px 0;
    padding: 12px 0 12px 8px;
    border-left: 3px solid $brand-3;
    color: white;
    font-size: rem(24px);
    text-transform: uppercase;
    span{
      display: block;
    }
    .subTitle{
      text-transform: none;
      font-size: rem(10px);
    }
  }
  button.btn{
    @include appearencNone;
    width: 100%;
    @media #{$mq-tab} {
      display: block;
      max-width: 220px;
      height: 40px;
      margin: 0 auto;
      border: none;
      border-radius: $radius;
      background: $brand-3;
      color: $brand-1;
      font-family: #{$baseFont};
      font-size: rem(18px);
      font-weight: 300;
      outline: none;
      cursor: pointer;
    }
  }
</style>
