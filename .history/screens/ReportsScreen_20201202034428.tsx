import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Content, Text } from 'native-base';
import { View } from '../components/Themed';

export default function ReportsScreen() {
  return (
    <Container>
      <View>
          <Button first>
            <Text>Narrative</Text>
          </Button>
          <Button>
            <Text>Financial</Text>
          </Button>
          <Button last active>
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
