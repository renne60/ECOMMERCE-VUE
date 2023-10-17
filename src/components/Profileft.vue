<template>
  <div class="rz-picter">
      <div class="container">
      <img :src="avatar" class="img-avatar" alt="avantar">
      <input type="file" name="avatar" id="uppic" accept="image/
      jpeg,image/jpg,image/png"
      @change="changeImage($event)" ref="avatarInput" class="uppic"
      >
    </div>
  </div>
    <!-- <div>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <img :src="src" alt="Avatar" class="avatr">
                <input type="file" @change="uploadFile" multiple>
                
            </div>

            <div class="form-group">
                <button class="btn btn-success btn-block btn-lg">Upload</button>
            </div>
        </form>
    </div>    
  </div> -->
</template>

<script>
import { setToLocalStorange } from '../utils/utlis'
export default {
    data(){
        return{
            avatar: require('../assets/profile.svg'),
        }
    },
    methods:{
        changeImage(e){
            const file = e.target.files[0]  // Se obtiene la imagen desde el evento.
            const reader = new FileReader() //El objeto FileReader permite que las aplicaciones web lean ficheros
            const that = this
            reader.readAsDataURL(file)
            reader.onload = function (){// Este evento se activa cada vez que la operación de lectura se ha completado satisfactoriamente.
                that.avatar = this.result
                
            }
            reader.readAsDataURL(file);
            setToLocalStorange()
        }
    }
}
</script>

<style>
.img-avatar{
    width: 240px;
    height: 240px;
    border-radius: 50%;
}
.uppic {
    height: 3rem;
    width: 10.3rem;
    margin: 0 auto;
    /* opacity: 0; */
    z-index: 99999;
    
}
input{
background: none;
color: brown;
}
.rz-picter {
		height: 3rem;
		width: 6rem;
		margin: 15px;
		/* border: 0.01rem solid #ededed; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
 }
</style>