import Vue from 'vue'
import Vuex from 'vuex'

//导入模块
import index_module from './index_module/index'
// 定义state
const state = {

}
// 定义getters
const getters = {

}
// 定义mutations
const mutations = {

}
// 定义actions
const actions = {

}

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        // index就是命名空间,在组件中,...mapActions("index", ["getSubjectData"])对应了index
        index: index_module
    }
})