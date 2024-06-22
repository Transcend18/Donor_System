import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../Screens/LoginScreen";
import { SignupScreen } from "../Screens/SignupScreen";
import { OnBoarding } from "../Slides/OnBoarding";
import { HomeScreen } from "../Screens/HomeScreen";
import { Profile } from "../Screens/Profile";
import { Notification } from "../Screens/Notifications";
import { Services } from "../Screens/Services";
import { ServiceAppointment } from "../Screens/ServiceAppointment";
import { ClientMatching } from "../Screens/ClientAppointment";

export function StackNavigaton(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="onBoarding" screenOptions={{headerShown: false}}>
                <Stack.Screen name="OnBoarding" component={OnBoarding}/>
                <Stack.Screen name="Signup" component={SignupScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Notification" component={Notification}/>
                <Stack.Screen name="Services" component={Services}/>
                <Stack.Screen name="ClientMatching" component={ClientMatching}/>
                <Stack.Screen name="ServiceAppointment" component={ServiceAppointment}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}