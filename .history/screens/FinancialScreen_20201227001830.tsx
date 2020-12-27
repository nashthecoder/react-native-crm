import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AppScreens } from './../navigation/AuthFlowNavigator';
type FinancialScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Financial>;
interface FinancialScreenProps {
    navigation: FinancialScreenNavigationProps;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


const FinancialScreen: React.FunctionComponent<FinancialScreenProps> = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financial</Text>
      <Container>
          <Header>
          <Button full info>
            <Text>Narrative</Text>
          </Button>
          <Button>
            <Text>Financial</Text>
          </Button>
          <Button full>
            <Text>Uploads</Text>
          </Button>
          </Header>
      </Container>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.js" /> */}
    <View style={styles.btnNextContainer}>
      <Button title="Narrative" onPress={() => navigation.navigate(AppScreens.Login)} />
    </View>
    <View style={styles.btnNextContainer}>
      <Button title="Financial" onPress={() => navigation.navigate(AppScreens.Login)} />
    </View>
    <View style={styles.btnNextContainer}>
      <Button title="Uploads" onPress={() => navigation.navigate(AppScreens.Login)} />
    </View>
    </View>
  );

export default FinancialScreen; 