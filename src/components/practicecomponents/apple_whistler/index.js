import React from 'react';
import AddForm from './add_form';
import { Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import DataFetcher from '../react_hooks/Hook_data_fetcher';
import SupportComponent from './support/index';
import AdHocEvaluationComponent from './adhocevalution/index';
const WhistlerWeb = () =>{
    let match = useRouteMatch();	
    return(
        <div>
            <div className="lg">
            <nav className="navbar_topsub">
            <ul>
                <li><Link to={`${match.url}/view-anomaly-groups`}>Datasets</Link></li>
                <li><Link to={`${match.url}/evaluation`}>On-boarding</Link></li>
                <li><Link to={`${match.url}/topic`}>Workspace</Link></li>
                <li><Link to={`${match.url}/compute/support`}>Support</Link></li>
            </ul>
            </nav>
            </div>    
            <div className="lg">    
            <Switch>
                <Route path={`${match.url}/topic`} component={Topic}></Route>
                <Route path={`${match.url}/compute/support`} component={SupportComponent}></Route>
                <Route path={`${match.url}/evaluation`} component={AdHocEvaluationComponent}></Route>
                <Route path={`${match.url}`}><WhistlerNavLinks/></Route>
            </Switch>
            </div>
        </div>
    )
}
function WhistlerNavLinks() {
    return(
        <>
        <h3> Hello </h3>
        </>
    )
}

function Topic() {
	return(
		<div className="lg">
			<h3>Requested Topic Id is :: Hello </h3>
		</div>
	)
}
export default WhistlerWeb;