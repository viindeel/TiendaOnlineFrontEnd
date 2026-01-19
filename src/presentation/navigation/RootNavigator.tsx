import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginView from "../views/auth/login/LoginView";
import RegisterView from "../views/auth/register/RegisterView";
import {NavigationContainer} from "@react-navigation/native";

type RootStackParamList = {
    Login: undefined;
    Registro: undefined;
}



const Stack = createNativeStackNavigator<RootStackParamList>();

export const  AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 

            screenOptions={{headerShown: false, animation: 'slide_from_bottom', }}>
                <Stack.Screen name="Login" component={LoginView} />
                <Stack.Screen name="Registro" component={RegisterView} options={{
                    headerShown: true,
                      headerTitle: 'Tienda Online',
                      headerBackTitle: 'Volver',
                      headerTitleAlign: 'center',
                      animation: 'slide_from_bottom',}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

