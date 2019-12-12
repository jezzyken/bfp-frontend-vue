<template>
        <div class="modal" :class="{ 'is-active': isModalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">New Customer</p>
                <button class="delete" aria-label="close" @click="isModalActive = false"></button>
            </header>
            <section class="modal-card-body">

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

            </section>
            <footer class="modal-card-foot">
            <button class="button is-success" v-on:click="register">Save changes</button>
            <button class="button" @click="cancel">Cancel</button>
            </footer>
        </div>
        </div>

</template>

<script>
/* eslint-disable */
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'ModalBox',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

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
        selected_gender: "",

        isModalActive: false
    }
  },
    methods: {
        cancel () {
        this.$emit('cancel')
        },
        confirm () {
        this.$emit('confirm')
        },
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
        },
  },
  watch: {
    isActive (newValue) {
      this.isModalActive = newValue
    },
    isModalActive (newValue) {
      if (!newValue) {
        this.cancel()
      }
    }
  }
}
</script>
