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
      <h4 class="myInfoOfBook">Price: {{ book.price }}</h4>
      <h5 class="myInfoOfBook">In Stock: {{ book.amount }}</h5>
    </b-card-text>

    <template #footer>
      <b-button @click="showModal" variant="success">Buy Now!</b-button>
      <b-modal ref="my-modal" hide-footer>
        <h3> How much would you like to buy? </h3>
       <b-form-input type="text" v-model="numberOfBooks" placeholder="Enter your name"></b-form-input>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
    </b-modal>
      
    
    </template>
  </b-card>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: Object,
  },
  data() {
    return {
      modalShow: false,
      numberOfBooks: 0
    }
  },
  methods: {
  showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
  }
}
</script>

<style>
.myTitle {
  font-family: fantasy;
}
.myInfoOfBook {
font-family:'Times New Roman', Times, serif;
}
.myAmountModal {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
