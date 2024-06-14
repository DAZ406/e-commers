<template>
  <div id="app">
    <nav-bar v-if="$route.path !== '/' && $route.path !== '/sign-in'"></nav-bar>
     <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      mode="out-in"
    >
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
  comments: {
    NavBar
  },
   methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      const delay = 50;
      setTimeout(() => {
        el.style.transition = "opacity 0.5s";
        el.style.opacity = 1;
        done();
      }, delay);
    },
    leave(el, done) {
      el.style.transition = "opacity 0.5s";
      el.style.opacity = 0;
      setTimeout(done, 500);
    }
  }
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color:blueviolet
}

</style>
