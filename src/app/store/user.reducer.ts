import * as AllUserActions from './user.action';

 const user={
    name: 'string',
    email: 'string',
    password: 'string',
    gender: 'string'
}

const initialState = {
    loading: false,
    loaded: false,
    userInfo: user
}

export function reducer(state=initialState,action:AllUserActions.Actions){
    return {
        ...initialState,
        loading:false,
        loaded:true,
        userInfo:action.payload
    }
}