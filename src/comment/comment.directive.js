/**
 * @ngdoc directive
 * @name dunder.directive:comment
 * @restrict E
 * @description
 * Displays a comment
 */

import commentTpl from './comment.html'

    function comment() {

        var commentDirective = {
            scope: {
                thiscomment: '='
            },
            templateUrl: commentTpl,
            restrict: 'E',
            controller: commentCtrl,
            controllerAs: 'vm',
            bindToController: true
        }
        return commentDirective

    }

    function commentCtrl() {
        var vm = this
    }

    export default comment
    