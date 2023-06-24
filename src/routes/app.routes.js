import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import StoreScreen from '../screens/StoreScreen';
import GiftScreen from '../screens/GiftScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomBar from '../components/BottomBar';

const Tab = createBottomTabNavigator();

export default function MyRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
        <Tab.Screen name="StoreScreen" component={StoreScreen} />
        <Tab.Screen name="GiftScreen" component={GiftScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}