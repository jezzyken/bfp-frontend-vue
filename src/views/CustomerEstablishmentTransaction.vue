<template>

<div class="container">
     <div class="container">
         <div class="column is-4 is-offset-4">
            <div class="field">
                <label class="label">Establishment Name</label>
                <div class="control" >
                    <div class="select">
                    <select v-model="selected_establishment_name">
                        <option value="">Select Establishment Name</option>                       
                    </select>
                    </div>
                </div>
            </div> 
            <div class="field">
                <label class="label">Application Type</label>
                <div class="control" >
                    <div class="select">
                    <select v-model="selected_application_type">
                        <option value="">Select Application Type</option>   
                    </select>
                    </div>
                </div>
            </div> 
            <div class="field">
                <label class="label">Establishment Permits</label>
                <div class="control" >
                    <div class="select">
                    <select v-model="selected_establishment_permits">
                        <option value="">Select Establishment Permits</option>
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
           
            establishement_name:[],
            application_type:[],
            establishment_permit:[],

            selected_establishment_name: '',
            selected_establishment_permits: '',
            selected_application_type: ''

        }
    },
    methods: {

        register(){
            const url = "";

            let data = new FormData();
            data.append('establishement_name', this.selected_establishment_name);
            data.append('application_type', this.selected_establishment_permits);
            data.append('establishment_permit', this.selected_application_type);


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