import React from 'react';
import { Text } from 'native-base';
import { Spinner } from 'native-base';

function LogOut() {
    return (
      <Spinner accessibilityLabel="Loading posts" />
    );
}

export default LogOut;