
import { fetch } from '@/config/fetch.js'

export default {
    namespaced: true,
    state: {
        // 栏目数据(默认数据)
        indexColumn: [
            {classname: '推荐', classid: 0, classpath: 'news_recommend' }
        ]
    },
    getters: {
        indexColumn: state => {
            return state.indexColumn
        }
    },
    mutations: {
        set_indexColumn(state, arr) {
            state.indexColumn = arr
        }
    },
    actions: {
        // 获取首页的某项数据(主题域名称) 政策,产业,旅游...
        async getSubjectData({ commit, state, dispatch }) {
            let res
            // 此处使用封装axios的http请求方法
            let json = await fetch('post', 'SubjectID')
            // 对象展开,第一项是默认,第二项是ajax请求的数据
            res = [...state.indexColumn, ...json]   // 对象数组
            // ajax请求完毕提交mutations
            commit('set_indexColumn', res)
            // return res
        }
    }
}