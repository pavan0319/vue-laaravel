import { createStore } from "vuex";


const store = createStore({
    state: {
        user: {
            data: { name: 'pavan' }
        }
    }
})

export default store;