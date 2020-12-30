import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';
import { AppScreens, AuthStackParamList } from '../../navigation/AuthFlowNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
// import Reports from './ReportsScreen';
type LoginScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Login>;
interface LoginScreenProps {
    navigation: LoginScreenNavigationProps;
}
const styles = StyleSheet.create({
    btnSignupContainer: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: "white",
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 4,
        padding: 2,
        width: '100%',
        height: 50,
        paddingLeft: 20,
    },
    textInputContainer: {
        width: '100%',
    },
    txtHello: {
        fontSize: 30
    }
});
const LoginScreen: React.FunctionComponent<LoginScreenProps> = (props) => {
    const { navigation } = props;
    const [username, setUsername] = useState<string>('');
return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Image source = {require('../../assets/images/afya_logo.png')} />  
                <Text style={styles.txtHello}>Hello Sign in</Text> 
            </View>
            <View style={styles.textInputContainer}>
                <TextInput
                    value={username}
                    placeholder="username"
                    style={styles.textInput}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput placeholder="password" secureTextEntry={true} style={styles.textInput} />
            </View>
            {/* <View style={styles.btnContainer}>
                <Button title="Signup" onPress={() => navigation.navigate(AppScreens.Signup)} />
            </View> */}
            <View style={styles.btnContainer}>
                <Button title="Go to Modules" onPress={() => navigation.navigate(AppScreens.Modules, { username })} />
            </View>
        </SafeAreaView>
    );
};
export default LoginScreen;