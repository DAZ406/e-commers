<template>
  <div class="registerContainer">
    <b-card header="your books in the cart:" class="loginCard">
      <b-list-group>
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Cras justo odio
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Cras justo odio
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
        >
          Cras justo odio
          <b-badge variant="primary" pill>14</b-badge>
        </b-list-group-item>
      </b-list-group>

      <p class="card-text mt-2">
        total price: {{ }}
      </p>
    </b-card>
  </div>
</template>

<style scoped>
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
  height: 90.8vh;
  background-image: url("../assets/checkout.jpg");
}
.myButtonGroup {
  display: flex;
  align-content:space-between;
}
</style>
