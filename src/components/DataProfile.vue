<template>
  <div class="datapro container">
      <!-- <div class="datas">
          <Icon icon="entypo:back-in-time" :horizontalFlip="true" width="80" />
        <router-link to="/Historial" class="btndatas">
        Historial</router-link> 
      </div>
            <div class="datas">
          <Icon icon="raphael:fave" color="white" :horizontalFlip="true" width="80" />
        <router-link to="/Register" class="btndatas">
        Favoritos</router-link> 
      </div> -->
      <div class="datas">
          <Icon icon="akar-icons:edit" color="white" :horizontalFlip="true" width="80" />
        <router-link to="/Editprofile"  class="btndatas" >
        Editar Perfil</router-link> 
      </div>
      <div class="datas">
          <Icon icon="ci:user-close" color="white" :horizontalFlip="true" width="80" />
        <a href="Javascript:Void:(0);" v-on:click="cerrarsesion();"><router-link to="/Login" class="btndatas">
        Cerrar Sesión</router-link></a> 
      </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
	components: {
		Icon,
	},
  methods:{
    cerrarsesion(){
      localStorage.clear();
      this.$router.push("/login")
    }
  }
}


</script>

<style>
.datapro{
  display: flex;
  justify-content:space-between ;
}
.datas{
    display: flex;
    width: 250px;
    height: 170px;
    background-color: #62d1d1;
    justify-content: center;
    align-items: center;
    color: #f0f0f0;
    border-radius: 50px;
    padding: 10px;
    margin: 10px;  
}
.datas .btndatas{
    color: #f0f0f0;
    text-decoration: none;  
    font-size: 1.5rem; 
}
</style>