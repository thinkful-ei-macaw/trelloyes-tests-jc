import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List Component Tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header="first list" cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders with list', () => {
    const tree = renderer
    .create(<List header="first header" cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })
});