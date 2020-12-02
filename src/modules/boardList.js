import { createAction, handleActions } from "redux-actions";

const ONCHANGE = "board/ONCHANGE";
const INSERT = "board/INSERT";
const DELETE = "board/DELETE";
const UPDATE = "board/UPDATE";
const TOGGLE = "board/TOGGLE";

let id = 3;

export const onChangeItem = createAction(ONCHANGE, (input) => input);
export const insertItem = createAction(INSERT);
export const deleteItem = createAction(DELETE, (id) => id);
export const updateItem = createAction(UPDATE, (id, input) => ({ id, input }));
export const toggleItem = createAction(TOGGLE, (id) => id);

const initialState = {
    input: "",
    todos: [
        { id: 1, text: "react", done: false },
        { id: 2, text: "redux", done: false },
    ],
};

const boardList = handleActions(
    {
        [ONCHANGE]: (state, action) => ({
            ...state,
            input: action.payload,
        }),
        [INSERT]: (state, action) => ({
            ...state,
            todos: state.todos.concat({
                id: id++,
                text: state.input,
                done: false,
            }),
        }),
        [DELETE]: (state, action) => ({
            ...state,
            todos: state.todos.filter((v, i) => {
                return v.id !== action.payload;
            }),
        }),
        [UPDATE]: (state, action) => ({
            ...state,
            todos: state.todos.map((v, i) => {
                return v.id === action.payload.id
                    ? { ...v, text: action.payload.input }
                    : v;
            }),
        }),
        [TOGGLE]: (state, action) => ({
            ...state,
            todos: state.todos.map((v, i) => {
                return v.id === action.payload ? { ...v, done: !v.done } : v;
            }),
        }),
    },
    initialState,
);

export default boardList;
