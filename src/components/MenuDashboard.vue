<template>
<div class="navdddd">
<ul class="nav btn-group-vertical navbar-dark bg-dark">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page"><router-link to="/Proovedor"
                >Proveedores</router-link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page"><router-link to="/RProducto"
                >Producto</router-link></a>
  </li>
   <li class="nav-item">
    <a class="nav-link active" aria-current="page"><router-link to="/"
                >Categoria</router-link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page"><router-link to="/"
                >Usuario</router-link></a>
  </li>
 
</ul>
</div>


</template>
<script>
export default{

}

</script>

<style scoped>
.navdddd{
    width: 150px;
    height: 100px;
    padding: 8
    px;

}


</style>