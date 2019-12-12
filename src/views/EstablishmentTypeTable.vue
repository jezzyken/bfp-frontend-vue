<template>

<div class="container">

    <!-- modals -->
    <establishment-type-modal :is-active="isModalActive" @confirm="ConfirmModal" @cancel="CancelModal"/>

     <!-- end of Modals -->

  <!-- Right side -->   
  <div class="column">
    <div class="level-right">
        <p class="level-item" ><a class="button is-success" @click.prevent="DefaultModal()">New</a></p>
     </div>
  </div>
     <div class="table">
         <div class="column">

            <div class="columns">
                
                <table class="table is-fullwidth">
                    
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Establishement Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>Occupancy</td>
                            <td>
                                <p class="buttons">
                                <button class="button is-primary is-small" @click.prevent="DefaultModal()">
                                    <span class="icon">
                                    <i class="fas fa-check"></i>
                                    </span>
                                    <span>Update</span>
                                </button>
                                <button class="button is-primary is-small" @click.prevent="DefaultModal()">
                                    <span class="icon">
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
</div>

</template>

<script>

/* eslint-disable */

import EstablishmentTypeModal from '@/components/EstablishmentTypeModal'

EstablishmentTypeModal


export default {  
    components: {
        'establishment-type-modal': EstablishmentTypeModal
    },

    data(){
        return{
            isModalActive: false,
        } 
    },
    methods: {
        DefaultModal () {
            this.isModalActive = true
            console.log(this.isModalActive);
        },
        ConfirmModal () {
            this.isModalActive = false
        },
        CancelModal () {
            this.isModalActive = false
        }
    }

}

</script>

<style scoped>


</style>