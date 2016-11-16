// @flow
import React from 'react';
import {
  Button,
  TextInput,
  View
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Register = (props) => (
  <View>
    <TextInput
      keyboardType="email-address"
      placeholder="Email address" />
    <TextInput
      placeholder="Password"
      secureTextEntry />
    <Button
      title="Register"
      onPress={() => props.submit({ username: "johnyj", password: "fdffdfdf" })}/>
  </View>
);

const registerUser = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(input: $user) {
      changedUser {
        id,
        username
      }
    }
  }
`;

export default graphql(registerUser, {
  props: ({ mutate }) => ({
    submit: (user) => mutate({
      variables: { user }
    })
  })
})(Register);
