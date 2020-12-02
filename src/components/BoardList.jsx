import React from "react";
import BoardItem from "./BoardItem";

const BoardList = ({
    input,
    todos,
    onToggle,
    onDelete,
    onUpdate,
    onChange,
    onInsert,
}) => {
    return (
        <div>
            {todos.map((v, i) => (
                <BoardItem
                    key={v.id}
                    data={v}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    onToggle={onToggle}
                    onChange={onChange}
                    onInsert={onInsert}
                ></BoardItem>
            ))}
        </div>
    );
};

export default BoardList;
