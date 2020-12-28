import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AppScreens } from './../navigation/AuthFlowNavigator';
import { Container, Header, Content, List, ListItem, Left, Icon, Item, Input, Body, Right, Thumbnail } from 'native-base';
type MessagesScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Messages>;
interface MessagesScreenProps {
    navigation: MessagesScreenNavigationProps;
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

const uri = 'https://avatars1.githubusercontent.com/u/15178823?s=460&u=37b7e0864e67a10698025f3abc5c12a287fa1f53&v=4';

const MessagesScreen: React.FunctionComponent<MessagesScreenProps> = (props) => {
  const { navigation } = props;

return (
<SafeAreaView style={styles.container}>
  <Container>
    <Header searchBar >
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search" />
        <Icon name="ios-people" />
      </Item>
    </Header>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{uri: uri}} />
            </Left>
            <Body>
              <Text>Amina Mwajuma</Text>
              <Text note numberOfLines={1}>Re: Afya Project Q4 Report query on budget  . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{uri: uri}} />
            </Left>
            <Body>
              <Text>Amina Mwajuma</Text>
              <Text note numberOfLines={1}>Re: Afya Project Q4 Report query on budget  . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{uri: uri}} />
            </Left>
            <Body>
              <Text>Amina Mwajuma</Text>
              <Text note numberOfLines={1}>Re: Afya Project Q4 Report query on budget  . .</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{uri: uri}} />
            </Left>
            <Body>
              <Text>Hassan Juma</Text>
              <Text note numberOfLines={1}>Re: Afya Project Q4 Report notes  . .</Text>
            </Body>
            <Right>
              <Text note>1:04 pm</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{uri: uri}} />
            </Left>
            <Body>
              <Text>Peter Otieno</Text>
              <Text note numberOfLines={1}>Re: Afya Project Q4 Report update . .</Text>
            </Body>
            <Right>
              <Text note>5:15 pm</Text>
            </Right>
          </ListItem>
        </List>
    </Content>
  </Container>
    <View style={styles.btnContainer}>
      <Button title="Reports" onPress={() => navigation.navigate(AppScreens.Messages)} />
    </View>
    <View style={styles.btnContainer}>
      <Button title="Profile" onPress={() => navigation.navigate(AppScreens.Profile)} />
    </View>
</SafeAreaView>  
    );
};

export default MessagesScreen;