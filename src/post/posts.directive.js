/**
 * @ngdoc directive
 * @name dunder.directive:posts
 * @restrict E
 * @description
 * Displays all posts for a user
 */

import postsTpl from './posts.html'

    function posts() {

        var postsDirective = {
            scope: {
                posts: '='
            },
            templateUrl: postsTpl,
            restrict: 'E',
            controller: postsCtrl,
            controllerAs: 'vm'
        }
        return postsDirective

    }

    postsCtrl.$inject = ['$scope']

    function postsCtrl($scope) {
        var vm = this
    }

    export default posts
    