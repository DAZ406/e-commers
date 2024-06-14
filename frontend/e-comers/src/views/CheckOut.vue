<template>
  <div class="registerContainer">
    <b-card header="Your books in the cart:" header-bg-variant="primary" class="loginCard">
      <b-list-group>
        <b-list-group-item v-for="(book, index) in getCart" :key="book.id"
          class="d-flex justify-content-between align-items-center"
        >
          {{book.product.name}}
         <b-badge class="myBadge1"> Amount: {{book.purchased_amount}}</b-badge>
         <b-badge class="myBadge2"> Totall cost: {{parseInt(book.purchased_amount * book.product.price)}}₪</b-badge>
         <b-button pill variant="outline-danger" @click="deleteFromCartAction(parseInt(index))">Remove Item</b-button>
        </b-list-group-item>
      </b-list-group>

      <p class="card-text mt-2">
        Total price: {{ getTotallPriceOfCart }}₪
      </p>
      <b-button v-if="getCartLength !== 0" squared variant="success" @click="startTransaction">Pay Now!</b-button>
    </b-card>
  </div>
</template>
<script>
import { createNewOrder, addNewOrderProduct, validateToken, updateProductAmount } from '../axios/axiosFunctions';
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "CheckOut",
  methods: {
    ...mapActions(['deleteFromCartAction', 'deleteAllFromCartAction']),
    async startTransaction() {
    try{
      const order_id = (await createNewOrder((await validateToken(localStorage.getItem("token"))).data.user)).data.id;
      await this.getCart.map(async (book) => {
        await addNewOrderProduct(order_id, book.product.id, book.purchased_amount);
        await updateProductAmount(book.product.id, parseInt(book.product.amount - book.purchased_amount));
      });
      this.deleteAllFromCartAction();
       Swal.fire({
          title: "Thank you for the purchase!",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "success",
        });
        this.$router.push("/store");
    } catch (err)  {
       Swal.fire({
          title: "It seems that your validetion isnt working. Log-in or create an acount",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "error",
        });
    }
  }
  },
  computed: {
    ...mapGetters(['getTotallPriceOfCart', 'getCartLength', 'getCart'])
  }
}
</script>


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
.myBadge1 {
  background-color:darkorange;
}
.myBadge2 {
  background-color:darkgreen;
}
</style>