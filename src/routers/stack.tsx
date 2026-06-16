import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/Login';
import { ParametrosRotasStack } from './navigation';
import { TabNavigation } from './tab';

const Stack = createStackNavigator<ParametrosRotasStack>();

export function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackLogin" component={Login} />
      <Stack.Screen
          name="MainTabs"
          component={TabNavigation}
        />
    </Stack.Navigator>
  );
}