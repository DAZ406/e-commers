<template>
  <b-card no-body class="mb-1" bg-variant="info">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle="String(this.order.id)" variant="secondary">
        <div class="myHistoryButton">
          <p class="myInfoInButton">Order number #{{ this.order.id }}</p>
          <p class="myInfoInButton">Made on {{ convertTheDate }}</p>
          <p class="myInfoInButton">Status: {{ this.order.status }}</p>
        </div>
      </b-button>
    </b-card-header>
    <b-collapse
      :id="String(this.order.id)"
      visible
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <b-card-text
          class="myOrderProduct"
          v-for="orderedProduct in this.orderedProducts"
          :key="orderedProduct.id"
        >
          <b-badge class="myBadge3"
            >Book name: {{ orderedProduct.product.name }}
          </b-badge>
          <b-badge class="myBadge1">
            Amount: {{ orderedProduct.purchased_amount }}
          </b-badge>
          <b-badge class="myBadge2">
            Totall cost:
            {{
              parseInt(orderedProduct.product.price) *
              parseInt(orderedProduct.purchased_amount)
            }}₪</b-badge
          >
        </b-card-text>
        <b-card-text>
          Totall payment: {{ getTotalPriceOfProduct }}₪</b-card-text
        >
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
import { getOrderedProductOfOrder } from "../axios/axiosFunctions";
import Swal from "sweetalert2";

export default {
  name: "OrderCard",
  props: {
    order: Object,
  },
  data() {
    return {
      orderedProducts: [],
    };
  },
  async created() {
    await this.getAllOrderedProducts();
  },
  methods: {
    async getAllOrderedProducts() {
      try {
        this.orderedProducts = (
          await getOrderedProductOfOrder(this.order.id)
        ).data;
      } catch (err) {
        Swal.fire({
          title:
            "We had a problem finding this orders history. We will be fixing the problem in no time!",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "error",
        });
      }
    },
  },
  computed: {
    getTotalPriceOfProduct() {
      let sum = 0;
      this.orderedProducts.map((orderedProd) => {
        sum +=
          parseInt(orderedProd.purchased_amount) *
          parseInt(orderedProd.product.price);
      });

      return sum;
    },
    convertTheDate() {
        let date = new Date(`${this.order.date}`);
      
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      
      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }

      return `${day}-${month}-${year}`;
    },
  },
};
</script>

<style>
.myBadge1 {
  background-color: darkorange;
}
.myBadge2 {
  background-color: darkgreen;
}
.myBadge3 {
  background-color: crimson;
}
.myOrderProduct {
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.myHistoryButton {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.myInfoInButton {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
