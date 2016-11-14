// @flow
import React from 'react';
import {
  Text,
  View
} from 'react-native';

export type ConversationListItemT = {
  author: string,
  lastMessage: Date,
  id: number
};

const ConversationListItem = (props: ConversationListItemT) => (
  <View>
    <Text>{props.author}</Text>
    <Text>{props.lastMessage.getFullYear()}</Text>
  </View>
);

export default ConversationListItem;
