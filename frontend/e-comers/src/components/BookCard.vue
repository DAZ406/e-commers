<template>
  <div>
  <b-card
    img-src="https://www.cityofboise.org/media/14754/shutterstock_523462210.jpg?width=1200&mode=max&upscale=false"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    body-bg-variant="primary"
  >
    <b-card-title class="text-center"> <h2> name </h2> </b-card-title>
    <b-card-text class="text-center">
      <h4> Price: price </h4>
      <h5> In Stock: amount </h5>
    </b-card-text>

    <b-button href="#" variant="success">Buy Now!</b-button>
  </b-card>
</div>
</template>

<script>
export default {
    name: 'BookCard',
    props: {
    book: Object
  }

}
</script>

<style>

</style>