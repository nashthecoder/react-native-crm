/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import reducers from '../reducers/PeopleReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

const App: () => React$Node = () => {
  return (
     <>
     <Provider store={store}>
        <SafeAreaView>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Welcome to Afya Inc CRM</Text> 
                </Text>
              </View>
              </View>
        </SafeAreaView>
      </Provider> 
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  }
});

export default App;
