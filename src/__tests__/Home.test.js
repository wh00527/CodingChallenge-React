import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});
import Home from '../views/Home';

describe('<Home />', () => {
  describe('renders', () => {
    it('H1 exist in page', () => {
      shallow(
        <Provider store={store}>
           <Home />
        </Provider>,
      ).exists(<h1>Welcome! Book listing page</h1>);
    });
  });
});
