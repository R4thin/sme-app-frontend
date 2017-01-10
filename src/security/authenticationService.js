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
        this.httpClient.post(path, userCredentials)
               .then(response=> {
                    console.log('authenicate > ', response);
               }, error=> {
                    console.log('error > ', error);
            });

        return null;
    }
}