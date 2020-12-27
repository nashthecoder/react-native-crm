import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AppScreens } from './../navigation/AuthFlowNavigator';
type WelcomeScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Welcome>;
interface WelcomeScreenProps {
    navigation: WelcomeScreenNavigationProps;
}
const styles = StyleSheet.create({
    btnNextContainer: {
        alignSelf: 'flex-end'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    welcome: {
        fontSize: 30
    },
    welcomeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%'
    },
    welcomeLogo: {
        alignItems: 'center',
    }
});
const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = (props) => {
    const { navigation } = props;
return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>Welcome</Text>
            </View>
            <View style={styles.welcomeLogo}>
                <Image source = {require('../assets/images/afya_logo.png')} />   
            </View>
            <View style={styles.appName}>
                <Text style={styles.welcome}>CRM</Text>
            </View>
            <View style={styles.btnNextContainer}>
                <Button title="Next" onPress={() => navigation.navigate(AppScreens.Login)} />
            </View>
        </SafeAreaView>
    );
};
export default WelcomeScreen;