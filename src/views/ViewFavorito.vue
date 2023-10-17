<template>
<div class="navbar">
<Navbar></Navbar>
</div>
  
  <div class="Container">
    <Cesta></Cesta>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Cesta from "../components/Favorito.vue";

export default {
  components: {
    Navbar,
    Cesta,
  },
};
</script>
<style>
.navbar{
 margin-top: 25px;
}
</style>