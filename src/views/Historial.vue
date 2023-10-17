<template>
<Navbar></Navbar>
<div>
    <h4>Historial de compras</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Cantidad</th>
          <th scope="col"></th> 
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody id="items">
        <Items v-for="item in carrito" :key="item.id" :item="item" />
      </tbody>
    </table>
    <BtnELIMINAR></BtnELIMINAR>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Items from "../components/ItemsH.vue";
import Navbar from "../components/Navbar.vue";
import BtnELIMINAR from "../components/BtnELIMINAR.vue";
export default {
  components: { Items, Navbar, BtnELIMINAR },
  setup() {
    const store = useStore();
    const carrito = computed(() => store.state.carrito);

    return { carrito };
  },
};
</script>

<style>

</style>