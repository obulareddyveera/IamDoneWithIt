import React from 'react';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

const HelloWorldApp = () => {
  const name = 'Veera';
  console.log('--== HelloWorldApp ', name);

  return <ViewImageScreen />;
};
export default HelloWorldApp;
