import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";

const stackContainer = createStackNavigator(
  {
    Dashboard,
    Settings
  },
  {
    initialRouteName: "Dashboard"
  }
);

const AppContainer = createAppContainer(stackContainer);

export default AppContainer;
