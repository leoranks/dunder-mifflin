import authCtrl from './authCtrl'

describe("authCtrl", () => {

    var aCtrl, $scope, $state, user

    $scope = {}
    $state = {                    
        go: jasmine.createSpy('$state.go')
    }
    user = null

    beforeEach(() => {
        aCtrl = new authCtrl($scope, user, $state)
    })

    it("should be defined", () => {
        expect(aCtrl).toBeDefined()
    })

    it('should display the auth form if there is no valid user', () => {
        expect($scope.done).toBe(true)
    })

    it('should not go to the profile state if there is no valid user', () => {
      expect($state.go).not.toHaveBeenCalled()
    })

})
