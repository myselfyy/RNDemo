/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Container } from 'flux/utils';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AppStore from '../src/Stores/AppStore';
import AppApi from '../src/Api/AppApi';

class App extends Component {
    static getStores() {
        return [AppStore];
    }

    static calculateState() {
        return AppStore.getState();
    }

    componentDidMount() {
        AppApi.getList();
    }

    showRender() {
        const { list } = this.state;
        return list.map((item, index) => {
            return (
                <Text key={index} style={styles.text}>{item}</Text>
            )
        })
    }

    render() {
        const {list} = this.state;
        return (
            <View style={styles.container}>
                {list.length > 0 && this.showRender()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});


const AppHome = Container.create(App);
export default AppHome;