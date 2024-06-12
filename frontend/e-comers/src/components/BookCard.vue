<template>
  <b-card
    img-src="https://www.cityofboise.org/media/14754/shutterstock_523462210.jpg?width=1200&mode=max&upscale=false"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
    body-bg-variant="info"
  >
    <b-card-title class="text-center myTitle"> {{ book.name }} </b-card-title>
    <b-card-text class="text-center">
      <h4>Price: {{ book.price }}</h4>
      <h5>In Stock: {{ book.amount }}</h5>
    </b-card-text>

    <template #footer>
      <b-button href="#" variant="success">Buy Now!</b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: Object,
  },
};
</script>

<style>
.myTitle {
  font-family: fantasy;
}
</style>
