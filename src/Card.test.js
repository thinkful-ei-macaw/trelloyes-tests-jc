import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component tests', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders with title and content', () => {
    const tree = renderer
    .create(<Card title="First Card" content="lorem shmipsum"/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });


});