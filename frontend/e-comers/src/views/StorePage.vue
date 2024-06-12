<template>
  <div>
    <b-list-group horizontal id="itemList">
      <b-list-group-item class="goldy" v-for="item in itemsForList" :key="item.id">
        <book-card :book="item"/>
      </b-list-group-item>
    </b-list-group>
    <div class="pagBar">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
    ></b-pagination>
    </div>
  </div>
</template>
<script>
import { getAllProducts } from "../axios/axiosFunctions";
import BookCard from '../components/BookCard.vue';
export default {
  data() {
    return { currentPage: 0, perPage: 0, books: [] };
  },
   components: {
    BookCard
  },
  async created() {
    await this.createTheList();
  },
  methods: {
    async createTheList() {
      this.currentPage = 1;
      this.perPage = 3;
      this.books = (await getAllProducts()).data;
    },
  },
  computed: {
    itemsForList() {
      return this.books.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
    rows() {
      return this.books.length;
    },
  },
};
</script>

<style>
#itemList {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
.goldy {
 background-color: gold !important;
 border-color: brown !important;
}
.pagBar {
    margin-top: 100px !important;
}
</style>
