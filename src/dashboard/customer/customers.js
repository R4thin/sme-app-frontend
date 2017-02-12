import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {CustomerData} from 'dashboard/customer/customerData';

@inject(Router, CustomerData)
export class Customers {
    constructor(router, customerData) {
        this.customerData = customerData;
        this.router = router;
        this.idNumber;
        this.title;
        this.firstName;
        this.surname;
        this.email;
        this.mobile;
        this.address;
        this.date;

        this.customers;
    }

    activate() {
        this.CLEAR_STATE();
        this.getCustomers();
    }

    addCustomer() {
        this.customerData.addCustomer(this.idNumber, this.title, this.firstName, this.surname, this.email, this.mobile, this.address, this.date)
            .then(response => {
                console.log("adding a customer ---->", response);
                this.CLEAR_STATE();
                this.getCustomers();
            }, error => {
                console.log("error adding customer ---> ", error);
                this.msg = error;
            });
    }

    getCustomers() {
        this.customerData.getCustomers()
            .then(response => {
                console.log("fetching customers ---->", response);
                this.customers = response.content;
            }, error => {
                console.log("error fetching customers ---> ", error);
                this.msg = error;
            });
    }

    CLEAR_STATE() {
        this.idNumber = "";
        this.firstName = "";
        this.title = "";
        this.surname = "";
        this.email = "";
        this.mobile = "";
        this.address = "";
        this.date = "";
    }
}