import React from 'react'
import {UserContext, ChannelContext} from './index'

const ComponentF = () => {
    return(
        <div>
            <p>ComponentF</p>
            {/* <UserContext.Consumer>
                {
                    you => {
                    return <div> User is : {you}</div>
                    }
                }
            </UserContext.Consumer> */}
            <UserContext.Consumer>
                {
                    user => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return <div>user Context Value : {user}, Channel Context Value: {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}
export default ComponentF;