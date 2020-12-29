import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AppScreens } from './../navigation/AuthFlowNavigator';
type WelcomeScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Welcome>;
interface WelcomeScreenProps {
    navigation: WelcomeScreenNavigationProps;
}
const styles = StyleSheet.create({
    btnNextContainer: {
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: "white",
    },
    welcome: {
        fontSize: 30
    },
    welcomeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%', 
    },
    appName: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '800',
    }
});

const reportsIcon = require('../../assets/images/icons/reports');
const messagesIcon = require('../../assets/images/icons/messages');
const calenderIcon = require('../../assets/images/icons/calendar');
const faqIcon = require('../../assets/images/icons/faq');
const loginIcon = require('../../assets/images/icons/login');
const profileIcon = require('../../assets/images/icons/profile');

const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = (props) => {
    const { navigation } = props;
return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>Welcome</Text>
                <Image source = {require('../assets/images/afya_logo.png')} />   
                <Text style={styles.welcome}>CRM</Text>
            </View>
      <View style={styles.btnContainer}>
        <Button title="Messages" onPress={() => navigation.navigate(AppScreens.Messages)} />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Profile" onPress={() => navigation.navigate(AppScreens.Profile)} />
      </View>
        </SafeAreaView>
    );
};
export default WelcomeScreen;
