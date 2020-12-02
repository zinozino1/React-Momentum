import React, { useState } from "react";
import styled from "styled-components";

const BoardItemWrapper = styled.div`
    border: 1px solid black;
    border-top: none;
    padding: 20px;
    display: flex;
    input {
    }
    span {
        flex: 1;
        font-size: 20px;
    }
    button {
    }
`;

const DoneItem = styled.span`
    text-decoration: line-through;
    color: #898989;
`;

const BoardItem = ({
    data,
    onDelete,
    onUpdate,
    onToggle,
    onChange,
    onInsert,
}) => {
    const [editing, setEditing] = useState(false);
    const [tmpInput, setTmpInput] = useState("");

    const onFix = () => {
        setEditing(true);
    };

    return (
        <BoardItemWrapper>
            {editing ? (
                <>
                    <input
                        type="text"
                        defaultValue={data.text}
                        onChange={(e) => {
                            setTmpInput(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            tmpInput === ""
                                ? onUpdate(data.id, data.text)
                                : onUpdate(data.id, tmpInput);

                            setEditing(false);
                        }}
                    >
                        등록
                    </button>
                </>
            ) : data.done ? (
                <>
                    <input
                        type="checkbox"
                        onClick={() => {
                            onToggle(data.id);
                        }}
                        defaultChecked
                    />
                    <DoneItem>{data.text}</DoneItem>
                    <button onClick={onFix}>수정</button>
                    <button
                        onClick={() => {
                            onDelete(data.id);
                        }}
                    >
                        삭제
                    </button>
                </>
            ) : (
                <>
                    <input
                        type="checkbox"
                        onClick={() => {
                            onToggle(data.id);
                        }}
                    />
                    <span>{data.text}</span>
                    <button onClick={onFix}>수정</button>
                    <button
                        onClick={() => {
                            onDelete(data.id);
                        }}
                    >
                        삭제
                    </button>
                </>
            )}
        </BoardItemWrapper>
    );
};

export default BoardItem;
