/**
 * @ngdoc service
 * @name dunder.service:userSvc
 * @description
 * Service for user related methods
 */

import angular from 'angular'

    userSvc.$inject = ['$http']

    function userSvc($http) {

        var _user = null

        var userService = {
            getUser: getUser,
            fetchUser: fetchUser,
            checkUser: checkUser,
            setUser: setUser
        }
        return userService

        function getUser() {
            return _user
        }

        function setUser(user) {
            _user = user
            sessionStorage.setItem('dunder-mifflin-user', user.email)
        }

        function checkUser() {
            var email = sessionStorage.getItem('dunder-mifflin-user')
            return email === 'undefined' ? false : email
        }

        function fetchUser(email) {
            return $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users?email=' + email
            }).then(function (response) {
                if (response.data.length>0) {
                    setUser(response.data[0])
                    return _user
                } else {
                    return false
                }     
            }, function (response) {
                console.log("Error fetching user")
            })
        }
    }

    export default userSvc
    