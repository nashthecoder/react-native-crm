import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
const dataArray = [
  { title: "Narrative Section", content: "Lorem ipsum dolor sit amet" },
  { title: "Financial Section", content: "Lorem ipsum dolor sit amet" },
  { title: "Uploads", content: "Lorem ipsum dolor sit amet" }
];

export default function ReportsScreen() {
  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#A9DAD6" }}>
      <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder style={{ backgroundColor: "white" }}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}
/* export default function ReportsScreen() {
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
 */