<template>
  <div>
    <div>
      <Navbar> </Navbar>
    </div>
    <hr />
    <br><br>
    <Banner> </Banner>
     <br><br><br>
    <div class="row">
      <div
        v-for="producto of productos.data"
        :key="producto.id"
        class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3"
      >
        <Card :producto="producto" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Card from "../components/Card.vue";
//import Carrito from "./components/Carrito";
import Navbar from "../components/Navbar.vue";
import Banner from "../components/Banner.vue";

export default {
  name: "App",
  components: {
    Card,
    //   Carrito,
    Navbar,
    Banner
},
  setup() {
    const store = useStore();
    onMounted(async () => {
      store.dispatch("fetchData");
    });

    const productos = computed(() => store.state.productos);

    return { productos };
  },
};
</script>