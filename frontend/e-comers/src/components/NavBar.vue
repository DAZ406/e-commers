<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="myNavBar">
      <b-navbar-brand class="myLogo">KoobAbooK</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="myNavBarCobtrolle">
        <b-navbar-nav>
          <b-nav-item class="myLink" to="/store">Store Page</b-nav-item>
          <b-nav-item class="myLink" to="/checkout">Cashier</b-nav-item>
          <b-badge variant="light">
            <span>
              <b-icon icon="cart3" font-scale="2" variant="light"></b-icon
            ></span>
            {{ getCartLength }}
          </b-badge>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <div>
            <b-button pill variant="outline-success" v-b-toggle.sidebar-right
              ><b-icon
                icon="person-lines-fill"
                font-scale="2"
                variant="light"
              ></b-icon
            ></b-button>
            <b-sidebar
              id="sidebar-right"
              bg-variant="dark"
              text-variant="warning"
              backdrop
              right
              shadow
            >
              <h3 v-if="!getCurrUser" class="myLink">Wait! Who are you?</h3>
              <h3 v-else class="myLink">
                Wellcome Back {{ getCurrUsersUserName }}!
              </h3>
              <div class="px-3 py-2">
                <p>What would you like to do today?</p>
                <nav class="mb-3" v-if="getCurrUser">
                  <b-nav vertical>
                    <b-nav-item to="/change-profile">Update profile</b-nav-item>
                    <b-nav-item to="/history">Order history</b-nav-item>
                    <b-nav-item @click="deleteUser">Delete profile</b-nav-item>
                    <b-nav-item @click="disconect">Disconnect</b-nav-item>
                  </b-nav>
                </nav>
                <nav class="mb-3" v-else>
                  <b-nav vertical>
                    <b-nav-item to="/sign-in">Sign in!</b-nav-item>
                    <b-nav-item to="/">Log in!</b-nav-item>
                  </b-nav>
                </nav>
              </div>
            </b-sidebar>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { validateToken, deleteUser } from "../axios/axiosFunctions";
import Swal from "sweetalert2";
import router from "../router/index";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "NavBar",
  async created() {
    await this.createNavBar();
  },
  methods: {
    ...mapActions(["deleteCurrUserAction", "changeCurrUserAction"]),
    async createNavBar() {
      try {
        const username = (await validateToken(localStorage.getItem("token")))
          .data.user.username;
        this.changeCurrUserAction({ username: username });
      } catch (err) {
        Swal.fire({
          title:
            "You didnt register! We advise you to log-in or create a new acount!",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "warning",
        });
      }
    },
    disconect() {
      this.deleteCurrUserAction();
      localStorage.removeItem("token");
      router.push("/");
    },
    async deleteUser() {
      try {
        await deleteUser(localStorage.getItem("token"));
        Swal.fire({
          title: "Goodbye, we will miss you",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "success",
        });
        this.disconect();
      } catch (err) {
        Swal.fire({
          title:
            "There was a in recognising your user! We advise you to log again or create a new acount!",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "error",
        });
      }
    },
  },
  computed: {
    ...mapGetters(["getCartLength", "getCurrUser", "getCurrUsersUserName"]),
  },
};
</script>

<style>
.myNavBarCobtrolle {
  display: flex !important;
  justify-content: space-between !important;
}
.myLogo {
  padding: 10px;
  color: goldenrod !important;
  font-style: italic;
  font-weight: bold;
}
.myLink {
  font-family: cursive;
  font-weight: bold;
}
</style>
