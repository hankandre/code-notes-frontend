import addTemplate from './add/add.html';

export default function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    const states = [
        {
            name: 'home',
            url: '/home',
            template: `<md-content class="md-padding" layout-xs="column" layout="row">
                            <search>

                            </search>
                            <info flex="70">

                            </info>
                        </md-content>`
        },
        {
            name: 'add',
            url: '/add',
            template: `
                <md-content layout="row" layout-align="center center">
                    <add flex="33"></add>
                </md-content>
            `
        }

    ]

    states.forEach(function(state) { $stateProvider.state(state); });

    $urlRouterProvider.otherwise('/home');
};
