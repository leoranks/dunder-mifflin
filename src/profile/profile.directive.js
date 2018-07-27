/**
 * @ngdoc directive
 * @name dunder.directive:profile
 * @restrict E
 * @description
 * Displays the entire profile page: profile details section plus posts
 */
    
    import profileInnerTpl from './profileInner.html'

    function profile() {

        var profileDirective = {
            templateUrl: profileInnerTpl,
            restrict: 'E'
        }
        return profileDirective

    }

    export default profile
    