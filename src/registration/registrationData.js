import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class RegistrationData{

    constructor(httClient){
        this.httpClient = httClient;
    }

    register(username, firstName, surname, email, password){
        let registerationInformation = {
            "username": username,
            "firstName": firstName,
            "surname": surname,
            "email": email,
            "password": password
        }

        let path = "http://localhost:8081/register";
        var promise = new Promise((resolve, reject) =>{
            this.httpClient.post(path, registerationInformation)
                .then(response =>{
                    resolve(response);
                }, error =>{
                    reject(error);
                });
        });
        return promise;
    }
}