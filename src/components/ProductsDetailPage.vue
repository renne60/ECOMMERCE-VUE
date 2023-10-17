<template>
  <div class="grid-x grid-margin-x producto">
      <div class="cell small-12">
          <img :src="`https://blooming-stream-18181.herokuapp.com${producto.attributes.image.data.attributes.url}`" 
          class="producto__img"
          :alt="`imagen ${producto.attributes.name}`">
      </div>
      <div class="cell small-12">
          <h3 class="producto__title">{{ producto.attributes.name }}</h3>
           <p class="producto__stocks">
              <span class="producto__stocks__stock">{{ producto.attributes.stock }}</span>
          </p>  
          <p class="producto__price">{{ producto.attributes.price }} </p>
          <div class="cell small-12">
              <p class="producto__descriptions"> {{ producto.data.attributes.descriptions }} </p>
          </div>
      <div class="fav">
      <button class="btn btn-dark" @click="favorito(producto)">
        <Icon icon="carbon:favorite" color="red" width="30" height="20" class="favo" />
      </button>
  
      </div>
      <div>
      <button class="btn btn-dark" @click="comprar(producto)">Comprar</button>
      </div>

      </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { Icon } from '@iconify/vue';
export default {
    name:'DetailPageProducts',
    props: ["producto"],
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

<style>

</style>