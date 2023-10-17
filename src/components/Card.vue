<template>
  <div class="card">
    <!-- {{producto}} -->
    <img
      :src="`https://blooming-stream-18181.herokuapp.com${producto.attributes.image.data.attributes.url}`"
      :alt="`imagen ${producto.attributes.name}`"
      class="card-img-top"
    />
     <!-- <router-link :to="{name:'ProductsDetail', params:{id: producto.id}}"> -->
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">
        <span>{{ producto.attributes.name }}</span>
      </p>
      <p><span>Stock {{ producto.attributes.stock }}</span></p>
      <p class="card-text">
         <span>Precio {{ producto.attributes.price }}</span>
      </p>
      <div class="fav">
      <button class="btn btn-dark" @click="favorito(producto)">
        <Icon icon="carbon:favorite" color="red" width="30" height="20" class="favo" />
      </button>
  
      </div>
      <div>
      <button class="btn btn-dark" @click="comprar(producto)">Comprar</button>
      </div>
    </div>
    <!-- </router-link> -->
  </div>
</template>

<script>
import { useStore } from "vuex";
import { Icon } from '@iconify/vue';
export default {
  props: ["producto"],
  ruta:String,
  setup() {
    const store = useStore();
    const comprar = (producto) => {
      console.log(producto)
      store.dispatch("agregarCarrito", producto);
    };
    const favorito = (producto) => {
      console.log(producto)
      store.dispatch("agregarFavorito", producto);
    };
    return { comprar, favorito };
  },
  components:{
    Icon,
  }
};
</script>

<style scoped>
body {
  font-family: "Roboto Condensed", sans-serif;
}
body img {
  width: 295px;
  height: 245px;
}
.fav button{
margin: 10px;
background: none;
}
</style>