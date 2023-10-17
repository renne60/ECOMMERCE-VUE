<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.attributes.name }}</td>
    <!-- <td>{{ item.cantidad }}</td> -->
    <td>
      <button
        type="button"
        class="btn btn-outline-success"
      >
        Ver
      </button>
      <button
        type="button"
        class="btn btn-outline-danger"
        @click="disminuir(item.id)"
      >
        Borrar
      </button>
    </td>
    <td>${{ item.attributes.price * item.cantidad }}</td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["item"],
  setup() {
    const store = useStore();

    const disminuir = (id) => {
      store.commit("disminuir", id);
    };
    return {  disminuir };
  },
};
</script>