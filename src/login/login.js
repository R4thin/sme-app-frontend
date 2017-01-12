import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {AuthenticationService} from 'login/authentication/authenticationService';

@inject(Router, AuthenticationService)
export class Login{

    constructor(router, authenticationService){
        this.router = router;
        this.authenicationService = authenticationService;
        this.msg;
        this.username;
        this.password;
    }

    authenicate() {
     this.authenicationService.authenticate(this.username, this.password)
         .then(response =>{
                console.log("login response", response);
                this.router.navigate("#/main_dashboard");
            }, error =>{
                console.log("login response", error);
                this.msg = "Username or password is incorrect.";
        });
    }

    register() {
        this.router.navigate("#/registration");
    }

}