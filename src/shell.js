export class Shell {
    constructor() {

    }

    configureRouter(config, router) {
        this.router = router;
        config.title = "Sparta";
        // config.options.pushState = true;
        config.map([
            {
                route: ['', 'login'], moduleId: 'login/login',
                name: 'Login', title: 'Login', nav: true
            },

            {
                route: 'registration', moduleId: 'registration/registration',
                name: "registration", title: 'Registration', nav: true
            },

            {
                route: 'main_dashboard', moduleId: 'dashboard/main_dashboard',
                name: "main_dashboard", title: 'Dashboard', nav: true
            },

        ]);
    }

}