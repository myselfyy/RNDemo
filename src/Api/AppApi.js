
import Actions from '../Actions/AppActions';

const AppApi = {
    getList: function() {
        // config.api({
        //     url: 'https://lc-OnsG2j7w.cn-n1.lcfile.com/fb7da6ab50a0975fc195.json'
        // }).then((resp) => {
        //     console.log(resp);
        // })
        let getData = [
            '1111',
            '2222',
            '333'
        ];
        Actions.getAppList(getData);
    }
}

export default AppApi;