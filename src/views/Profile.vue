<template>
    <div class="nav">
        <Navbar></Navbar>
    </div>
    <br>
    <br>
<h2 class="title">Cuenta personal</h2>
  <div class="picprofile"></div>
  <br>
    <br>
    <br>
    <br>
    <profileft></profileft>
  <NameProfile></NameProfile>
  <div class="line"></div>
  <DataProfile></DataProfile>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import DataProfile from "../components/DataProfile";
import NameProfile from "../components/NameProfile.vue";
import Profileft from "../components/Profileft.vue";
export default {
  components: {
    Navbar,
    DataProfile,
    NameProfile, 
    Profileft,
},
}
</script>

<style>

.title{
    margin-top: 35px;
}
.nav{
    margin-top: 10px;
}
.line{

    border: 1px solid #62d1d1;
}
</style>