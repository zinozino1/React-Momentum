import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

const WeatherWrapper = styled.div`
    border: 1px solid black;
    .location,
    .cloud,
    .wind {
        padding: 20px;
    }
`;

const Weather = ({ loading, data, fetchWeather }) => {
    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    if (loading) return <p>loading...</p>;

    if (data) {
        return (
            <WeatherWrapper>
                <div className="location">지역 : {data.name}</div>
                <div className="cloud">구름 : {data.clouds.all}%</div>
                <div className="wind">풍속 : {data.wind.speed}</div>
            </WeatherWrapper>
        );
    }
    return <p>error!</p>;
};

export default Weather;
