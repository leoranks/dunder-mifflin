import postSvc from './post.service'

describe("postSvc", () => {

    var postService, http, posts, fetchResponse

    fetchResponse = () => {
        return [
            { "id" : 1, "email": "dunder@mifflin.com", "body": "Post 1" },
            { "id" : 2, "email": "dunder@mifflin.com", "body": "Post 2" },
            { "id" : 3, "email": "dunder@mifflin.com", "body": "Post 3" }
        ]
    }

    beforeEach(() => {
        postService = new postSvc(http)
        spyOn(postService, 'fetchPosts').and.callFake(fetchResponse);
    })

    it("should be defined", () => {
        expect(postService).toBeDefined()
    })

    it('should return posts as an array of objects', () => {   
        posts = postService.fetchPosts()
        expect(typeof posts).toEqual('object')
        expect(posts.length).toBeGreaterThan(1)
    })

})
