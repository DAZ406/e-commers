<template>
  <div class="registerContainer">
    <b-card
      header="Create your new KoobABook acount!"
      header-bg-variant="primary"
      header-text-variant="warning"
      align="center"
      class="loginCard"
    >
    <p> Please enter your acount information </p>
      <b-form-group
        label="USERNAME"
        label-for="nested-street"
        label-cols-sm="3"
        label-align-sm="right"
        class="myFormForUser"
      >
        <b-form-input v-model="username" class="myUserInput"></b-form-input>
      </b-form-group>

      <b-form-group
        label="PASSWORD"
        label-for="nested-city"
        label-cols-sm="3"
        label-align-sm="right"
        class="myFormForUser"
      >
        <b-form-input v-model="password" class="myUserInput"></b-form-input>
      </b-form-group>
      <b-button-group class="myButtonGroup">
      <b-button pill variant="outline-info" to="/">Log In</b-button>
      <b-button pill variant="success" @click="signIn">Sign In</b-button>
    </b-button-group>
    </b-card>
    
  </div>
</template>

<script>
import router from '@/router';
import { addNewUser } from '../axios/axiosFunctions';
import Swal from 'sweetalert2';

export default {
  name: "SignIn",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async signIn() {
      try{
      await addNewUser(this.username, this.password);
       Swal.fire({
          title: "Wellcome to the site!",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "success",
        });
      router.push('/');
      } catch(err) {
         Swal.fire({
          title: "Try Another Username, Or Check That you submited all the information",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "error",
        });
      }
    },
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
  box-shadow: 2px 1px 12px 12px black;
}
.registerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../assets/signing.jpg");
}
.myFormForUser {
  margin: 15px;
}
.myButtonGroup {
  display: flex;
  align-content:space-between;
}
</style>