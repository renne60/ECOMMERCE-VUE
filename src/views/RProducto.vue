<template>
<Navbar></Navbar>
<MenuDasboard></MenuDasboard>
<h4>REGISTRO DE PRODUCTOS</h4>
<div class="container">
  <form>
      <div class="form-group col-md-6">
        <label for="inputSKUN">SKU</label>
        <input
          type="Text"
          class="form-control"
          id="inputSKU"
          placeholder="SKU"
        />
      </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName2">Name</label>
        <input
          type="text"
          class="form-control"
          id="inputName2"
          placeholder="Name"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="inputPrice">Price</label>
        <input
          type="number"
          class="form-control"
          id="inputPrice"
          placeholder="Price"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="inputDescripcion">Descripcion</label>
      <input
        type="text"
        class="form-control"
        id="inputDescripcion"
        placeholder="Descripcion"
      />
    </div>
    <div class="form-group col-md-6">
        <label for="inputPrice">STOCK</label>
        <input
          type="number"
          class="form-control"
          id="inputstock"
          placeholder="stock"/>
      </div>
       <div class="form-group col-md-6">
        <label for="inputPrice">Fecha de Entrada</label>
        <input
          type="Date"
          class="form-control"
          id="inputfentrada"
          />
      </div>
       <div class="form-group col-md-6">
        <label for="inputPrice">Categoria</label>
        <input
          type="text"
          class="form-control"
          id="inputCategoria"
          placeholder="Categoria"/>
      </div>
      <p></p>
   <div>
    <button type="submit" class="btn btn-primary">Registrar</button>
    </div>
  </form>
 </div>

</template>
<script>
import Navbar from "../components/Navbar.vue";
import MenuDasboard from '../components/MenuDashboard.vue'
export default {
    Componet: {
        Navbar
    },
    components: { Navbar, 
    MenuDasboard
    
    
    
    }
}
</script>
<style>


</style>