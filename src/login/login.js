import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {AuthenticationService} from 'security/authenticationService';

@inject(Router, AuthenticationService)
export class Login{

    constructor(router, authenticationService){
        this.router = router;
        this.authenicationService = authenticationService;
    }

    authenicate(username, password) {
        var auth =  this.authenicationService.authenticate(username, password);
        console.log(">>>>> " + auth);
    }

    register() {
        this.router.navigate("#/registration");
    }

}