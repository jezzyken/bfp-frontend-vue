<template>
        <div class="modal" :class="{ 'is-active': isInspectionModalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">For Inspection Order</p>
                <button class="delete" aria-label="close" @click="cancel"></button>
            </header>
            <section class="modal-card-body">

               <fieldset class="box">
                    <legend class="label">Inspector Order</legend>
                    <div class="field">
                        <label class="label">Select Inspector</label>
                        <div class="control" >
                            <div class="select">
                            <select v-model="selected_establishment_name">
                                <option value="">Select Inspector</option>                       
                            </select>
                            </div>
                        </div>
                    </div> 
                </fieldset>


                <fieldset class="box">
                    <legend class="label">Customer Information</legend>
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
                </fieldset>

                <fieldset class="box">
                    <legend class="label">Establishment Information</legend>
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
                </fieldset>
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
        phone_number: "",
        telephone_number: "",
        status: '',

        establishement_name:[],
        application_type:[],
        establishment_permit:[],

        selected_establishment_name: '',
        selected_establishment_permits: '',
        selected_application_type: '',


        selected_inspector: '',


        isInspectionModalActive: false
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
            data.append('email', this.email);
            data.append('password', this.password);
            data.append('first_name', this.first_name);
            data.append('last_name', this.last_name);

            data.append('establishement_name', this.selected_establishment_name);
            data.append('application_type', this.selected_establishment_permits);
            data.append('establishment_permit', this.selected_application_type);

            data.append('inspector', this.selected_inspector);


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
        },
  },
  watch: {
    isActive (newValue) {
      this.isInspectionModalActive = newValue
    },
    isModalActive (newValue) {
      if (!newValue) {
        this.cancel()
      }
    }
  }
}
</script>
