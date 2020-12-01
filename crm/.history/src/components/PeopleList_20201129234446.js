import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';


const styles = StyleSheet.create ({
    container: {
        flex:1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
}); 

function PeopleList() {
    return (
        <div>
            <View styles.container>
                <Flatlist 
                    data={this.props.people}
                    renderItem={({item}) => <PeopleItem people={item}} />
                />
            </View>
        </div>
    )
}

const mapSateToProps = state => {
    return {people: state.people }
}

export default connect(mapStateToProps)(PeopleList);
