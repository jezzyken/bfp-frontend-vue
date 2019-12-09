<template>

<div class="container">
     <div class="container">
         <div class="column is-4 is-offset-4">
             <div class="field">
                <label class="label">Establishment Permit</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Establishment Permit" autofocus="" v-model="establishment_permit">
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
            establishment_permit: "",

        } 
    },
    methods: {

        register(){
            const url = "";

            let data = new FormData();
            data.append('establishment_permit', this.establishment_permit);

            axios.post(url, data).then(response =>{
                console.log(response)
            }).catch(error =>{
                console.log(error.response);
            })
            
            if(this.establishment_permit == "ken"){

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