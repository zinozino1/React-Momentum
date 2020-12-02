import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const HeaderWrapper = styled.div`
    border: 1px solid black;
    border-bottom: none;
    display: flex;
    text-align: center;
    .home-a,
    .board-a,
    .weather-a {
        color: #fff;
        text-decoration: none;
        flex: 1;

        .header-home,
        .header-board,
        .header-weather {
            padding: 30px;
            font-size: 24px;
            background-color: #222;
            font-weight: 600;
        }
    }
`;

const NavStyle = styled(NavLink)`
    &.active {
        color: aqua;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <NavStyle to="/" exact className="home-a" activeClassName="active">
                <div className="header-home">Home</div>
            </NavStyle>
            <NavStyle to="/board" className="board-a" activeClassName="active">
                <div className="header-board">Board</div>
            </NavStyle>
            <NavStyle
                to="/weather"
                className="weather-a"
                activeClassName="active"
            >
                <div className="header-weather">Weather</div>
            </NavStyle>
        </HeaderWrapper>
    );
};

export default Header;
