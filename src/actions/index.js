let id = 0;

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const DEL_ITEM = 'DEL_ITEM';

export function InputType(typ, des, value){
    return {
        type: ADD_TO_LIST,
        id: id++,
        typ: (typ? 'inc': 'exp'),
        des: des,
        value: value,
    };
}

export function DelItem(id) {
    return {
        type: DEL_ITEM,
        payload: id,
    };

}