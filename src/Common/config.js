
//用于存放一些公共参数，将其暴露在全局作用下

import { Platform, Dimensions } from 'react-native';
import api from './api';
import utils from './utils';

const screenW = Dimensions.get('window').width;  
const screenH = Dimensions.get('window').height; 


const config = {
    width: screenW,
    height: screenH,
    platform: Platform.OS == 'ios' ? "ios" : android,
    utils: utils,
    api: api
}

global.config = config;