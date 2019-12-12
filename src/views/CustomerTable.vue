<template>

<div class="container">

    <!-- modals -->

    <customer-modal :is-active="isModalActive" @confirm="ConfirmModal"
               @cancel="CancelModal"/>

    <for-inpection-order-modal :is-active="isInspectionModalActive" @confirm="ConfirmModal"
               @cancel="CancelModal"/>

     <!-- end of Modals -->

  <!-- Right side -->   
  <div class="column">
    <div class="level-right">
        <p class="level-item" ><a class="button is-success" @click.prevent="CustomerModal()">New</a></p>
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
                            <th>Status</th>
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
                                <button class="button is-primary is-small" title="Waiting for Approval" disabled @click.prevent="CustomerModal()">
                                    <span class="icon">
                                    <i class="fas fa-check"></i>
                                    </span>
                                    <span>Pending</span>
                                </button>
                                <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                    <span class="icon">
                                    <i class="fas fa-check"></i>
                                    </span>
                                    <span>Print</span>
                                </button>
                                </p>
                            </td>
                             <td>
                                   <div class="tags are-small">
                                        <span class="tag is-warning is-rounded">For Inspection Order</span>
                                        <!--    <span class="tag is-warning is-rounded">Waiting For Approval</span> -->
                                    </div>                                    
                                </td>
                            
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>Kenny</td>
                            <td>Rogers</td>
                            <td>Lewit</td>
                            <td></td>
                            <td>
                                <p class="buttons">
                                <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                    <span class="icon">
                                    <i class="fas fa-check"></i>
                                    </span>
                                    <span>Update</span>
                                </button>
                                <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                    <span class="icon">
                                    <i class="fas fa-check"></i>
                                    </span>
                                    <span>Print</span>
                                </button>
                                </p>
                            </td>
                              <td>
                                <p class="buttons">
                                    <span class="tag is-warning is-rounded">For Inspection Order</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>Kenny</td>
                            <td>Rogers</td>
                            <td>Lewit</td>
                            <td></td>
                            <td>
                                <p class="buttons">
                                <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                    <span class="icon">
                                    <i class="fas fa-check"></i>
                                    </span>
                                    <span>Update</span>
                                </button>
                                <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                    <span class="icon">
                                    <i class="fas fa-check"></i>
                                    </span>
                                    <span>Print</span>
                                </button>
                                </p>
                            </td>
                              <td>
                                <p class="buttons is-success is-small ">
                                    <span class="tag is-success is-rounded">Inspected</span>
                                </p>
                            </td>
                        </tr>
                            <tr>
                                <td>ID</td>
                                <td>Kenny</td>
                                <td>Rogers</td>
                                <td>Lewit</td>
                                <td></td>
                                <td>
                                    <p class="buttons">
                                    <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                        <span class="icon">
                                        <i class="fas fa-check"></i>
                                        </span>
                                        <span>Update</span>
                                    </button>
                                    
                                    <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                        <span class="icon">
                                        <i class="fas fa-check"></i>
                                        </span>
                                        <span>Print</span>
                                    </button>
                                    </p>
                                </td>
                                <td>
                                   <div class="tags are-small">
                                        <span class="tag is-success is-rounded">Inspected</span>
                                    </div>                                    
                                </td>
                            </tr>

                              <tr>
                                <td>ID</td>
                                <td>Kenny</td>
                                <td>Rogers</td>
                                <td>Lewit</td>
                                <td></td>
                                <td>
                                    <p class="buttons">
                                    <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                        <span class="icon">
                                        <i class="fas fa-check"></i>
                                        </span>
                                        <span>Update</span>
                                    </button>
                                    
                                    <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                        <span class="icon">
                                        <i class="fas fa-check"></i>
                                        </span>
                                        <span>Print </span>
                                    </button>
                                    
                                    </p>
                                </td>
                                  <td>
                                    <p class="buttons">
                                    <span v-if="status === 'pending-inspection-order'">
                                        <span class="tag is-info is-rounded">For issuance</span>
                                    </span>
                                    </p>
                                </td>
                            </tr>

                             <tr>
                                <td>ID</td>
                                <td>Kenny</td>
                                <td>Rogers</td>
                                <td>Lewit</td>
                                <td></td>
                                <td>
                                    <p class="buttons">
                                    <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                        <span class="icon">
                                        <i class="fas fa-check"></i>
                                        </span>
                                        <span>Update</span>
                                    </button>
                                    
                                    <button class="button is-primary is-small" @click.prevent="CustomerModal()">
                                        <span class="icon">
                                        <i class="fas fa-check"></i>
                                        </span>
                                        <span>Print </span>
                                    </button>
                                    
                                    </p>
                                </td>
                                  <td>
                                    <p class="buttons">
                                    <span v-if="status === 'pending-inspection-order'">
                                        <span class="tag is-link is-rounded">Pending Inspection Order</span>
                                    </span>
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

import CustomerModal from '@/components/CustomerModal'
import ForInspectionOrderModal from '@/components/ForInspectionOrderModal'

export default {  
    components: {
        'customer-modal': CustomerModal, 
        'for-inpection-order-modal': ForInspectionOrderModal
    },
    props:['update', 'pending-inspection-order'],

    data(){
        return{
            isModalActive: false,
            isInspectionModalActive: false,
            status: ''
        } 
    },
    methods: {
        CustomerModal () {
            this.isModalActive = true
            console.log(this.isModalActive);
        },
        InspectionModal () {
            this.isInspectionModalActive = true
            console.log(this.isInspectionModalActive);
        },
        ConfirmModal () {
            this.isModalActive = false
            this.isInspectionModalActive = false
        },
        CancelModal () {
            this.isModalActive = false
            this.isInspectionModalActive = false
        }
    }, 
    created(){
        this.status = 'pending-inspection-order';
    }
}
</script>

<style scoped>


</style>