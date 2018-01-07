import { DEL_ITEM, ADD_TO_LIST } from "../actions";

export default function items(state=[], action) {
    switch (action.type) {
        case ADD_TO_LIST:
            return [...state, {
                id: action.id,
                type: action.typ,
                des: action.des,
                value: action.value
            }];
            
        case DEL_ITEM:
            return state.filter(value => {
                if(value.id === action.payload) {
                    return null;
                } else {
                    return value;
                }
            });
            
        default:
            return state;
    }
}