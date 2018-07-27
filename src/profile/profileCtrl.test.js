import profileCtrl from './profileCtrl'

describe("profileCtrl", () => {

    var pCtrl, $scope, $state, profileData

    $scope = {}
    $state = {                    
        go: jasmine.createSpy('$state.go')
    }
    profileData = {
        user: { email: 'dunder@mifflin.com' },
        posts: [ 'post1', 'post2' ]
    }

    beforeEach(() => {
        pCtrl = new profileCtrl($scope, profileData, $state)
    })

    it("should be defined", () => {
        expect(pCtrl).toBeDefined()
    })

    it('should continue rendering profile page if there is a valid user', () => {
        expect($scope.done).toBe(true)
    })

    it('should not go to the auth state if there is a valid user', () => {
      expect($state.go).not.toHaveBeenCalled()
    })

    it('should contain valid user and posts before rendering profile page', () => {
        expect($scope.user).toBeTruthy()
        expect($scope.posts).toBeTruthy()
    })
})
