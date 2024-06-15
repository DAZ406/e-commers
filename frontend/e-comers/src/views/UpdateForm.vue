<template>
  <div class="registerContainer">
    <b-card
      header="Lets update your profile!"
      header-bg-variant="primary"
      header-text-variant="warning"
      align="center"
      class="loginCard"
    >
      <p>Please enter your new acount information</p>
      <p>If you dont want to change one of the fileds, just dont fill them!</p>
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
        <b-button pill variant="outline-info" to="/store"
          >I dont want to change anything</b-button
        >
        <b-button pill variant="success" @click="updateProfile"
          >Update my profile</b-button
        >
      </b-button-group>
    </b-card>
  </div>
</template>

<script>
import router from "@/router";
import { updateUser } from "../axios/axiosFunctions";
import Swal from "sweetalert2";
import { mapActions } from "vuex";

export default {
  name: "UpdateForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["changeCurrUserAction"]),
    async updateProfile() {
      if (!this.username && !this.password) {
        Swal.fire({
            title:"You need to fill at least something!",
            showConfirmButton: true,
            confirmButtonText: "OK",
            icon: "warning",
          });
      } else {
        try {
         const newToken = (await updateUser(
            localStorage.getItem("token"),
            this.username,
            this.password
          )).data;
          localStorage.removeItem("token");
          localStorage.setItem('token',`Bearer ${newToken}`);
          this.changeCurrUserAction({username: this.username});
          Swal.fire({
            title: "Profile was updated!",
            showConfirmButton: true,
            confirmButtonText: "OK",
            icon: "success",
          });
          router.push("/store");
        } catch (err) {
          Swal.fire({
            title: "Try Another Username!",
            showConfirmButton: true,
            confirmButtonText: "OK",
            icon: "error",
          });
        }
      }
    },
  },
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
  background-image: url("../assets/update.jpg");
}
.myFormForUser {
  margin: 15px;
}
.myButtonGroup {
  display: flex;
  align-content: space-between;
}
</style>
