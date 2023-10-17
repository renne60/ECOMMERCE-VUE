<template>
<div v-if="user">
  <p>ID:{{user?.id}}</p>
  <p>Usuario:{{user?.username}}</p>
  <p>correo:{{user?.email}}</p>
  </div>
    
</template>

<script>
import { reactive,ref } from '@vue/reactivity';
import { onMounted } from 'vue';
import {getFromLocalStorage } from '../utils/utlis';
export default {
    name:"NameProfile",

}
</script>
<script setup>
const user = ref(null)
let datos = reactive({
    id:'',
    identifier:'',
    email:'',
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

</style>