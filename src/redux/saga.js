import { takeEvery, call, put } from "redux-saga/effects";
import { isFetching, dataLoaded, dataLoadError } from "./reducer";
import { dataAPI } from "../Api/Api";

export function* watchFetching() {
  yield takeEvery("FETCH_DATA", fetchDataAsync);
}

export function* fetchDataAsync(action) {
  try {
    yield put(isFetching(true));
    const data = yield call(() => {
      return dataAPI.getData(action.payload);
    });

    yield put(isFetching(false));
    yield put(dataLoaded(data));
  } catch (error) {
    yield put(dataLoadError());
    yield put(isFetching(false));
  }
}
