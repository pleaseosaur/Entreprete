import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import RecipeBook from '../screens/RecipeBook/RecipeBook';
import Collections from '../screens/Collections/Collections';
import CalendarScreen from "../screens/Calendar/Calendar";
import RecipePage from '../screens/RecipePage/RecipePage';
import MealPlans from '../screens/MealPlans/MealPlans';
import EditCollection from '../screens/EditCollection/EditCollection';
import CollectionPage from '../screens/CollectionPage/CollectionPage';
import MealPlanPage from '../screens/MealPlanPage/MealPlanPage';

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{header: () => null, headerShown: false}}
            initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RecipeBook" component={RecipeBook} />
            <Stack.Screen name="Collections" component={Collections} />
            <Stack.Screen name={'Calendar'} component={CalendarScreen} />
            <Stack.Screen name={'RecipePage'} component={RecipePage} />
            <Stack.Screen name={'MealPlan'} component={MealPlans} />
            <Stack.Screen name={'EditCollection'} component={EditCollection} />
            <Stack.Screen name={'CollectionPage'} component={CollectionPage} />
            <Stack.Screen name={'MealPlanPage'} component={MealPlanPage} />
        </Stack.Navigator>
    );
};

export default MainNavigation;