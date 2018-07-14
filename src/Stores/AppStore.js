
/**
 * author: yangyang
 * date: 2018-07-13
 */

import { ReduceStore } from 'flux/utils';
import AppActions from '../Actions/AppActions';
import AppDispatche from '../Dispatcher/Dispatcher';

class AppStore extends ReduceStore {

    getInitialState() {
        return {
            list: []
        }
    }

    reduce (state, action) {
        switch(action.type) {
            case AppActions.GETAPPLIST:
                return {
                    ...state,
                    list: action.data
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

