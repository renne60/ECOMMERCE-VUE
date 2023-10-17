<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12 mt-2">
        <h1>Usuarios</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <tabla-usuarios :usuarios="usuarios"/>
      </div>
    </div>
  </div>

    <!-- naaaa -->

  <!-- <div id="app" class="container">
    <div class="row">
      <div class="col-md-12 mt-2">
        <h1>Usuarios</h1>
      </div>
    </div>
  </div>
  <div id="" class="container-fluid">
    <div class="row">
        <div class="col-12">
            <h2>Editar Perfil</h2>
            <div class="form-group"  v-if="user">
                <label for="name">Tu Usuario: {{user?.username}}</label>
                <input id="name" placeholder="Name" type="text" class="form-control">
            </div>
            <div class="form-group">
                <input @click="save()" type="submit" class="btn btn-success" value="Save">
                <a href="#" class="btn btn-info"><router-link to="/Profile" class="btndatas">
        GO BACK</router-link></a>
            </div>
        </div>
    </div>
</div> -->
</template>

<script>
// import { reactive,ref} from '@vue/reactivity';
// import { onMounted } from '@vue/runtime-core';
// import { getFromLocalStorage } from '../utils/utlis';
import TablaUsuarios from '@/components/TablaUsuario.vue';
export default {
    data(){
        return{
            usuarios:[],
        }
    },
    components:{
        TablaUsuarios,
    },
    methods:{
       async getUsuarios(){
           try{
               const response =await fetch('https://blooming-stream-18181.herokuapp.com/api/users');
               this.usuarios = await response.json();
           } catch(error){
               console.error(error)
           }
        },
       async putUsuarios(usuario){
           try{
               const response = await fetch(`https://blooming-stream-18181.herokuapp.com/api/users/${usuario.id}`,{

                   method: 'PUT',
                   body: JSON.stringify(usuario),
                   headers:{'content-type': 'application/json; charrset=UTF-8'},

               });
               const usuarioActualizado = await response.json();
               this.usuarios = this.usuarios.map(u => (u.id === usuario.id ? usuarioActualizado : u));
               }catch(error){console.error(error)}
        },
        mounted(){
            this.getUsuarios();
        }
    }
}

</script>
// <script setup>
// const user = ref(null)
// let datos= reactive({
//     identifier:'',
// })
// const handleUser = async () => {
//     getFromLocalStorage("user")
//     user.value = getFromLocalStorage("user")
//     console.log(datos);
// }
// onMounted(handleUser)
</script>
