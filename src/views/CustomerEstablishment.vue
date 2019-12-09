<template>

<div class="container">
     <div class="container">
         <div class="column is-4 is-offset-4">
             <div class="field">
                <label class="label">Customer Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="First" autofocus="" v-model="first_name">
                </div>
            </div>
            <div class="field">
                <label class="label">Estabishment Name</label>
                <div class="control" >
                    <div class="select">
                    <select>
                        <option value="">Select Establishment</option>
                    </select>
                    </div>
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

/* eslint-disable */

import axios from 'axios'
import Swal from 'sweetalert2'


export default {  
    data(){
        return{

        }
    },
    methods: {

        register(){
            const url = "";

            let data = new FormData();
            data.append('first_name', this.first_name);

            axios.post(url, data).then(response =>{
                console.log(response)
            }).catch(error =>{
                console.log(error.response);
            })
            
            if(this.first_name == "ken"){

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