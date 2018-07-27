/**
 * @ngdoc object
 * @name userCheck
 * @description
 * Utility function to keep config resolves thin.
 */

import angular from 'angular'
import userSvc from './user.service'

userCheck.$inject = ['userSvc']

function userCheck(userSvc) {
    var email = userSvc.checkUser()
    if (email) {
        return true        
    } else {
        return false
    }
}

export default userCheck
