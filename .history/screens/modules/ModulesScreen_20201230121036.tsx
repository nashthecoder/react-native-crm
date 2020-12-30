import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AppScreens } from '../../navigation/AuthFlowNavigator';
type ModulesScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Modules>;
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
  
const reportsIcon = require('../../assets/images/reports');
const messagesIcon = require('../../assets/images/messages');
const calenderIcon = require('../../assets/images/calendar');
const faqIcon = require('../../assets/images/faq');
const loginIcon = require('../../assets/images/login');
const profileIcon = require('../../assets/images/profile');

const ModulesScreen: React.FunctionComponent<ModulesScreenProps> = (props) => {
    const { navigation } = props;
return (
        <SafeAreaView style={styles.container}>
            <View style={styles.modulesContainer}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Reports')}
                style={styles.item}
              >
                <Image
                  resizeMode="contain"
                  source={reportsIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Reports</Text>
              </TouchableOpacity>
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
