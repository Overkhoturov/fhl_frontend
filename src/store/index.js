import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import combinedReducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combinedReducers(),
  compose(applyMiddleware(sagaMiddleware),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

sagaMiddleware.run(rootSaga);

export default store;
