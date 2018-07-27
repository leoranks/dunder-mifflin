/**
 * @ngdoc directive
 * @name dunder.directive:profileDetail
 * @restrict E
 * @description
 * Displays profile detail area
 */

import angular from 'angular'
import profileDetailTpl from './profileDetail.html'
    
    function profileDetail() {

        var profileDetailDirective = {
            scope: {
                user: '='
            },
            templateUrl: profileDetailTpl,
            restrict: 'E',
            controller: profileDetailCtrl,
            controllerAs: 'vm'
        }
        return profileDetailDirective

    }

    profileDetailCtrl.$inject = ['$scope'] 

    function profileDetailCtrl($scope) {
        var vm = this  
    }

    export default profileDetail
    