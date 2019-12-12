<template>
        <div class="modal" :class="{ 'is-active': isModalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">New Customer</p>
                <button class="delete" aria-label="close" @click="isModalActive = false"></button>
            </header>
            <section class="modal-card-body">
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
                            <input class="input" type="tel" placeholder="Your Email" autofocus="" v-model="tel_number">
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
                        <label class="label">Establishment Type</label>
                        <div class="control" >
                            <div class="select">
                            <select v-model="selected_establishment_type">
                                <option value="">Select Application Type</option>   
                            </select>
                            </div>
                        </div>
                    </div> 
                    <div class="field">
                        <label class="label">Establishment Permits</label>
                        <div class="control" >
                            <div class="select">
                            <select v-model="selected_establishment_permit">
                                <option value="">Select Establishment Permit</option>
                            </select>
                            </div>
                        </div>
                    </div> 
                </fieldset>

                <fieldset>
                <legend class="label">Address Information</legend>
                <div class="field">
                    <label class="label">House/Block/Lot</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="House/Block/Lot" autofocus="" v-model="house_block_lot">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Street</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Street" autofocus="" v-model="street">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Subdivision/Village</label>
                    <div class="control">
                        <input class="input" type="tel" placeholder="Subdivision/Village" autofocus="" v-model="subdivision_village">
                    </div>
                </div>
                 <div class="field">
                    <label class="label">Province</label>
                    <div class="control">
                        <input class="input" type="tel" placeholder="Province" autofocus="" v-model="province">
                    </div>
                </div>
                <div class="field">
                    <label class="label">City/Municipality</label>
                    <div class="control">
                        <input class="input" type="tel" placeholder="City/Municipality" autofocus="" v-model="city_municipality">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Barangay</label>
                    <div class="control">
                        <input class="input" type="tel" placeholder="Barangay" autofocus="" v-model="barangay">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Zip Code</label>
                    <div class="control">
                        <input class="input" type="tel" placeholder="Zip Code" autofocus="" v-model="zip_code">
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
        tel_number: "",
        status: '',

        establishement_name:[],
        establishment_type:[],
        establishment_permit:[],

        selected_establishment_name: '',
        selected_establishment_permit: '',
        selected_establishment_type: '',

        house_block_lot: "",
        street: "",
        subdivision_village: "",
        city_municipality: "",
        barangay: "",
        province: "",
        zip_code: "",

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
            const url = "http://192.168.254.200:81/api/customers";

            let data = new FormData();
            data.append('phone_number', this.phone_number);
            data.append('tel_number', this.tel_number);
            data.append('first_name', this.first_name);
            data.append('last_name', this.last_name);

            data.append('establishment_name', 'this.selected_establishment_name');
            data.append('establishment_type_id', 1);
            data.append('establishment_permit', 'this.selected_establishemnt_permit');

            data.append('house_block_lot', this.house_block_lot);
            data.append('street', this.street);
            data.append('subdivision_village', this.subdivision_village);
            data.append('city_municipality', this.city_municipality);
            data.append('barangay', this.barangay);
            data.append('province', this.province);
            data.append('zip_code', this.zip_code);

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
