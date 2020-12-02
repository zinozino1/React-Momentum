import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getTime } from "../utils/getTime";

const HomeWrapper = styled.div`
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    .home-clock-wrapper {
        text-align: center;
        padding: 20px;
        .home-clock {
            font-size: 120px;
        }
    }

    .home-form {
        text-align: center;
        padding: 20px;
        .home-greeting {
        }
    }
`;

const Home = () => {
    const [time, setTime] = useState(null);
    const [input, setInput] = useState("");
    const [name, setName] = useState(localStorage.getItem("name"));

    useEffect(() => {
        const tictoc = setInterval(() => {
            setTime(getTime());
        }, 1000);
        return () => {
            clearInterval(tictoc);
        };
    }, []);

    const onChange = (e) => {
        setInput(e.target.value);
    };

    const onSubmit = (e) => {
        localStorage.setItem("name", input);
        setName(localStorage.getItem("name"));
    };

    return (
        <HomeWrapper>
            <div className="home-clock-wrapper">
                {time ? (
                    <span className="home-clock">
                        {time.hour}:{time.min}:{time.sec}
                    </span>
                ) : (
                    <span className="home-clock">00:00:00</span>
                )}
            </div>
            <div className="home-form">
                {name === null ? (
                    <>
                        <input
                            type="text"
                            placeholder="insert your name..."
                            onChange={onChange}
                        />
                        <button onClick={onSubmit}>Submit</button>
                    </>
                ) : (
                    <span className="home-greeting">{`Hello ${name}!`}</span>
                )}
            </div>
        </HomeWrapper>
    );
};

export default Home;
