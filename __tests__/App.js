import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../src/App';

const dataLoading = {
  loading: true
};

const dataLoaded = {
  getUser: {
    username: "John"
  },
  loading:false
};

it('renders correctly when loading', () => {
  const tree = renderer.create(
    <App data={dataLoading}/>
  );
});

it('renders correctly when loaded', () => {
  const tree = renderer.create(
    <App data={dataLoaded}/>
  );
});
