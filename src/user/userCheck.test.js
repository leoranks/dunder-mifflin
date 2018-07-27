import userCheck from './userCheck'

describe("userCheck", () => {

    var _userCheck, _userSvc, result

    _userSvc = {
        checkUser: jasmine.createSpy('_userSvc.checkUser')
    }

    beforeEach(() => {
        _userCheck = new userCheck(_userSvc)
    })

    it("should be defined", () => {
        expect(_userCheck).toBeDefined()
    })

    it('should invoke the userSvc.checkUser method to determine validity of user session', () => {
      expect(_userSvc.checkUser).toHaveBeenCalled()
    })

})
