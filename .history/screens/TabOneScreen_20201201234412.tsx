import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import { View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <Container>
      <Segment>
          <Button first>
            <Text>Narrative</Text>
          </Button>
          <Button>
            <Text>Financial</Text>
          </Button>
          <Button last active>
            <Text>Uploads</Text>
          </Button>
        </Segment>
        <Content padder>
          <Text>Upload supporting documents...</Text>
        </Content>
      {/* <View style={styles.container}>
      <Segment>
      <Text style={styles.title}>Report</Text>
      </Segment>
      
      </View> */}
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
