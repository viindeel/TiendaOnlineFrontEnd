import React from 'react';
import { AppNavigator } from './src/presentation/navigation/RootNavigator';
import {AuthProvider} from "./src/presentation/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator/>
    </AuthProvider>
  );
}