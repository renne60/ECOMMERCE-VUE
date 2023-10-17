<template>

<button
          type="button"
          class="btn btn-success"
          id="vaciar-carrito"
          @click="vaciar"
        >
          vaciar
        </button>

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