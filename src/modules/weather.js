import { takeEvery, put, all, call } from "redux-saga/effects";
import { createAction, handleActions } from "redux-actions";
import getWeather from "../api/fetchWeather";

// action type

const GET_WEATHER_FETCHING = "weather/GET_WEATHER_FETCHING";
const GET_WEATHER_SUCCESS = "weather/GET_WEATHER_SUCCESS";
const GET_WEATHER_FAILURE = "weather/GET_WEATHER_FAILURE";
const GET_WEATHER_SET_LOADING = "weather/GET_WEATHER_SET_LOADING";

// action creator

export const fetchWeather = createAction(GET_WEATHER_FETCHING);

// initial state

const initialState = {
    loading: false,
    data: null,
};

// saga

function* weatherSaga(action) {
    yield put({ type: GET_WEATHER_SET_LOADING, payload: true });
    try {
        const weather = yield call(getWeather);
        yield put({ type: GET_WEATHER_SUCCESS, payload: weather.data });
    } catch (error) {
        yield put({ type: GET_WEATHER_FAILURE });
    }
    yield put({ type: GET_WEATHER_SET_LOADING, payload: false });
}

// watcher

export function* watchWeather() {
    yield takeEvery(GET_WEATHER_FETCHING, weatherSaga);
}

// reducer

const weather = handleActions(
    {
        [GET_WEATHER_SUCCESS]: (state, action) => ({
            ...state,
            data: action.payload,
        }),
        [GET_WEATHER_FAILURE]: (state, action) => ({ ...state }),
        [GET_WEATHER_SET_LOADING]: (state, action) => ({
            ...state,
            loading: action.payload,
        }),
    },
    initialState,
);
export default weather;
