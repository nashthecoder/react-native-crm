import React, { useState } from 'react'
import { Container, Header, Body, Card, CardItem, Icon, Content,} from 'native-base';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { AppScreens, AuthStackParamList } from '../../navigation/AuthFlowNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigator } from '../../navigation/BottomTabNavigator'; 
type ReportsScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Reports>;
interface ReportsScreenProps {
    navigation: ReportsScreenNavigationProps;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})

const ReportsScreen: React.FunctionComponent<ReportsScreenProps> = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <Container>
      <Header>
        <Text style={styles.bold}>Instructions: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </Header>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Report Overview</Text>
            </CardItem>
            <CardItem bordered button>
              <Body>
                <Text>Narrative</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Financial</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Attachments</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <View style={{
          flexDirection: 'column',
          padding: 10,
          justifyContent: 'space-between',
          marginTop: 5,
          alignItems: 'center' ,
          backgroundColor: '#FFFFFF',
          space: {
            height: 20
            }
        }}
        >
        </View>
      </Container>
      <View style={styles.btnNextContainer}>
        <Button title="Messages" onPress={() => navigation.navigate(AppScreens.Login)} />
      </View>
    </SafeAreaView>
    );
};
export default ReportsScreen;
  
  

