// option 1:
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({adapter: new Adapter()});

// option: 2
import '@testing-library/jest-dom/extend-expect';
