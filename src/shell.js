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
                name: 'Login', title: 'Login', nav: false
            },

            {
                route: 'registration', moduleId: 'registration/registration',
                name: 'registration', title: 'Registration', nav: false
            },
            // {
            //     route: 'main_dashboard', moduleId: 'dashboard/main_dashboard',
            //     name: 'main_dashboard', title: 'Dashboard', nav: false
            // },
            {
                route: 'main_dashboard/customers', moduleId: 'dashboard/customer/customers',
                name: 'customers', title: 'Customers', nav: true
            },
            {
                route: 'main_dashboard/calendars', moduleId: 'dashboard/calendar/calendars',
                name: 'calendar', title: 'Calendar', nav: true
            },
            {
                route: 'main_dashboard/invoices', moduleId: 'dashboard/invoice/invoices',
                name: 'invoices', title: 'Invoices', nav: true
            },
            {
                route: 'main_dashboard/employees', moduleId: 'dashboard/employee/employees',
                name: 'employees', title: 'Employees', nav: true
            }
        ]);
    }

}