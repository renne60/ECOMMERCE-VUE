<template>
<header :class="{'scrolled-nav' : scrolledNav }">
  <nav>
    <div class="branding">
      <span>LOGO</span>
    </div>
    <ul v-show="!mobile" class="navigation">
      <li> <router-link class="link" :to="{name:'Home'}">Home</router-link></li>
       <li> <router-link class="link" :to="{name:'Profile'}">Mi Cuenta</router-link></li>
        <li> <router-link class="link" :to="{name:'ViewFavorito'}"><Icon icon="carbon:favorite-filled" color="white" width="30" height="" /></router-link></li>
         <li> <router-link class="link sizecard" :to="{name:'ViewCarrito'}"><Icon icon="fa:shopping-cart" color="white" width="30" height="" :horizontalFlip="true" /></router-link></li>
    </ul>
    <div class="icon">
      <i v-show="mobile" @click="toggleMobileNav" :class="{'icon-active': mobileNav}" ><Icon icon="ant-design:menu-outlined" color="white" /></i>
    </div>
    <transition name="mobile-nav">     
        <ul v-show="mobileNav" class="dropdown-nav">
      <li> <router-link class="link" :to="{name:'Home'}">Home</router-link></li>
       <li> <router-link class="link" :to="{name:'Profile'}">Mi Cuenta</router-link></li>
        <li> <router-link class="link" :to="{name:'Home'}"><Icon icon="carbon:favorite-filled" color="#62d1d1" width="30" height="" /></router-link></li>
        <!-- <li> <router-link class="link" :to="{name: 'Historial'}">Historial</router-link></li> -->
         <li> <router-link class="link" :to="{name:'ViewCarrito'}"><Icon icon="entypo:shopping-cart" color="#62d1d1" width="30" height="" /></router-link></li>
    </ul>
    </transition>
  </nav>
</header>
  <router-view />
</template>

<script>
// import Cart from "./Cart.vue";
import { Icon } from '@iconify/vue';
export default {
  name: "App",
  data() {
    return{
      scrolledNav:null,
      mobile:null,
      mobileNav:null,
      windowWidth:null,
    }
  },
  created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  updateScroll (){
    const scrollposition = window.scrollY;
    if (scrollposition > 50){
      this.scrolledNav = true;
      return;
    }
    this.scrolledNav = false;
  },
  components: {
    // Cart,
    Icon,
  },
  methods: {
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750 ){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
};
</script>

<style scoped>
header{
  background-color: #62d1d1;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: .5s ease all;
  color: #ffff;
    margin-top: -16px;
}
nav{
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: .5s ease all;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 1140px) {
    max-width:1140px;
  }
}
 ul, .link{
   font-weight: 500;
   color: #fff;
   list-style: none;
   text-decoration: none;
 }
 li{
   text-transform: uppercase;
   padding: 16px;
   margin-left: 16px;
 }
 .link{
   font-size: 14px;
   transition: .5s ease all;
   padding-bottom: 4px;
   border-bottom: 1px solid transparent;
 }
 .link:hover{
   color: #fff;
   border-color: #f0f0f0;
 }
 .branding{
   display: flex;
   align-items: center;
 }
 .navigation{
   display: flex;
   align-items: center;
   flex: 1;
   justify-content: flex-end;
 }
 /* ESTE NADA MAS SE USARA CUANDO LA IMAGEN SEA COLOCADA
 .branding img{
     width: 50px;
     transition: .5 sease all;
   } */
   .icon{
     display: flex;
     align-items: center;
     position: absolute;
     position:absolute;
     top: 0;
     right: 24px;
     height: 100%;
   }
   i .icon{
     cursor: pointer;
     font-size: 24px;
     transition: 0.8s ease all;
   }
   .icon-active{
     transform: rotate(180deg);
   }
   .dropdown-nav{
     display: flex;
     flex-direction: column;
     position: fixed;
     width: 100%;
     max-width: 250px;
     height: 100%;
     background-color: #f0f0f0;
     top:0;
     left: 0;
   }
   li .dropdwon-nav{
     margin-left: 0;
   }
  .dropdown-nav .link{
     color: #000;
   }

   /* .scrolled-nav{
     background-color: #000;
     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
   } */
</style>