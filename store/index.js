import Vuex from 'vuex';

const createStore = () =>{
    return new Vuex.Store({
        state:{
            loadedPosts:[]
        },
        mutations:{
            setPosts(state, posts){
                state.loadedPosts = posts
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                      vuexContext.commit('setPosts', [
                          {
                            id: '1',
                            title: "First Post",
                            previewText:"This is may first Post",
                            thumbnail:"https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg"
                          },
                          {
                            id: '2',
                            title: "Second Post",
                            previewText:"This is may second Post",
                            thumbnail:"https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg"
                          },
                          {
                            id: '3',
                            title: "Third Post",
                            previewText:"This is may third Post",
                            thumbnail:"https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg"
                          }
                        ])
                        resolve();
                    }, 1000);
                });
            },
            setPosts(vuexContext, posts){
                vuexContext.commit("setPosts", posts);
            }
        },
        getters:{
            loadedPosts(state){
                return state.loadedPosts
            }
        },
    })
}

export default createStore