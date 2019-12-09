<template>

<div class="container">
     <div class="container">
         <div class="column is-4 is-offset-4">
             <div class="field">
                <label class="label">Establishment Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Establishment Name" autofocus="" v-model="establishment_name">
                </div>
            </div>
              <div class="field">
                <label class="label">Establishment Type</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Establishment Type" autofocus="" v-model="establishment_type">
                </div>
            </div>
              <div class="field">
                <label class="label">Establishment Address</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Establishment Address" autofocus="" v-model="establishment_address">
                </div>
            </div>
             <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" v-on:click="register">Submit</button>
                </div>
            </div>
        </div>
     </div>
</div>
    
</template>

<script>

import axios from 'axios'
import Swal from 'sweetalert2'

/* eslint-disable */

export default {  
    data(){
        return{
            establishment_name: "",
            establishment_type: "",
            establishment_address: ""
        } 
    },
    methods: {

        register(){
            const url = "";

            let data = new FormData();
            data.append('establishment_name', this.establishment_name);
            data.append('establishment_type', this.establishment_type);
            data.append('establishment_address', this.establishment_address);

            axios.post(url, data).then(response =>{
                console.log(response)
            }).catch(error =>{
                console.log(error.response);
            })
            
            if(this.establishment_name == "ken"){

                Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
                )

            }else{

                Swal.fire(
                'Good job!',
                'You clicked the button!',
                'error'
                )
            }

        }
    }
}
</script>


<style scoped>

</style>