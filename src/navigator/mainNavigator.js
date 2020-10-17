import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile146474Navigator from '../features/UserProfile146474/navigator';
import Tutorial146473Navigator from '../features/Tutorial146473/navigator';
import NotificationList146445Navigator from '../features/NotificationList146445/navigator';
import Settings146444Navigator from '../features/Settings146444/navigator';
import Settings146436Navigator from '../features/Settings146436/navigator';
import UserProfile146434Navigator from '../features/UserProfile146434/navigator';
import Settings146398Navigator from '../features/Settings146398/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile146474: { screen: UserProfile146474Navigator },
Tutorial146473: { screen: Tutorial146473Navigator },
NotificationList146445: { screen: NotificationList146445Navigator },
Settings146444: { screen: Settings146444Navigator },
Settings146436: { screen: Settings146436Navigator },
UserProfile146434: { screen: UserProfile146434Navigator },
Settings146398: { screen: Settings146398Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
