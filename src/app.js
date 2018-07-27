/**
 * @ngdoc object
 * @name dunder
 * @description
 * This is the main module for the Dunder-Mifflin app.
 */

import angular from 'angular'                       
import 'ui.router'
import Common from './commonModule'
import './style.css'

var app = angular.module('dunder', [
    'ui.router',
    Common
])

angular.element(document).ready(function(document) {
    angular.bootstrap(window.document.body, [ app.name ], {})
})

export default app
