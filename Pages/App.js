/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Container } from 'flux/utils';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ART } from 'react-native';

import AppStore from '../src/Stores/AppStore';
import AppApi from '../src/Api/AppApi';

// import Canvas from 'react-native-canvas';
import Canvas, { Image as CanvasImage, Path2D } from 'react-native-canvas';

const { Surface, Shape, Path, Group } = ART;

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
        ctx.fillStyle = 'red';
        ctx.fillText('测试文本', 100, 100, 100);
    }

    handleImageRect = (canvas) => {
        const image = new CanvasImage(canvas);
        canvas.width = 100;
        canvas.height = 100;

        const context = canvas.getContext('2d');
        const that = this;
        image.src = 'https://image.freepik.com/free-vector/unicorn-background-design_1324-79.jpg';
        image.addEventListener('load', () => {
            context.drawImage(image, 0, 0, 50, 50);
            console.log('绘制文字', context);
            that.test(context);
        });
    }
    test = (context) => {
        context.fillStyle = 'black';
        context.fillText('测试文本', 0, 0);
    }

    handleEmbedHTML = (canvas) => {
        const image = new CanvasImage(canvas);
        canvas.width = 100;
        canvas.height = 100;

        const context = canvas.getContext('2d');

        const htmlString = '<b>Hello, World!</b>';
        const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml" style="font-size: 40px; background: lightblue; width: 100vw; height: 100vh;">
              <span style="background: pink;">
                ${htmlString}
              </span>
            </div>
        </foreignObject>
    </svg>
    `;
        image.src = `data:image/svg+xml,${encodeURIComponent(svgString)}`;

        image.addEventListener('load', () => {
            context.drawImage(image, 0, 0, 100, 100);
        });
    }

    render() {
        const { list } = this.state;
        return (
            <View style={styles.container}>
                {list.length > 0 && this.showRender()}
                <Canvas ref={this.handleCanvas} />
                <Canvas ref={this.handleImageRect} />
                <Canvas ref={this.handleEmbedHTML} />
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