import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Content, Text } from 'native-base';
import { View } from '../components/Themed';

export default function ReportsScreen() {
  return (
    <Container>
      <Header>
        <Text>Instructions: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </Header>
      <View style= {{
        flexDirection: "column",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#FFFDD0"
      }}>
          <Button full info>
            <Text>Narrative</Text>
          </Button>
          <Button full info>
            <Text>Financial</Text>
          </Button>
          <Button full info>
            <Text>Uploads</Text>
          </Button>
      </View>
    </Container>
  );
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
