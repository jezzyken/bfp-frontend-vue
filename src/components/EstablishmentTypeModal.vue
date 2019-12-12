<template>
        <div class="modal" :class="{ 'is-active': isModalActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">New Establishment Type</p>
                <button class="delete" aria-label="close" @click="isModalActive = false"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label">Establishment Type</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Establishment Type" autofocus="" v-model="establishment_type">
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

        establishment_type: "",

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
            data.append('establishment_permit', this.establishment_type);

            axios.post(url, data).then(response =>{
                console.log(response)
            }).catch(error =>{
                console.log(error.response);
            })
            
            if(this.establishment_type == "ken"){

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
