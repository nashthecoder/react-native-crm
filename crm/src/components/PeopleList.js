import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';


const styles = StyleSheet.create ({

}); 

function PeopleList() {
    return (
        <div>
            <View></View>
        </div>
    )
}

const mapSateToProps = state => {
    return {people: state.people }
}

export default PeopleList
