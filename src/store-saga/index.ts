import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./ducks/movies/sagas";
import rootSaga from "./ducks/rootSaga";
import { IMovieState } from "./ducks/movies/types";
import rootReducer from "./ducks/rootReducer";

interface IAplicationState{
  playingMovies: IMovieState

}

const sagaMiddleware = createSagaMiddleware()

const store: Store<IAplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
// sagaMiddleware.run(mySaga)

export default store