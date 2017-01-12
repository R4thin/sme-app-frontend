import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {RegistrationData} from 'registration/registrationData';

@inject(Router, RegistrationData)
export class Registration{
    constructor(router, registrationData) {
        this.router = router;
        this.registrationData = registrationData;
        this.msg;
        this.username;
        this.firstName;
        this.surname;
        this.email;
        this.password;
    }

    register(){
        this.registrationData.register(this.username, this.firstName, this.surname, this.email, this.password)
            .then(response =>{
                this.router.navigate("#/login");
            }, error =>{
                console.log("registration error ---> ", error);
                this.msg = error;
        });
    }

    cancel(){
        this.router.navigate("#/login");
    }
}