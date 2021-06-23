export default {
    state: () => ({
        headline: {},
        posts: [],
    }),
    getters: {
        GET_HEADLINE(state) {
            return state.headline
        },
        GET_POSTS(state) {
            return state.posts
        }
    },
    mutations: {
        SET_HEADLINE(state, payload) {
            state.headline = payload
        },
        SET_POSTS(state, payload) {
            state.posts.push(payload)
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
            db.collection("blog-posts").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    commit('SET_POSTS', { id: doc.id, data: doc.data() })
                });
            });
        }
    }
}