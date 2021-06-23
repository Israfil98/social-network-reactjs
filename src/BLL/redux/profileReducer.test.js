import { addPostAC, deletePostAC, profileReducer } from "./profileReducer";

const state = {
    postsData: [
        {id: 1, postText: "Hi, im React Developer", likesCount: 1},
        {id: 2, postText: "Im learning React a few month", likesCount: 2},
        {id: 3, postText: "Method map!!!", likesCount: 5}
    ]
}

test('new post should be added', () => {
    const action = addPostAC('new post text')

    const newState = profileReducer(state, action)

    expect(state.postsData.length).toBe(3)
    expect(newState.postsData.length).toBe(4)
    expect(newState.postsData[0].postText).toBe('new post text')
})
test('correct post should be deleted', () => {
    const action = deletePostAC(3)

    const newState = profileReducer(state, action)

    expect(state.postsData.length).toBe(3)
    expect(newState.postsData.length).toBe(2)
    expect(newState.postsData[2]).toBeUndefined()
})