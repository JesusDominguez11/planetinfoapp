//styles


//navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import LoginScreen from "./screens/LoginScreen";
import SigninScreen from "./screens/SigninScreen";

//navigators
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const AuthenticationStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='AuthenticationScreen'>
      <Stack.Screen
        name='AuthenticationBottomTabNavigator'
        component={AuthenticationBottomTabNavigator}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name='HomeScreen'
        component={AppNavigator}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function AuthenticationBottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="LogIn" component={LoginScreen} />
      <Tab.Screen name="SignIn" component={SigninScreen} />
    </Tab.Navigator>
  );
}


export default function AuthenticationNavigator() {
  return (
    <AuthenticationStackNavigator/>
  );
}