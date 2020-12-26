import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../../screens/WelcomeScreen";
import LoginScreen from "../../screens/Auth/LoginScreen";
import SignupScreen, { SignupParams } from "../../screens/Auth/SigupScreen";

export enum AppScreens {
  Welcome = "Welcome",
  Login = "Login",
  Signup = "Signup"
}

export type AuthStackParamList = {

}
