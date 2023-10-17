<template>
  <div>
    <ol class="list-group list-group-numbered">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">
            <Carrito></Carrito>
          </div>
        </div>
        <span class="badge bg-primary rounded-pill"></span>
      </li>
    </ol>
  </div>
</template>

<script>
import Carrito from "./Carrito.vue";
export default {
  name: "Lista",
  components: {
    Carrito,
  },
};
</script>