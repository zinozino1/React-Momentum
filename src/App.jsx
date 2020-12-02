import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import BoardListContainer from "./containers/BoardListContainer";
import WeatherContainer from "./containers/WeatherContainer";
import Header from "./components/Header";
import styled from "styled-components";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

const AppWrapper = styled.div`
    width: 900px;
    margin: auto;
    margin-top: 80px;
`;
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => {
    return (
        <AppWrapper>
            <Provider store={store}>
                <Header></Header>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/board" component={BoardListContainer}></Route>
                    <Route path="/weather" component={WeatherContainer}></Route>
                </Switch>
            </Provider>
        </AppWrapper>
    );
};

export default App;
