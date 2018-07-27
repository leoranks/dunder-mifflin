describe('Dunder-Mifflin app', function() {

    it('should initially render the auth page', function() {
        browser.get('http://localhost:9000')
        browser.getCurrentUrl().then(function(uri) {
			expect(uri).toContain('auth')
		})
    })

    it('should display an error message if login is clicked with a blank email field', function() {
        element(by.id('submit')).click()
        expect(element(by.id('error')).getText()).toEqual('Invalid Email')
        browser.getCurrentUrl().then(function(uri) {
			expect(uri).toContain('auth')
		})
    })

    it('should display an error message if login is clicked after entering an invalid email', function() {
        element(by.id('email')).sendKeys('adsfads&@>@adf().#$@#$a.co&*^')
        element(by.id('submit')).click()
        expect(element(by.id('error')).getText()).toEqual('Invalid Email')
        browser.getCurrentUrl().then(function(uri) {
			expect(uri).toContain('auth')
		})
    })

    it('should display an error message if login is clicked with a valid email that is not in approved list', function() {
        element(by.id('email')).clear()
        element(by.id('email')).sendKeys('dunder@mifflin.com')
        element(by.id('submit')).click()
        expect(element(by.id('error')).getText()).toEqual('Invalid Email')
        browser.getCurrentUrl().then(function(uri) {
			expect(uri).toContain('auth')
		})
    })

    it('should transition to profile page if a valid email from the approved list is submitted', function() {
        element(by.id('email')).clear()
        element(by.id('email')).sendKeys('Sincere@april.biz')
        element(by.id('submit')).click()  
        browser.getCurrentUrl().then(function(uri) {
            expect(uri).toContain('profile')
        })
    })

})
