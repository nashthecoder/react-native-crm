import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Icon, Item, Input, Body, Right, Thumbnail, Text } from 'native-base';

export default function MessagesScreen() {
  render() {
  const uri = '../assets/images/avatar.png';

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
      </Header>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{uri: uri}} />
              </Left>
              <Body>
                <Text>Amina Mwajuma</Text>
                <Text note>Re: Afya Proejct Q4 Report query on budget  . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
  );
  },
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


{/* <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/MessagesScreen.js" />
</View> */}