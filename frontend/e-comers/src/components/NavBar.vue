<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="myNavBar">
      <b-navbar-brand class="myLogo">KoobAbooK</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="myNavBarCobtrolle">
        <b-navbar-nav>
          <b-nav-item class="myLink" to="/store">Store Page</b-nav-item>
          <b-nav-item class="myLink" to="/about">Cashire</b-nav-item>
          <b-badge variant="light">
            <span>
              <b-icon icon="cart3" font-scale="2" variant="light"></b-icon
            ></span>
            9
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
            <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
              <div class="px-3 py-2">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <b-img
                  src="https://picsum.photos/500/500/?image=54"
                  fluid
                  thumbnail
                ></b-img>
              </div>
            </b-sidebar>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.myNavBarCobtrolle {
  display: flex !important;
  justify-content: space-between !important;
}
/* .myNavBar {
  margin-bottom: 30px;
} */
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
