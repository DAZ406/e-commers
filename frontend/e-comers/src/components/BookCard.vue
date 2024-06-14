<template>
  <b-card
    img-src="https://www.cityofboise.org/media/14754/shutterstock_523462210.jpg?width=1200&mode=max&upscale=false"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
    body-bg-variant="info"
    footer-bg-variant="secondary"
  >
    <b-card-title class="text-center myTitle"> {{ book.name }} </b-card-title>
    <b-card-text class="text-center">
      <h4 class="myInfoOfBook">Price: {{ book.price }}₪</h4>
      <h5 class="myInfoOfBook">
        In Stock: {{ parseInt(this.book.amount - this.totallProductPurchasedAmount) }}
      </h5>
    </b-card-text>

    <template #footer>
      <b-button @click="showModal" variant="success">Buy Now!</b-button>
      <b-modal ref="my-modal" hide-footer>
        <h3>How much would you like to buy?</h3>
        <b-form-input
          type="number"
          v-model="numberOfBooks"
          placeholder="please enter the amount here"
        ></b-form-input>
        <b-button
          class="mt-3"
          variant="outline-success"
          block
          @click="addItemToCart"
          >BUY BUY BUY!</b-button
        >
      </b-modal>
    </template>
  </b-card>
</template>

<script>
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "BookCard",
  props: {
    book: Object,
  },
  data() {
    return {
      numberOfBooks: 0,
      totallProductPurchasedAmount: 0,
    };
  },
  created() {
    this.findAmountOfProduct();
  },
  methods: {
    ...mapActions(['addToCartAction']),

    findAmountOfProduct() {
      this.totallProductPurchasedAmount = this.getAmountOfProduct(this.book.id);
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    addItemToCart() {
      if (this.numberOfBooks <= 0) {
        Swal.fire({
          title: "You need to buy at least one book!",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "error",
        });
      } else if (parseInt(this.book.amount) - this.totallProductPurchasedAmount - this.numberOfBooks < 0) {
        Swal.fire({
          title: "We dont have that much in the store! try to buy a bit less",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "error",
        });
      } else {
        this.addToCartAction({
          product: this.book,
          purchased_amount: this.numberOfBooks,
        });
        this.totallProductPurchasedAmount += parseInt(this.numberOfBooks);
        Swal.fire({
          title: "An item was plased in your shoping cart!",
          showConfirmButton: true,
          confirmButtonText: "OK",
          icon: "success",
        });
        this.$refs["my-modal"].hide();
      }
    },
  },
  computed: {
    ...mapGetters(['getAmountOfProduct'])
  }
};
</script>

<style>
.myTitle {
  font-family: fantasy;
}
.myInfoOfBook {
  font-family: "Times New Roman", Times, serif;
}
.myAmountModal {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
