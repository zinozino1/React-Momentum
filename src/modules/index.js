import { combineReducers } from "redux";
import boardList from "./boardList";
import { all } from "redux-saga/effects";
import { watchWeather } from "./weather";
import weather from "./weather";

const rootReducer = combineReducers({ boardList, weather });

export function* rootSaga() {
    yield all([watchWeather()]);
}

export default rootReducer;
