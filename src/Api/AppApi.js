
import Actions from '../Actions/AppActions';

const AppApi = {
     getList: async function () {
        const Data = await config.api({
            url: 'https://lc-OnsG2j7w.cn-n1.lcfile.com/fb7da6ab50a0975fc195.json'
        })
        Actions.getAppList(Data);
    }
}

export default AppApi;