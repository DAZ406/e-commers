<template>
  <div class="accordion" role="tablist">
    <order-card v-for="order in this.orders" :key="order.id" :order="order" />
  </div>
</template>

<script>
import OrderCard from "../components/OrderCard.vue";
import { getOrdersOfUser, validateToken } from "../axios/axiosFunctions";
import Swal from "sweetalert2";

export default {
  components: {
    OrderCard,
  },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    await this.displayOrders();
  },
  methods: {
    async displayOrders() {
      try {
        this.orders = (
          await getOrdersOfUser(
            (
              await validateToken(localStorage.getItem("token"))
            ).data.user.id
          )
        ).data;
        console.log(this.orders);
      } catch (err) {
        Swal.fire({
          title:
            "We had a problem finding your history. Make sure that you are signed-in!",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style>
.accordion {
  margin-top: 20px;
}
</style>
