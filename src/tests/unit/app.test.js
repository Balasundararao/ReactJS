
// import React from 'react';
// import { shallow } from 'enzyme';
// import App from '../../src/App';
// import LandingPageComponent from '../../src/components/LandingPageComponent';
// import { Modal } from 'reactstrap';
// import '../../src/App.scss';
// it('renders without crashing', () => {
//   shallow(<App />);
// });


import React from 'react';
import { render } from '@testing-library/react';
import App from '../../../src/App.js';
import LandingPageComponent from '../../../src/components/LandingPageComponent';
import { Modal } from 'reactstrap';
import '../../../src/App.scss';
it('renders welcome message', () => {
  const { getByText } = render(<App />);
  //expect(getByText('Learn React')).toBeInTheDocument();
});