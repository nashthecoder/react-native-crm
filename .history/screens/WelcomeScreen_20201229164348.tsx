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
const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = (props) => {
    const { navigation } = props;
return (
        <SafeAreaView style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Image source = {require('../assets/images/afya_logo.png')} />   
                <Text style={styles.welcome}>CRM</Text>
            </View>
            <View style={styles.btnNextContainer}>
                <Button title="Welcome" onPress={() => navigation.navigate(AppScreens.Login)} />
            </View>
        </SafeAreaView>
    );
};
export default WelcomeScreen;