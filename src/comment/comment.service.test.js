import commentSvc from './comment.service'

describe("commentSvc", () => {

    var commentService, http, comments, fetchResponse

    fetchResponse = () => {
        return [
            { "id" : 1, "postId": 1, "body": "Comment 1" },
            { "id" : 2, "postId": 1, "body": "Comment 2" },
            { "id" : 3, "postId": 1, "body": "Comment 3" }
        ]
    }

    beforeEach(() => {
        commentService = new commentSvc(http)
        spyOn(commentService, 'fetchComments').and.callFake(fetchResponse);
    })

    it("should be defined", () => {
        expect(commentService).toBeDefined()
    })

    it('should return post comments as an array of objects', () => {   
        comments = commentService.fetchComments()
        expect(typeof comments).toEqual('object')
        expect(comments.length).toBeGreaterThan(1)
    })

})
