
export const USER_SEARCH = 'USER_SEARCH'

export const userSearch = user => {
    return {
        type: USER_SEARCH,
        payload: user
    }
}