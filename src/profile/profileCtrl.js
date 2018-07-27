/**
 * @ngdoc object
 * @name profileCtrl
 * @description
 * Utility function for profile state controller; to keep config resolves thin.
 */

import angular from 'angular'
import 'ui.router'

profileCtrl.$inject = ['$scope', 'profileData', '$state']

function profileCtrl($scope, profileData, $state) {
    $scope.done = false
    if (!profileData) {
        $state.go('auth')
    } else {
        $scope.done = true
        $scope.user = profileData.user
        $scope.posts = profileData.posts
    }
}

export default profileCtrl
