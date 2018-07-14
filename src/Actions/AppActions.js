/**
 * author: yangyang
 * date: 2018-07-13
 */

import AppTypes from "../ActionTypes/AppTypes";
import {dispatcher} from '../Dispatcher/Dispatcher';
  
const AppActions = {
    //首页获取列表数据
    getAppList(data) {
        dispatcher({
            type: AppTypes.GETAPPLIST,
            data: data
        });
    }
}

export default AppActions;