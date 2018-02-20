import {initialState} from "./state";
import {SHOES_LIST_LOADED} from "./actions";

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOES_LIST_LOADED:
            return {...state, shoes: action.value};
        default:
            return state;
    }
};
