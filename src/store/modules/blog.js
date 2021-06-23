export default {
    state: () => ({
        headline: {},
        posts: [],
        latestPost: {},
        loadinPosts: false,
        postsEnd: false,
        curPost: {}
    }),
    getters: {
        GET_HEADLINE(state) {
            return state.headline
        },
        GET_POSTS(state) {
            return state.posts
        },
        GET_LATEST_POST(state) {
            return state.latestPost
        },
        GET_LOADING_POSTS(state) {
            return state.loadinPosts
        },
        GET_POSTS_END(state) {
            return state.postsEnd
        },
        GET_CUR_POST(state) {
            return state.curPost
        }
    },
    mutations: {
        SET_HEADLINE(state, payload) {
            state.headline = payload
        },
        SET_POSTS(state, payload) {
            state.posts.push(payload)
        },
        SET_LATEST_POST(state, payload) {
            state.latestPost = payload
        },
        SET_LOADING_POSTS(state, payload) {
            state.loadinPosts = payload
        },
        SET_POSTS_END(state, payload) {
            state.postsEnd = payload
        },
        SET_CUR_POST(state, payload) {
            state.curPost = payload
        }
    },
    actions: {
        fetchHeadline({commit}, db) {
            db.collection("headline").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    commit('SET_HEADLINE', { id: doc.id, line: doc.data().line })
                });
            });
        },
        fetchPosts({ commit }, db) {
            commit('SET_LOADING_POSTS', true)
            db.collection("blog-posts").orderBy("post-number", "desc").limit(10).get().then((querySnapshot) => {
                commit('SET_LATEST_POST', querySnapshot.docs[0].data())
                querySnapshot.forEach((doc) => {
                    commit('SET_POSTS', { id: doc.id, data: doc.data() })
                    if (doc.data()["post-number"] == 1) {
                        commit('SET_POSTS_END', true)
                    }
                });
                setTimeout(() => {
                    commit('SET_LOADING_POSTS', false)
                }, 1000);
            })
        }
    }
}