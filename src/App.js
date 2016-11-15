// @flow
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import {
  Text,
  View
} from 'react-native';

// will be useful when Flow supports GraphQL
type Props = {
  data: {
    getUser: {
      username: string
    },
    loading: boolean
  }
};

const AppQuery = gql`
  query GetUser($user: ID!) {
    getUser(id: $user) {
      username
    }
  }
`;

// export the un-wrapped component for testing
export const App = (props: Props) => {
  if(!props.data.loading) {
    return (
      <View>
        <Text>Welcome to Messenger, {props.data.getUser.username}</Text>
      </View>
    );
  }
  return null;
};

export default graphql(AppQuery, {
  options: { variables: { user: "VXNlcjox" } }
})(App);
