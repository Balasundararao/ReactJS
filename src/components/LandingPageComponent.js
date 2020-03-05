import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';

import HeaderComponent from './header/headercomponent';
import FooterComponent from './footer/footercomponent';

// User Components....
import WhistlerWeb from './practicecomponents/apple_whistler';
import ReactHooksMain from './practicecomponents/react_hooks/index';
import GraphQLMain from './practicecomponents/graphql/index';
import ReduxMain from './practicecomponents/react_redux/index';
import NpmsMain from './practicecomponents/from_npms/index';
import NoMatch from './practicecomponents/nomatch/index';
import InterviewsMain from './practicecomponents/interview_questions/index';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()



export default ({ name }) => {
	//const loggedIn = false;
	return (
		<Router>
		<div className="">	
			<HeaderComponent/>
			<main className="container-full">
				<Switch>
					{/* <Route exact path="/">
  						{ loggedIn ? <Redirect to="/dashboard" /> : <WelcomeComponent/> }
					</Route>		
								 */}
					<Route exact path="/"><Home/></Route>
					<Route path="/home"><Home/></Route>
					<Route path="/whistler-web"><WhistlerWeb/></Route>
					<Route path="/react-hooks" component={ReactHooksMain}></Route>
					<Route path="/graph-ql" component={GraphQLMain}></Route>
					<Route path="/react-redux" component={ReduxMain}></Route>
					<Route path="/npms-tests" component={NpmsMain}></Route>
					<Route path="/interview_questions" component={InterviewsMain}></Route>
					<Route path="*"><NoMatch/></Route>
				</Switch>
			</main>
			<FooterComponent/>
		</div>						 
		</Router>
	)
}
// ######################################################### ....... LOCAL Components....   #####################################
function Home() {
	return (
		<div className="lg">
			<div className="col-lg-4">
				<img alt="" src="img1.jpg" />
				<p>This is some awesome content that is on the page.</p>
				<button className="btn btn-red">Go Somewhere</button>
			</div>
			<div className="col-lg-4">
				<img alt="" src="img2.jpg" />
				<p>This is more content than the previous box, but less than the next.</p>
				<button className="btn btn-green">Click Me</button>
			</div>
			<div className="col-lg-4">
				<img alt="" src="img3.jpg" />
				<p>We have lots of content here to show that content can grow, and everything can be the same size if you use flexbox.</p>
				<button className="btn btn-blue">Do Something</button>
			</div>
		</div>
	);
}


