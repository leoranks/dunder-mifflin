/**
 * @ngdoc object
 * @name authCtrl
 * @description
 * Utility function for auth state controller; to keep config resolves thin.
 */

import angular from 'angular'
import 'ui.router'

authCtrl.$inject = ['$scope', 'user', '$state']

function authCtrl($scope, user, $state) {
    $scope.done = false
    if (user) {
        $state.go('profile')
    } else {
        $scope.done = true
    }
}

export default authCtrl
