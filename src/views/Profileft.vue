<template>
  <div></div>

    <div>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <input type="file" @change="uploadFile" multiple>
                <img :src="src" alt="Avatar" class="avatr">
            </div>

            <div class="form-group">
                <button class="btn btn-success btn-block btn-lg">Upload</button>
            </div>
        </form>
    </div>    
  </div>
</template>

<script>
export default {
    data(){
        return{
            file:null,
            src:null,
        }
    },
    methods:{
        uploadfile(event){
            this.files = event.target.files
        },
        handleSubmit(){
            const formData = new FormData();
            for(const i of Object.keys(this.files)){
                formData.append('files', this.files[i])
            }
            
        }
    }
}
</script>

<style>
.avatr{
    width: 24px;
    height: 24px;
    border-radius: 50%;
}
</style>