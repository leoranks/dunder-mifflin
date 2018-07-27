/**
 * @ngdoc directive
 * @name dunder.directive:auth
 * @restrict E
 * @description
 * Displays auth section and handles login / validation
 */

import angular from 'angular'
import 'ui.router'
import authTpl from './auth.html'
import userSvc from './user.service'
    
    function auth() {

        var authDirective = {
            templateUrl: authTpl,
            restrict: 'E',
            controller: authCtrl
        }
        return authDirective

    }

    authCtrl.$inject = ['userSvc', '$scope', '$state']

    function authCtrl(userSvc, $scope, $state) {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
        $scope.error = null
        $scope.doSubmit = function(authForm) {
            $scope.error = null
            if (!pattern.test(authForm.email.$viewValue)) {
                $scope.error = "Invalid Email"
            } else {
                userSvc.fetchUser(authForm.email.$viewValue).then(function(user) {
                    if (!user) {
                        $scope.error = "Invalid Email"
                    } else {
                        $scope.error = null
                        $state.go('profile', user)
                    }
                }).catch(function (err) {
                    $scope.error = "Error fetching user"
                })
            }
        }
    }

    export default auth
    