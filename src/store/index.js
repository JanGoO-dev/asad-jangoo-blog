import { createStore } from 'vuex'
import blog from './modules/blog'

const store = createStore({
    modules: {
        blog
    }
})

export default store