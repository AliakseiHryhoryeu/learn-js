import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_POSTS, REQUEST_POSTS } from './types'
import { showLoader, hideLoader, showAlert } from './actions'

export default function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({ type: FETCH_POSTS, payload })
        yield put(hideLoader())
    } catch (e) {
        yield put(showAlert(e.message))
        yield put(hideLoader())
    }
}

async function fetchPosts() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    return await responce.json()
}
