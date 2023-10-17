<template>
  <div id="tabla-usuarios">
    <div v-if="!usuarios.length" class="alert alert-info" role="alert">
      No existen usuarios
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.username }}</td>
          <td>{{ usuario.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
   name: 'tabla-usuarios',
    props: {
       usuarios: Array,
    },
}
</script>
