import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginView from './src/presentation/views/auth/login/LoginView';
import RegisterView from './src/presentation/views/auth/register/RegisterView';

export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  "Olvida-contraseña": undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Registro" component={RegisterView} />
        <Stack.Screen name="Olvida-contraseña" component={RegisterView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;