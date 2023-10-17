<template>
  <div class="banner">
    <div class="capa"></div>
    <div class="info">
      <h1>Bienvenido: {{user?.username}} </h1>
      <p>Las mejores ofertas y productos los encontraras aca.</p>
    </div>
  </div>
</template>

<script>
import { reactive,ref } from '@vue/reactivity';
import { onMounted } from 'vue';
import {getFromLocalStorage } from '../utils/utlis';
export default {
  name: "Banner",
}
</script>
<script setup>
const user = ref(null)
let datos = reactive({
    identifier:'',
})
const handleUser = async () => {

    getFromLocalStorage("user")
    // await DataUser({datos})
    user.value = getFromLocalStorage("user")
    console.log(datos)
}
onMounted(handleUser)
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.banner{
  width: 100%;
  height: 100vh;
  animation: banner 10s infinite linear alternate;
  background-size: 100% 100%;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info h1{
  color: white;
  font-size: 45px;
  margin-bottom: 20px;
  letter-spacing: 1px;
}
.info p{
  color: #c7c7c7;
  line-height: 1.7;
  margin-bottom: 30px;
}
@keyframes banner{
  0%, 20%{
    background-image: url(../assets/Professional\ E-Commerce\ Shoes\ Banner\ Design.jpg);
  }
    25%, 45%{
    background-image: url(../assets/2.png);
  }
    50%, 70%{
    background-image: url(../assets/3.png);
  }
      75%, 100%{
    background-image: url(../assets/4.png);
  }

}
.capa{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}
.info{
  z-index: 1;
  width: 100%;
  max-width: 550px;
  text-align: center;
}
</style>