// @flow
import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View
} from 'react-native';

const Register = () => (
  <View>
    <TextInput
      keyboardType="email-address"
      placeholder="Email address" />
    <TextInput
      placeholder="Password"
      secureTextEntry />
    <Button
      title="Register" />
  </View>
);

export default Register;
