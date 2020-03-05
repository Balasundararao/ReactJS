import React from 'react';
import {Provider} from 'react-redux'
import store from '../../../redux/store'
import CakeContainer from './cakecontainer'
import HooksCakeContainer from './hooksCakeContainer'
import IceCreamContainer from './iceCreamContainer'

const ReduxMain = () => {
    return (
        <div className="lg">
            <div className="col-lg-12"> 
            <p> Redux Main Page.....</p>
            <Provider store={store}>
                {/*  Using connector for connecting redux from react    */}
                <CakeContainer/> 
                <HooksCakeContainer/>
                <IceCreamContainer/>
            </Provider>
            </div>
        </div>
    )
}

export default ReduxMain;