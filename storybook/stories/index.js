// @flow
import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import ConversationList from '../../src/ConversationList';
import Register from '../../src/Register';

const messages = [
  {
    id: 1,
    author: "john",
    lastMessage: new Date()
  },
  {
    id: 2,
    author: "mickey",
    lastMessage: new Date()
  }
];

storiesOf('Main')
  .add('ConversationList', () => (
    <ConversationList messages={messages} />
  ))
  .add('Register', () => (
    <Register />
  ))
