/**
 * @ngdoc directive
 * @name dunder.directive:post
 * @restrict E
 * @description
 * Displays a post
 */

import commentSvc from '../comment/comment.service'
import postTpl from './post.html'

    function post() {

        var postDirective = {
            scope: {
                thispost: '='
            },
            templateUrl: postTpl,
            restrict: 'E',
            controller: postCtrl,
            controllerAs: 'vm',
            bindToController: true
        }
        return postDirective

    }

    postCtrl.$inject = ['commentSvc', '$scope']

    function postCtrl(commentSvc, $scope) {
        var vm = this
        $scope.done = false
        commentSvc.fetchComments(vm.thispost.id).then(function(comments) {
            $scope.comments = comments
            $scope.done = true
        }).catch(function (err) {
            console.log("Error fetching comments")
        })
        
    }

    export default post
    