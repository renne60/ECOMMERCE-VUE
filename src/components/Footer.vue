<template>
  <th scope="row" colspan="2">Total productos</th>
  <td>{{ totalCantidad }}</td>
  <div>
    <td class="font-weight-bold">
      $ <span>{{ totalPrecio }}</span>
    </td>
  </div>
  <div>
    <div>
      <td>
        <button
          type="button"
          class="btn btn-success"
          id="vaciar-carrito"
          @click="vaciar"
        >
          vaciar
        </button>
      </td>
      <td>
        <!--<button type="button" class="btn btn-outline-info">-->
        <router-link to="/ViewCarrito" class="btn btn-outline-info">
          Finalizar</router-link
        >
        <!-- </button>-->
      </td>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const totalCantidad = computed(() => store.getters.totalCantidad);
    const totalPrecio = computed(() => store.getters.totalPrecio);
    const vaciar = () => {
      store.commit("setVaciar");
    };

    return { totalCantidad, totalPrecio, vaciar };
  },
};
</script>