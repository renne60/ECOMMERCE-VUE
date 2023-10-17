<template>
  <div>
    <router-link to="/ViewCarrito">
      <img
        class="w-12 h-12 cursor-pointer ..."
        src="../assets/cart.png"
        width="30"
        height="30"
        @click="boton"
    /></router-link>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {},
  data() {
    return {
      mostrar: false,
    };
  },

  methods: {
    boton: function () {
      if (this.mostrar == true) this.mostrar = false;
      else this.mostrar = true;
    },
  },
};
</script>