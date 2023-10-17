<template>
<Navbar></Navbar>
<MenuDasboard></MenuDasboard>
<h4>REGISTRO DE PROVEEDORES</h4>
<div aling="Center" class="container">
  <form>
      <div class="form-group col-md-6">
        <label for="inputName">Nombre</label>
        <input
          type="Name"
          class="form-control"
          id="inputName"
          placeholder="Nombre"
        />
      </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Email"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="inputphone">Telefono</label>
        <input
          type="password"
          class="form-control"
          id="inputphone"
          placeholder="Telefono"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Direccion</label>
      <input
        type="text"
        class="form-control"
        id="inputAddress"
        placeholder="1234 Main St"
      />
    </div>
    <div class="form-group">
      <label for="inputProduct">Producto</label>
      <input
        type="text"
        class="form-control"
        id="inputProduct"
        placeholder="Producto"
      />
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity" />
      </div>
      <div class="form-group col-md-4">
        <label for="inputState">State</label>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="inputZip">Zip</label>
        <input type="text" class="form-control" id="inputZip" />
      </div>
    </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck" />
        <label class="form-check-label" for="gridCheck"> </label>
      </div>
    </div>
    <p></p>
    <button type="submit" class="btn btn-primary">Registrar</button>
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
