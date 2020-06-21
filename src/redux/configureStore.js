import { createStore } from 'redux';

export const configureStore = () => {
    const store = createStore((state,action)=>{
        return state;
    });
    return store;
}