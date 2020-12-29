import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import ReportsScreen from '../screens/Auth/ReportsScreen';
import SignupScreen, { SignupParams } from '../screens/Auth/SignupScreen';
import MessagesScreen from '../screens/MessagesScreen';
import PagesView from '../screens/pages/PagesView';

export enum AppScreens {
    Welcome = 'Welcome',
    Login = 'Login',
    Signup = 'Signup',
    Reports = 'Reports',
    Messages = 'Messages'

}
export type AuthStackParamList = {
    Login: undefined;
    Signup: SignupParams;
    Welcome: undefined;
    Reports: undefined;
    Messages: undefined;
};
const AuthStack = createStackNavigator<AuthStackParamList>();
const AuthFlowNavigator: React.FunctionComponent = () => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name={AppScreens.Welcome} component={WelcomeScreen} />
            <AuthStack.Screen name={AppScreens.Login} component={LoginScreen} />
            <AuthStack.Screen name={AppScreens.Signup} component={SignupScreen} />
            <AuthStack.Screen name={AppScreens.Reports} component={ReportsScreen} />
            <AuthStack.Screen name={AppScreens.Messages} component={MessagesScreen} />
        </AuthStack.Navigator>
    );
};
export default AuthFlowNavigator;