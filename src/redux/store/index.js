import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from "redux-persist-transform-encrypt";
import reducerLib from '../reducers/index.js'



export const initialState = {
    user: {
        isLogged: false,
        userData: {
        },
    },
}

export const groupedReducers = combineReducers({
    user: reducerLib.userReducer,
})


const configPersistance = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_REDUX_STORAGE_SECRET_KEY
        }),
    ]
}

export const persistedReducer = persistReducer(configPersistance, groupedReducers)



const configureStore = createStore(
    persistedReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
)

export const persistor = persistStore(configureStore)
export default configureStore

