import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class AuthenticationService {

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    authenticate(username, password) {
        var userCredentials = {
            "username":username,
            "password":password
        }

        var path = 'http://localhost:8081/login';
        var promise = new Promise((resolve, reject) => {
            this.httpClient.post(path, userCredentials)
                .then(response=> {
                    resolve(response);
                    console.log('authenicate > ', response);
                }, error=> {
                    reject(error);
                    console.log('error > ', error);
                });
        });
        return promise;
    }
}