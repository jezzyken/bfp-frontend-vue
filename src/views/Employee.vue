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
                    <input class="input" type="text" placeholder="Last Name" autofocus="" v-model="last_name">
                </div>
            </div>
            <div class="field">
                <label class="label">Middle Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Middle Name" autofocus="" v-model="middle_name">
                </div>
            </div>
             <div class="field">
                <label class="label">Name Extension</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Name Extension" autofocus="" v-model="name_extension">
                </div>
            </div>           
            <div class="field">
                <label class="label">Date of Birth</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Date of Birth" autofocus="" v-model="date_of_birth">
                </div>
            </div>
            <div class="field">
                <label class="label">Gender</label>
                <div class="control" >
                    <div class="select">
                    <select  v-model="selected_gender">
                        <option value="">Select Gender</option>
                        <option v-for="(gender, key) in gender" :key="key" :value="gender.gender">{{gender.gender}}</option>
                    </select>
                    </div>
                </div>
            </div>   
            <div class="field">
                <label class="label">Civil Status</label>
                <div class="control" >
                    <div class="select">
                    <select v-model="selected_civil_status">
                        <option value="">Select Civil Status</option>
                        <option v-for="(civil_status, key) in civil_status" :key="key" :value="civil_status.status">{{civil_status.status}}</option>
                    </select>
                    </div>
                </div>
            </div> 
             <div class="field">
                <label class="label">Citizenship</label>
                <div class="control">
                    <input class="input" type="tel" placeholder="Your Email" autofocus="" v-model="citizenship">
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
            first_name: "",
            last_name: "",
            middle_name: "",
            name_extension: "",
            date_of_birth: "",
            citizenship: "",
            civil_status:[
                    {status: "single"},
                    {status: "married"},
                ],
            gender:[
                    {gender: "Male"},
                    {gender: "Female"},
                ],

            selected_civil_status: "",
            selected_gender: ""


        }
    },
    methods: {

        register(){
            const url = "";

            let data = new FormData();
            data.append('first_name', this.first_name);
            data.append('last_name', this.last_name);
            data.append('middle_name', this.middle_name);
            data.append('name_extension', this.name_extension);
            data.append('date_of_birth', this.date_of_birth);
            data.append('gender', this.selected_gender);
            data.append('civil_status', this.selected_civil_status);
            data.append('citizenship', this.citizenship);

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

            console.log(this.selected_gender);

          

        }
    }
}
</script>


<style scoped>

</style>