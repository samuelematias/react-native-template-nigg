import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '~/modules/home/screens/HomeScreen';

const HomeStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
  },
);

const Navigation = createStackNavigator(
  {
    HomeStack: { screen: HomeStack },
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeStack',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default createAppContainer(Navigation);
