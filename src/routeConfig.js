/**
 * @ngdoc object
 * @name routeConfig
 * @description
 * Routing config for the app.
 */

import angular from 'angular'
import 'ui.router'
import userCheck from './user/userCheck'
import authCtrl from './user/authCtrl'
import profileCtrl from './profile/profileCtrl'
import postCheck from './post/postCheck'
import profileTpl from './profile/profile.html'

function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/auth') 

    $stateProvider
        .state('auth', {
            url: '/auth',
            template: '<auth done="done"></auth>',
            resolve: {
                user: userCheck
            },
            controller: authCtrl
        })
        .state('profile', {
            url: '/profile',
            templateUrl: profileTpl,
            resolve: {
                profileData: postCheck
            },
            controller: profileCtrl
        })
}

export default routeConfig
