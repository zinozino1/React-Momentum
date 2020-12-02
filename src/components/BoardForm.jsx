import React from "react";
import styled from "styled-components";

const BoardFormWrapper = styled.div`
    border: 1px solid black;
    padding: 20px;
`;

const BoardForm = ({ onChange, onInsert, input }) => {
    const onClick = () => {
        onInsert();
        onChange("");
    };

    return (
        <BoardFormWrapper>
            <input
                type="text"
                placeholder="insert todo.."
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                value={input}
                onKeyDown={(e) => {
                    e.keyCode === 13 ? onClick() : void 0;
                }}
            />
            <button onClick={onClick}>submit</button>
        </BoardFormWrapper>
    );
};

export default BoardForm;
