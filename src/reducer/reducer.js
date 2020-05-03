import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/actions';

export const initialState ={ 
    soccerVid:  [],
    isLoading: false,
    error : ''
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING:
        return { 
            ...state,
            isLoading: true,
            error: ''
        };
        case FETCH_SUCCESS:
            return { 
                ...state,
                isLoading: false,
                error: '',
                soccerVid: action.payload
            };
        case FETCH_FAILURE:
            return {
               ...state,
               error: action.payload,
               isLoading: false 
            };
        default:
            return state

    }
};
