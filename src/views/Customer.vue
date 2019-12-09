<template>

<div class="container">
     <div class="container">
         <div class="column is-4 is-offset-4">
             <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="First" autofocus="" v-model="first_name">
                </div>
            </div>
            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Your Email" autofocus="" v-model="last_name">
                </div>
            </div>
            <div class="field">
                <label class="label">Phone Number</label>
                <div class="control">
                    <input class="input" type="tel" placeholder="Your Email" autofocus="" v-model="phone_number">
                </div>
            </div>
            <div class="field">
                <label class="label">telephone Number</label>
                <div class="control">
                    <input class="input" type="tel" placeholder="Your Email" autofocus="" v-model="telephone_number">
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
            first_name: "",
            last_name: "",
            phone_number: "",
            telephone_number: ""
        } 
    },
    methods: {

        register(){
            const url = "";

            let data = new FormData();
            data.append('email', this.email);
            data.append('password', this.password);
            data.append('first_name', this.first_name);
            data.append('last_name', this.last_name);

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