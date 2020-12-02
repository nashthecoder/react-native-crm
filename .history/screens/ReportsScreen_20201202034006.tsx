import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
const dataArray = [
  { title: "Narrative Section", content: "Lorem ipsum dolor sit amet" },
  { title: "Financial Section", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default function ReportsScreen() {
  return (
    
    
  )
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
