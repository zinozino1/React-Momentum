import React from "react";
import { connect } from "react-redux";
import BoardList from "../components/BoardList";
import {
    onChangeItem,
    insertItem,
    deleteItem,
    updateItem,
    toggleItem,
} from "../modules/boardList";
import BoardForm from "../components/BoardForm";

const BoardListContainer = ({
    input,
    todos,
    onChangeItem,
    insertItem,
    deleteItem,
    updateItem,
    toggleItem,
}) => {
    return (
        <div>
            <BoardForm
                input={input}
                onChange={onChangeItem}
                onInsert={insertItem}
            ></BoardForm>
            <BoardList
                input={input}
                todos={todos}
                onDelete={deleteItem}
                onUpdate={updateItem}
                onToggle={toggleItem}
                onChange={onChangeItem}
                onInsert={insertItem}
            ></BoardList>
        </div>
    );
};

export default connect(
    (state) => ({
        input: state.boardList.input,
        todos: state.boardList.todos,
    }),
    { onChangeItem, insertItem, deleteItem, updateItem, toggleItem },
)(BoardListContainer);
