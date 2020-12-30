import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AppScreens } from '../../navigation/AuthFlowNavigator';
type ModulesNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Modules>;
interface ModulesScreenProps {
    navigation: ModulesScreenNavigationProps;
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingTop: 10,
    },
    row: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginTop: 10,
    },
    item: {
      flex: 1,
      height: 120,
      paddingVertical: 20,
      borderColor: colors.primaryLight,
      borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
      marginHorizontal: 5,
    },
    blogItem: {
      width: '31%',
      height: 120,
      paddingVertical: 20,
      borderColor: colors.primaryLight,
      borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
      marginHorizontal: 5,
    },
    itemText: {
      color: colors.primary,
      fontFamily: fonts.primary,
    },
    itemImage: {
      height: 35,
    },
  });
  
const reportsIcon = require('../../assets/images/icons/reports');
const messagesIcon = require('../../assets/images/icons/messages');
const calenderIcon = require('../../assets/images/icons/calendar');
const faqIcon = require('../../assets/images/icons/faq');
const loginIcon = require('../../assets/images/icons/login');
const profileIcon = require('../../assets/images/icons/profile');

const ModulesScreen: React.FunctionComponent<ModulesScreenProps> = (props) => {
    const { navigation } = props;
return (
        <SafeAreaView style={styles.container}>
            <View style={styles.modulesContainer}>
              
                
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
export default ModulesScreen;
