import React, {useContext} from 'react'
import ComponentF from './ComponentF'

import {UserContext, ChannelContext} from './index'
const ComponentE = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return(
        <div>
            <p>ComponenE:: using useContext and values are :: {user}, {channel}</p>
            <div>
                <ComponentF/>
            </div>
        </div>
    )
}
export default ComponentE