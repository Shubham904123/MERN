import {createStore} from 'redux';
import reducers from './Reducer';

export default function configureStore(initialState){

    const store = createStore(reducers,initialState)
    return store
}