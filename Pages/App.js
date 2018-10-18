/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Container } from 'flux/utils';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ART} from 'react-native';

import AppStore from '../src/Stores/AppStore';
import AppApi from '../src/Api/AppApi';

// import Canvas from 'react-native-canvas';
import Canvas, {Image as CanvasImage, Path2D} from 'react-native-canvas';

const {Surface, Shape, Path,Group} = ART;

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

    handleCanvas = (canvas) => {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'purple';
        ctx.fillRect(0, 0, 100, 100);
    }

    handleImageRect = (canvas) => {
        const image = new CanvasImage(canvas);
        canvas.width = 320;
        canvas.height = 320;

        const context = canvas.getContext('2d');

        image.src = 'https://image.freepik.com/free-vector/unicorn-background-design_1324-79.jpg';
        image.addEventListener('load', () => {
          context.drawImage(image, 0, 0, 100, 100);
        });
    }

    render() {
        const {list} = this.state;
        // const pathRect = new Path()
        //     .moveTo(1,1)
        //     .lineTo(1,99)
        //     .lineTo(99,99)
        //     .lineTo(99,1)
        //     .close();

        // const pathCircle = new Path()
        //     .moveTo(50,1)
        //     .arc(0,99,25)
        //     .arc(0,-99,25)
        //     .close();

        // const pathText = new Path()
        //     .moveTo(40,5)
        //     .lineTo(40,99);

        return (
            <View style={styles.container}>
                {list.length > 0 && this.showRender()}
                <Canvas ref={this.handleCanvas} />
                <Canvas ref={this.handleImageRect} />
                {/* <Surface width={100} height={100}>
                    <Group>
                        <Shape d={pathRect} stroke="#000000" fill="#000000" strokeWidth={1}/>
                        <Shape d={pathCircle} stroke="#FFFFFF" fill="#FFFFFF" strokeWidth={1}/>
                        <Text strokeWidth={1} strokeDash={[2,1,2,1]} stroke="#000" font="bold 30px Heiti SC" path={pathText} >Swipe</Text>
                    </Group>
                </Surface> */}
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