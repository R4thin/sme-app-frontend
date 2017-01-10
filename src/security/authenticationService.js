import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class AuthenticationService {

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    authenticate(username, password) {
        var path = 'http://localhost:8081/login?username=' + username + '&password=' + password;
        this.httpClient.post(path)
               .then(response=> {
                    console.log('authenicate > ', response);
               }, error=> {
                    console.log('error > ', error);
            });

        return null;
    }
}