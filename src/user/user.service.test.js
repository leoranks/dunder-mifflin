import userSvc from './user.service'

describe("userSvc", () => {

    var userService, user, http, email, _user, fetchResponse, fetchedUser 

    fetchResponse = () => {
        return { 
            "email" : "dunder@mifflin.com" 
        }
    }

    beforeEach(() => {
        sessionStorage.setItem('dunder-mifflin-user', undefined)
        userService = new userSvc(http)
        spyOn(userService, 'fetchUser').and.callFake(fetchResponse);
    })

    it("should be defined", () => {
        expect(userService).toBeDefined()
    })

    it('should initially be set to null internally', () => {
        user = userService.getUser()
        expect(user).toBe(null)
    })

    it('should initially not have a valid user session set', () => {
        email = userService.checkUser()
        expect(email).toBeFalsy()
    })

    it('should return a user object via fetchUser() method for a valid email', () => {            
        fetchedUser = userService.fetchUser()
        expect(typeof fetchedUser).toEqual('object')
    })

    it('should return a valid user via getUser() method after one has been set', () => {
        _user = { "email" : "dunder@mifflin.com" }
        email = userService.setUser(_user)
        user = userService.getUser()
        expect(typeof user).toBe('object')
    })

})
