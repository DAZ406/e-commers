<template>
  <div class="registerContainer">
    <b-card
      header="WELLCOME TO KoobABook!"
      header-bg-variant="primary"
      header-text-variant="warning"
      align="center"
      class="loginCard"
    >
    <p> Please enter your user information </p>
      <b-form-group
        label="USERNAME"
        label-for="nested-street"
        label-cols-sm="3"
        label-align-sm="right"
        class="myFormForUser"
      >
        <b-form-input type="text" v-model="username" class="myUserInput"></b-form-input>
      </b-form-group>

      <b-form-group
        label="PASSWORD"
        label-for="nested-city"
        label-cols-sm="3"
        label-align-sm="right"
        class="myFormForUser"
      >
        <b-form-input type="password" v-model="password" class="myUserInput"></b-form-input>
      </b-form-group>
      <b-button-group class="myButtonGroup">
      <b-button pill variant="success" @click="checkTheUser">Log In</b-button>
      <b-button pill variant="outline-info" to="/sign-in">Sign In</b-button>
    </b-button-group>
    </b-card>
    
  </div>
</template>

<script>
import router from '@/router';
import { validateUser, validateToken } from '../axios/axiosFunctions';
import Swal from 'sweetalert2';
import { mapActions } from "vuex";

export default {
  name: "LogIn",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  async created() {
    try{
     const user = (await validateToken(localStorage.getItem("token"))).data.user;
      this.changeCurrUserAction({username: user.username});
      router.push('./store');
    } catch(err) {
      this.deleteCurrUserAction();
      this.deleteAllFromCartAction();
    }
  },
  methods: {
    ...mapActions(['deleteCurrUserAction', 'changeCurrUserAction', 'deleteAllFromCartAction']),
    async checkTheUser() {
      try {
      const user = (await validateUser(this.username, this.password)).data;
      localStorage.setItem('token',`Bearer ${user.token}`);
      this.changeCurrUserAction({username: this.username});
      router.push('./store');
      } catch(err) {
        Swal.fire({
          title: "Make sure you put the correct data",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "error",
        });
      }
    }

  }

};
</script>

<style scoped>
.myUserInput {
  max-width: 100%; 
}
.loginCard {
  font-family: monospace;
  width: 80%; 
  max-width: 600px;
  box-shadow: 12px 12px 2px 1px black;
}
.registerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/folder.jpg");
}
.myFormForUser {
  margin: 15px;
}
.myButtonGroup {
  display: flex;
  align-content:space-between;
}
</style>