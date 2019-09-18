import { FETCH_CATEGORY_FAILURE, 
    FETCH_CATEGORY_SUCCESS, 
        FETCH_CATEGORY_BEGIN 
} from '../actions/categoryAction';

const initialState = {
    items: [],
    loading: false,
    error: null
};
export default function categoryReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_CATEGORY_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.products
            };
        case FETCH_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }

}