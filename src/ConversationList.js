// @flow
import React from 'react';
import { ScrollView } from 'react-native';
import ConversationListItem from './ConversationListItem';
import type { ConversationListItemT } from './ConversationListItem';

const ConversationList = (props: { messages: [ConversationListItemT] }) => (
  <ScrollView>
    {props.messages.map((m) => (
      <ConversationListItem {...m} key={m.id} />
    ))}
  </ScrollView>
);

export default ConversationList;
