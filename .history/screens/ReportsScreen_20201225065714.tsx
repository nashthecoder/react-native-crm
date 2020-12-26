import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Button, Card, CardItem, Icon, Content, Text } from 'native-base';
import { View } from '../components/Themed';

export default function ReportsScreen () {
  return (
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
          <CardItem bordered>
            <Body>
              <Button full info>
                <Text>Narrative</Text>
              </Button>
              <Button full info>
                <Text>Financial</Text>
              </Button>
              <Button full info>
                <Text>Uploads</Text>
              </Button>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Text>Review reports</Text>
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
