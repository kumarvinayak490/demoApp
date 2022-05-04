import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import store from '../store/index'
import App from '../App'
import Profile from '../pages/Profile/Profile'

const RouterComponent = () => {

    return (
        <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistStore(store)} loading={null} >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
        </React.StrictMode>
    )
}


export default RouterComponent