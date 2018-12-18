import {
    GET_ENTRIES_FAIL,
    GET_ENTRIES_SUCCESS,
    GET_ENTRIES_REQUEST,
    SORT,
    SORT_DESC_LIKES,
    SET_URL,
} from "../actions/PageActions";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "../actions/LoginActions";


const initialState = {
    year: 2018,
    entries: [],
    isFetching: false,
    sortFunc: SORT_DESC_LIKES,
    url: 'itvectorsoc',
    error: '',
};

export function pageReducer(state = initialState, action){
    switch (action.type) {
        case GET_ENTRIES_REQUEST:
            return {...state, year: action.year, isFetching: true, error: ''};
        case GET_ENTRIES_SUCCESS:
            return {...state, entries: action.entries, isFetching: false, error: ''};
        case GET_ENTRIES_FAIL:
            return {...state, isFetching: false, error: action.error};
        case SORT:
            return {...state, entries: action.entries, sortFunc: action.sortFunc};
        case SET_URL:
            return {...state, entries: [], url: action.url};
        case LOGIN_REQUEST:
            return {...state, isFetching: true};
        case LOGIN_SUCCESS:
            return {...state, isFetching: false};
        case LOGIN_FAIL:
            return {...state, isFetching: false, error: 'login error'};
        default:
            return state;
    }
}