<template>

<div class="container">
     <div class="container">
         <div class="column is-4 is-offset-4">
             <div class="field">
                <label class="label">House/Block/Lot</label>
                <div class="control">
                    <input class="input" type="text" placeholder="House/Block/Lot" autofocus="" v-model="house_block_lot">
                </div>
            </div>
            <div class="field">
                <label class="label">Street</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Street" autofocus="" v-model="Street">
                </div>
            </div>
            <div class="field">
                <label class="label">Subdivision/Village</label>
                <div class="control">
                    <input class="input" type="tel" placeholder="Subdivision/Village" autofocus="" v-model="subdivision_village">
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
                <label class="label">Province</label>
                <div class="control">
                    <input class="input" type="tel" placeholder="Province" autofocus="" v-model="province">
                </div>
            </div>
            <div class="field">
                <label class="label">Zip Code</label>
                <div class="control">
                    <input class="input" type="tel" placeholder="Zip Code" autofocus="" v-model="zip_code">
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
            house_block_lot: "",
            street : "",
            subdivision_village: "",
            city_municipality: "",
            barangay: "",
            province: "",
            zip_code: "",
        } 
    },
    methods: {

        register(){
            const url = "";

            let data = new FormData();
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

            if(this.house_block_lot == "ken"){

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