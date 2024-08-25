import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import Home from '@/layouts/Home';
import SingUp from '@/feature/Singup/container';
import { NotifierWrapper } from 'react-native-notifier';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import SingIn from '@/feature/Singin/container';
import { ForgetPassword } from '@/feature/ForgetPassword/container';
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient()
const App = () => {
    return (
        <GestureHandlerRootView >
            <NativeBaseProvider >
                <QueryClientProvider client={queryClient}>
                    <NotifierWrapper>
                        <Stack.Navigator initialRouteName="Home">
                            <Stack.Screen
                                name="Home"
                                component={Home}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="SingIn"
                                component={SingIn}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="SingUp"
                                component={SingUp}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="ForgetPassword"
                                component={ForgetPassword}
                                options={{ headerShown: false }}
                            />
                        </Stack.Navigator>
                    </NotifierWrapper>
                </QueryClientProvider>
            </NativeBaseProvider>
        </GestureHandlerRootView>
    );
};

export default App;
