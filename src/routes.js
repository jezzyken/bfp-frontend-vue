import EmployeeTable from './views/EmployeeTable.vue';
import CustomerTable from './views/CustomerTable.vue';
import EstablishmentPermitTable from './views/EstablishmentPermitTable.vue';
import EstablishmentTypeTable from './views/EstablishmentTypeTable.vue';


export default[

    // Tables

    { path: '/employeetable', component: EmployeeTable},
    { path: '/customertable', component: CustomerTable},
    { path: '/establishmentpermittable', component: EstablishmentPermitTable},
    { path: '/establishmenttypetable', component: EstablishmentTypeTable}

    // { path: '/page2/:id/:name', component: Page2, props: true },

]
