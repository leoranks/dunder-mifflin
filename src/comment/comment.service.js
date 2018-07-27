/**
 * @ngdoc service
 * @name dunder.service:commentSvc
 * @description
 * Service for comment related methods
 */

import angular from 'angular'

    commentSvc.$inject = ['$http']

    function commentSvc($http) {

        var _comments = null

        var commentService = {
            fetchComments: fetchComments
        }
        return commentService

        function fetchComments(postId) {
            return $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/comments?postId=' + postId
            }).then(function (response) {
                return response.data
            }, function (response) {
                console.log("Error fetching comments")
            })
        }

    }

    export default commentSvc
    