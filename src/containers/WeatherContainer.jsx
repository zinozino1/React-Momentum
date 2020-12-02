import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../modules/weather";
import Weather from "../components/Weather";

const WeatherContainer = ({ loading, data, fetchWeather }) => {
    return (
        <Weather
            loading={loading}
            data={data}
            fetchWeather={fetchWeather}
        ></Weather>
    );
};

export default connect(
    (state) => ({
        loading: state.weather.loading,
        data: state.weather.data,
    }),
    { fetchWeather },
)(WeatherContainer);
