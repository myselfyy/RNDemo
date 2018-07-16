// async function api (opt) {
const api = async (opt) => {
    try {
        let resp = await FetchApi(opt);
        let data = resp.json();
        return data;
    } catch(e) {
        console.log("发生错误啦！", e, JSON.stringify(e));
    }
};

// //fetch请求函数
const FetchApi = (opt) => {
    let dataBool = Object.keys(opt.data).length > 0;
    let newData = dataBool ? transformParam(opt) : {};
    fetch(opt.url, {
        method: opt.method ? opt.method : 'GET',
        headers: opt.headers ? opt.headers : {},
        body: newData,
        mode: opt.mode ? opt.mode : '',
        credentials: opt.credentials ? opt.credentials : '',
        cache: opt.cache ? opt.cache : 'default',
        redirect: opt.redirect ? opt.redirect : 'manual',
        referrer: opt.referrer ? opt.referrer : 'client'
    })  
};

//根据header中content-type不同，处理传参
const transformParam = (opt) => {
    if(opt.headers['Content-Type'] && opt.headers['Content-Type'] == 'application/x-www-form-urlencoded') {
        const Form = new FormData();
        for(let key in opt.data) {
            Form.append(key, value);
        }
        return Form;
    }

    // if(opt.headers['Content-Type'] == 'application/json') {
    //     return JSON.stringify(opt.data);
    // }

    //默认返回json格式数据
    return JSON.stringify(opt.data);

};

export default api;