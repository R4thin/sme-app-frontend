import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class CustomerData{

    constructor(httClient){
        this.httpClient = httClient;
    }

    addCustomer(idNumber, firstName, surname, email, mobile, address, date){
        let customerInformation = {
            "idNumber": idNumber,
            "firstName": firstName,
            "surname": surname,
            "email": email,
            "mobile": mobile,
            "address": address,
            "date": date
        }

        let path = "http://localhost:8081/customer/add";
        var promise = new Promise((resolve, reject) =>{
            this.httpClient.post(path, customerInformation)
                .then(response =>{
                    resolve(response);
                }, error =>{
                    reject(error);
                });
        });
        return promise;
    }
}