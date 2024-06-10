<template>
  <div>
    <b-list-group horizontal id="itemList">
      <b-list-group-item v-for="item in itemsForList" :key="item.id">
        <h1>{{item.header}}</h1>
        <span>{{item.text}}</span>
      </b-list-group-item>
    </b-list-group>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="itemList"
      align="center"
    ></b-pagination>
  </div>
</template>
<script>
export default {
    data() {
 return { currentPage: 1,
  perPage: 3,
  date: [
    {
      header: 'item 1',
      text: '❤️',
      id: 1,
    },
    {
      header: 'item 2',
      text: '🗿',
      id: 2,
    },
    {
      header: 'item 3',
      text: '⛺️',
      id: 3,
    },
    {
      header: 'item 4',
      text: '🌄',
      id: 4,
    },
    {
      header: 'item 5',
      text: '💎',
      id: 5,
    },
    {
      header: 'item 6',
      text: '⏳',
      id: 6,
    },
    {
      header: 'item 7',
      text: '🧱',
      id: 7,
    },
  ],
  }
    },
  computed: {
    itemsForList() {
    return this.date.slice(
      (this.currentPage - 1) * this.perPage,
      this.currentPage * this.perPage,
    );
  },
  rows() {
    return this.date.length;
  }
  }
  
}
</script>

<style>
#itemList {
    display: flex;
    justify-content: space-evenly;
    align-content:center;
}
</style>