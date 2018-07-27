/**
 * @ngdoc service
 * @name dunder.service:postSvc
 * @description
 * Service for post related methods
 */

import angular from 'angular'

    postSvc.$inject = ['$http']

    function postSvc($http) {

        var _posts = null

        var postService = {
            fetchPosts: fetchPosts
        }
        return postService

        function fetchPosts(userId) {
            return $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userId
            }).then(function (response) {
                return response.data
            }, function (response) {
                console.log("error fetching posts")
            })
        }

    }

    export default postSvc
    