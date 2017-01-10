import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {AuthenticationService} from 'security/authenticationService';

@inject(Router, AuthenticationService)
export class Login{

    constructor(router, authenticationService){
        this.router = router;
        this.authenicationService = authenticationService;
        this.msg;
    }

    authenicate(username, password) {
        this.authenicationService.authenticate(username, password);
        this.router.navigate("#/main_dashboard");
    }

    register() {
        this.router.navigate("#/registration");
    }

}