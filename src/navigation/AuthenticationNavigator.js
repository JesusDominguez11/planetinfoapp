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
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
          backgroundColor: '#000000', // Color de fondo negro
          borderTopWidth: 0, // Quita el borde superior
      },
      tabBarActiveTintColor: '#FFFFFF', // Color del texto y iconos activos
      tabBarInactiveTintColor: '#FFFFFF', // Color del texto y iconos inactivos
      tabBarLabelStyle: {
          fontSize: 14, // Tamaño de fuente de las etiquetas
      },
      tabBarIconStyle: {
          shadowColor: '#fff', // Color de sombra blanca
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5, // Elevación para Android
          display: "none",
      },
  }}
    >
      <Tab.Screen name="LogIn" component={LoginScreen} options={{ headerShown: false }} />
      <Tab.Screen name="SignIn" component={SigninScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}


export default function AuthenticationNavigator() {
  return (
    <AuthenticationStackNavigator/>
  );
}