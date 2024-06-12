<template>
  <div>
    <b-input-group class="mt-3 containerInput">
    <b-form-input type="text" v-model="searchText" placeholder="find your book"></b-form-input>
    <b-input-group-append>
      <b-button variant="info" @click="filterTheBooks"><b-icon icon="search" font-scale="1.5" variant="light"></b-icon
            ></b-button>
    </b-input-group-append>
  </b-input-group>
    <b-list-group horizontal id="itemList">
      <b-list-group-item
        class="goldy"
        v-for="item in itemsForList"
        :key="item.id"
      >
        <book-card :book="item" />
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
import { getAllProducts, filterProducts } from "../axios/axiosFunctions";
import BookCard from "../components/BookCard.vue";
export default {
  data() {
    return { currentPage: 0, perPage: 0, books: [], searchText: '' };
  },
  components: {
    BookCard,
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
    async filterTheBooks() {
      this.books = (await filterProducts(this.searchText)).data;
    }
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
  margin-top: 70px !important;
}
.containerInput {
  max-width: 50%;
  left: 25%;
  margin: 15px;
}
</style>
