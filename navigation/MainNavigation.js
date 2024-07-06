import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: true}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      {/* <Stack.Screen name={Routes.Home} component={Home} /> */}
      <Stack.Screen name={'Drawer'} component={MainMenuNavigator} />
      {/* <Stack.Screen name={Routes.Profile} component={Profile} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigation;
