
/**
 * author: yangyang
 * date: 2018-07-13
 */

import { ReduceStore } from 'flux/utils';
import AppTypes from '../ActionTypes/AppTypes';
import AppDispatche from '../Dispatcher/Dispatcher';

class AppStore extends ReduceStore {

    getInitialState() {
        return {
            list: []
        }
    }

    reduce (state, action) {
        switch(action.type) {
            case AppTypes.GETAPPLIST:
                return {
                    ...state,
                    list: action.data.data.list
                }
                break;
            default:
                return {
                    ...state
                };
        }
    }
}
const newStore = new AppStore(AppDispatche);
export default newStore;

