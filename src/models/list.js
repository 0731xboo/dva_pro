export default {
    //命名空间
    namespace: 'list',
    // 当前 models的状态
    state: {
        listArr: ['青花瓷', '兰亭序', '稻香', '花海']
    },
    //    订阅数据源,可以在此处监听键盘事件,路由监听
    subscriptions: {
        setup({ dispatch, payload }) {
        },
    },
    //异步操作
    effect: {
        //call 访问外部数据,调用异步请求
        //put 唤醒 reducers中的actions  类似 diapatch
        *fetch({ payload }, { put, call }) {
            // yield call()
            yield put()
        }
    },
    //同步操作 方法
    reducers: {
        deleteItem(state, action) {
            console.log(action);
            // console.log(payload);
            console.log(state.listArr === action.listArr);
            return { ...state, listArr: [...action.listArr] }
        }

    }
}