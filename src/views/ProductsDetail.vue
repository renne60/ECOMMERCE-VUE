<template>
  <div >
 <!-- <ProductsDetailPage :producto="producto"> </ProductsDetailPage> -->
 <pre>{{producto}}</pre>
 <div class="grid-x grid-margin-x producto">
      <div class="cell small-12">
          <img :src="`https://blooming-stream-18181.herokuapp.com${producto.attributes.image.data.attributes.url}`" 
          class="producto__img"
          :alt="`imagen ${productos.attributes.name}`">
      </div>
      <div class="cell small-12">
          <h3 class="producto__title">{{ productos.attributes.name }}</h3>
           <p class="producto__stocks">
              <span class="producto__stocks__stock">{{ productos.attributes.stock }}</span>
          </p>  
          <p class="producto__price">{{ productos.attributes.price }} </p>
          <div class="cell small-12">
              <p class="producto__descriptions"> {{ productos.data.attributes.descriptions }} </p>
          </div>
      <div class="fav">
      <button class="btn btn-dark" @click="favorito(productos)">
        <Icon icon="carbon:favorite" color="red" width="30" height="20" class="favo" />
      </button>
  
      </div>
      <div>
      <button class="btn btn-dark" @click="comprar(productos)">Comprar</button>
      </div>

      </div>
  </div>
  </div>
</template>

<script>
// import ProductsDetailPage from "../components/ProductsDetailPage.vue"
import { useRoute } from 'vue-router'
import {searchproducts} from '../utils/utlis.js'
import { onMounted } from '@vue/runtime-core'
import { useStore } from "vuex";
import { Icon } from '@iconify/vue';
export default {
      name:'ProductsDetail',
    props: ["producto"],
  components:{
    // ProductsDetailPage,
    Icon,

  },
  setup(){
      const store = useStore();
    const comprar = (productos) => {
      console.log(productos)
      store.dispatch("agregarCarrito", productos);
    };
    const route = useRoute()
    console.log(route)
    const id = route.params.id
    
    let producto;

    const getproducto= async() =>{
    producto = await searchproducts(id) 
    console.log(producto)
    }
       const favorito = (productos) => {
      console.log(productos)
      store.dispatch("agregarFavorito", productos);
    };
    onMounted(getproducto)

    return producto,comprar, favorito
  }
}
</script>

<style>

</style>