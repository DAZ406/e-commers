<template>
  <div class="home">
    <BookCard/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BookCard from '@/components/BookCard.vue'

export default {
  name: 'HomeView',
  components: {
    BookCard
  }
}
</script>
