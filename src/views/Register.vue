<template>
<div>
  <NavBar></NavBar>
</div>

  <div class="container sign-up-mode">
    <div class="forms-container">
      <div class="signin-signup" v-if="!user" @submit="handleSumit" >
  <!-- FORMULARIO DE REGISTRO -->
         <form class="sign-in-form">
          <h2 class="title">Sign in</h2>
          <div class="input-field">
            <i><Icon icon="bx:user-circle" color="#acacac" /></i>
            <input type="text" placeholder="User Name" v-model="credentials.username">
          </div>
          <div class="input-field"> 
            <i><Icon icon="clarity:email-line" color="#acacac" /></i>
            <input type="email" placeholder="Your Email" v-model="credentials.email">
          </div>          
           <div class="input-field">
           <i><Icon icon="carbon:password" color="#acacac" /></i> 
            <input type="password" placeholder="Password" v-model="credentials.password">
          </div>
           <input type="submit" class="btn solid" value="Continue" />
           <p class="social-text">Siguenos en nuestras redes sociales</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <Icon icon="akar-icons:facebook-fill" color="#61ffff" />
                  </a>
                  <a href="#" class="social-icon">
                    <Icon icon="akar-icons:instagram-fill" color="#61ffff" />
                  </a>
                  <a href="#" class="social-icon">
                    <Icon icon="akar-icons:twitter-fill" color="#61ffff" />
                  </a>
                  <a href="#" class="social-icon">
                    <Icon icon="akar-icons:linkedin-box-fill" color="#61ffff" />
                  </a>
                </div>
        </form>
      </div>
    </div>
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>Ya tienes cuenta en nuestra tienda?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aperiam?</p>
          <button class="btn transparent" id="sign-up-btn"><router-link to="/login" class="register">SIGN IN</router-link></button>
        </div>
        <img src="/6333055.svg"  class="image" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
    components:{
        NavBar,
    }
}
</script>
<script setup>
import NavBar from "../components/Navbar.vue";
import { reactive, ref } from '@vue/reactivity';
import { authRegister } from "../utils/utlis.js";
import { Icon } from '@iconify/vue';


const user = ref(null)
const credentials = reactive({
    email: '',
    password:'',
    username:'',
    Icon,
})
const handleSumit = async (e) => {
    e.preventDefault()
    await authRegister({...credentials})
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,800;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body, input{
  font-family: 'Poppins', sans-serif;
}
.container{
  position:relative;
  width: 100%;
  min-height: 100vh;
  background-color: #ffff;
  overflow: hidden;
}
.container:before{
  content:'';
  position: absolute;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background-image: linear-gradient(-45deg, #84fab0 , #8fd3f4);
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  z-index: 6;
  transition: 1.8 ease-in-out;
}
.forms-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
}

.signin-signup{
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 /2 ;
}
form.sign-in-form{
  z-index: 2;
}
form.sign-up-form{
  z-index: 2;
  opacity: 0;
}

.title{
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field{
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 .4rem;
}

.input-field i{
  text-align: center;
  line-height: 55px;
  font-size: 1.1rem;
}

.input-field input{
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}
.input-field input::placeholder{
  color: #aaa;
  font-weight: 500;
}

.btn{
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: #61ffff;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: .5s;
}

.btn:hover{
  background-color: #62d1d1;
}
.socail-text{
  padding: .7rem 0;
  font-size: 1rem;
}
.social-media{
  display: flex;
  justify-content: center;
}
.social-icon{
  height: 46px;
  width: 46px;
  border: 1px solid #3333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-size: 1.1rem;
  border-radius: 50% ;
  transition: 0.3s;
}

.social-icon:hover{
  color: #62d1d1;
  border-color: #62d1d1;
}

.panels-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.panel{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 7;
}
.left-panel{
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}
.right-panel{
  pointer-events:none;
  padding: 3rem 12% 2rem 17%;
}
.panel .content{
  color: #fff;
}
.panel h3{
  font-weight:600;
  line-height: 1;
  font-size: 1.5rem;
}
.panel p{
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent{
  margin: 0;
  background: none;
  border: 2px solid #ffff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}
.register{
  color: #f0f0f0;
}

.image{
  width: 100%;
}

.right-panel .content, .right-panel .image{
  transform:translateX(800px);
}
</style>