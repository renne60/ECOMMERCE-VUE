<template>
  <div class="my-5">
    <h4>Tu lista de Favoritos</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <!-- <th scope="col">Acción</th>
          <th scope="col">Total</th> -->
        </tr>
      </thead>
      <tbody id="items">
        <ItemsFav v-for="item in favorito" :key="item.id" :item="item" />
      </tbody>

    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ItemsFav from "./ItemsFav.vue";

export default {
  components: { ItemsFav},
  setup() {
    const store = useStore();
    const favorito = computed(() => store.state.favorito);

    return { favorito };
  },
};
</script>