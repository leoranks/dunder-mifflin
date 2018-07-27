/**
 * @ngdoc object
 * @name postCheck
 * @description
 * Utility function to keep config resolves thin.
 */

import angular from 'angular'
import userSvc from '../user/user.service'
import postSvc from './post.service'

postCheck.$inject = ['userSvc', 'postSvc', '$q']

function postCheck(userSvc, postSvc, $q) {
    var deferred = $q.defer()
    var profileData = {}
    var email = userSvc.checkUser()
    if (!email) {
        deferred.resolve(false)
    } else {
        userSvc.fetchUser(email).then(function(user) {
            profileData.user = user
            postSvc.fetchPosts(user.id).then(function(posts) {
                profileData.posts = posts
                deferred.resolve(profileData)
            }).catch(function (err) {
                console.log("Error fetching posts")
                deferred.resolve(false)
            })
        }).catch(function (err) {
            console.log("Error fetching user")
            deferred.resolve(false)
        })
    }
    return deferred.promise
}

export default postCheck


