import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import RecipeBook from '../screens/RecipeBook/RecipeBook';
import Collections from '../screens/Collections/Collections';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RecipeBook" component={RecipeBook} />
      <Stack.Screen name="Collections" component={Collections} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
