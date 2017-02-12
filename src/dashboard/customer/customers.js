import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {CustomerData} from 'dashboard/customer/customerData';

@inject(Router, CustomerData)
export class Customers {
    constructor(router, customerData) {
        this.customerData = customerData;
        this.router = router;
        this.idNumber;
        this.firstName;
        this.surname;
        this.email;
        this.mobile;
        this.address;
        this.date;

        this.customers = [{
            id: 1,
            title: "Mr",
            firstName: "Harry",
            surname: "Ford",
            email: "harry@gmail.com",
            mobile: "072 449 3322",
            address: "21 Giant Street, Surrey est....",
            date: "01 January 2016"

        },
            {
                id: 2,
                title: "Miss",
                firstName: "Clair",
                surname: "Billy",
                email: "cbilly@gmail.com",
                mobile: "071 333 1133",
                address: "35 Little Street, White heart lane....",
                date: "01 March 2015"
            },
            {
                id: 2,
                title: "Miss",
                firstName: "Clair",
                surname: "Billy",
                email: "cbilly@gmail.com",
                mobile: "071 333 1133",
                address: "35 Little Street, White heart lane....",
                date: "01 March 2015"
            },
            {
                id: 2,
                title: "Miss",
                firstName: "Clair",
                surname: "Billy",
                email: "cbilly@gmail.com",
                mobile: "071 333 1133",
                address: "35 Little Street, White heart lane....",
                date: "01 March 2015"
            }
        ]
    }

    addCustomer() {
        this.customerData.addCustomer(this.idNumber, this.firstName, this.surname, this.email, this.mobile, this.address, this.date)
            .then(response => {
                console.log("customer ---->" , response);
            }, error => {
                console.log("error adding customer ---> ", error);
                this.msg = error;
            });
    }
}