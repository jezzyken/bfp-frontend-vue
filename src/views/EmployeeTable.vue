<template>

<div class="container">
     <div class="table-container">
         <div class="column">
            <div class="columns is-centered">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Middle Name</th>
                            <th>Name Extension</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Civil Status</th>
                            <th>Citizenship</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>ID</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Middle Name</td>
                            <td>Name Extension</td>
                            <td>Date of Birth</td>
                            <td>Gender</td>
                            <td>Civil Status</td>
                            <td>Citizenship</td>
                            <td>
                                <p class="buttons">
                                <button class="button is-primary">
                                    <span class="icon">
                                    <i class="fab fa-twitter"></i>
                                    </span>
                                    <span id="show-modal" @click="showModal = true" >Edit</span>
                                </button>
                                <button class="button is-success">
                                    <span class="icon is-small">
                                    <i class="fas fa-check"></i>
                                    </span>
                                    <span>Delete</span>
                                </button>
                                </p>
                            </td>
                        </tr>
                    </tbody>                 
                </table>
            </div>

        </div>
     </div>



    
 <div :class="{ 'is-active': showModal }" class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
    Lorem, ipsum dolor sit amet  
  </div>
  <button class="modal-close is-large" aria-label="close" @click="showModal = false"></button>
</div>
      
    <button id="show-modal" @click="showModal = true">Show Modal52</button>
  <!-- use the modal component, pass in the prop -->

</div>
    
</template>

<script>

/* eslint-disable */

import axios from 'axios'
import Swal from 'sweetalert2'

export default {  
    components: {
    },

    data(){
        return{
             showModal: false
        } 
    }
}
</script>

<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}



</style>