export const initialState = {
    user: null,
    playlists:[],
    playing:false,
    item:null,
    token:'BQCeC5yr2ec05Br0eEuSHLX_eJTc3mWI1r47rePUP_D3jWPbznoc8uAkC8rNo99m4eXwVgFWM5crSvgqvVEoBQW28w2ht3Mh5g8dpvG6UZ0d6qIpX58KSHb9RwoAxkiVl0WPwQtVhD_htPBV8TUSw_jDsxNknRjNr5RF6ZKGFNZVeiB_RJJh'
}

const reducer = (state,action) =>{
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        default:
            return state;
    }
}

export default reducer