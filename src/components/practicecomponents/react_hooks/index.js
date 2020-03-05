import React from 'react';

// React Hooks 
import HooksCounter from './HooksCounter';
import HooksCounterTwo from './HooksCounterTwo';
import DataFetcher from './Hook_data_fetcher';
import DataFetcherOne from './Hook_data_fetcher_one';
import ComponentC from './ComponentC';
import Counter1UseRed from './Hooks_useRed_counter1';
import Counter2UseRed from './Hooks_useRed_counter2';
import Counter3UseRed from './Hooks_useRed_counter3';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

const ReactHooksMain = () => {
    return (
        <div className="lg">
            <div className="col-lg-12">            
                <div><HooksCounter/></div>
                <div><HooksCounterTwo/></div>
                <div><DataFetcher/></div>
                <div><DataFetcherOne/></div>
                <div>
                    <UserContext.Provider value={'Balasundar'}>
                    <ChannelContext.Provider value={'Thunga'}>
                        <ComponentC/>
                    </ChannelContext.Provider>
                    </UserContext.Provider>
                </div>
                <br/>
                <div><Counter1UseRed/></div>
                <div><Counter2UseRed/></div>
                <div><Counter3UseRed/></div>
            </div>
        </div>
    )
}

export default ReactHooksMain;