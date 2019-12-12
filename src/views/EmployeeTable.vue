<template>

<div class="container">

    <!-- modals -->

    <employee-modal :is-active="isModalActive" @confirm="ConfirmModal"
               @cancel="CancelModal"/>
     <!-- end of Modals -->

  <!-- Right side -->   
  <div class="column">
    <div class="level-right">
        <p class="level-item" ><a class="button is-success" @click.prevent="DefaulModal()">New</a></p>
     </div>
  </div>
     <div class="table">
         <div class="column">

            <div class="columns">
                
                <table class="table is-fullwidth">
                    
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Middle Name</th>
                            <th>Name Extension</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>Kenny</td>
                            <td>Rogers</td>
                            <td>Lewit</td>
                            <td></td>
                            <td>
                                <p class="buttons">
                                  <button class="button is-primary is-small" @click.prevent="DefaulModal()">
                                      <span class="icon">
                                      <i class="fas fa-check"></i>
                                      </span>
                                      <span>Update</span>
                                  </button>
                                  <button class="button is-danger is-small" @click.prevent="DefaulModal()">
                                      <span class="icon">
                                      <i class="fas fa-check"></i>
                                      </span>
                                      <span>Delete</span>
                                  </button>
                                  <button class="button is-info is-small" @click.prevent="DefaulModal()">
                                      <span class="icon">
                                      <i class="fas fa-check"></i>
                                      </span>
                                      <span>view</span>
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

import EmployeeModal from '@/components/EmployeeModal'

export default {  
    components: {
        'employee-modal': EmployeeModal, 
    },
    data(){
        return{
            isModalActive: false,
            status: ''
        } 
    },
    methods: {
        DefaulModal () {
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