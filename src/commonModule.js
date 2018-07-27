/**
 * @ngdoc object
 * @name commonModule
 * @description
 * Module that encapsulates app code (to keep main app module thin).
 */

import routeConfig from './routeConfig'
import profile from './profile/profile.directive.js'
import profileDetail from './profile/profile-detail.directive.js'
import posts from './post/posts.directive.js'
import post from './post/post.directive.js'
import comment from './comment/comment.directive.js'
import auth from './user/auth.directive.js'
import userSvc from './user/user.service.js'
import postSvc from './post/post.service.js'
import commentSvc from './comment/comment.service.js'

let commonModule = angular.module('Common', [])   
    .config(routeConfig)
    .directive('post', post)
    .directive('posts', posts)
    .directive('comment', comment)
    .directive('profileDetail', profileDetail)
    .directive('profile', profile)
    .directive('auth', auth)
    .factory('postSvc', postSvc)
    .factory('userSvc', userSvc)
    .factory('commentSvc', commentSvc)
    .name

export default commonModule
