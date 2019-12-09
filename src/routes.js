import Customer from './views/Customer.vue';
import EstablishmentType from './views/EstablishmentType.vue';
import EstablishmentPermit from './views/EstablishmentPermit.vue';
import Establishment from './views/Establishment.vue';
import Employee from './views/Employee.vue';
import CustomerEstablishmentTransaction from './views/CustomerEstablishmentTransaction.vue';
import Address from './views/Address.vue';
import CustomerEstablishment from './views/CustomerEstablishment.vue';
import EmployeeTable from './views/EmployeeTable.vue';





CustomerEstablishmentTransaction



export default[
    { path: '/customer', component: Customer},
    { path: '/establishmenttype', component: EstablishmentType},
    { path: '/establishmentpermit', component: EstablishmentPermit},
    { path: '/establishment', component: Establishment},
    { path: '/Employee', component: Employee},
    { path: '/customerestablishmenttransaction', component: CustomerEstablishmentTransaction},
    { path: '/address', component: Address},
    { path: '/customerestablishement', component: CustomerEstablishment},


    // Tables

    { path: '/employeetable', component: EmployeeTable}


    // { path: '/page2/:id/:name', component: Page2, props: true },

]
