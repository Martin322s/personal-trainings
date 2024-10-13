import { makeAutoObservable } from 'mobx';

const counterStore = {
    count: 0,

    increment() {
        this.count += 1;
    },

    decrement() {
        this.count -= 1;
    },
};

makeAutoObservable(counterStore);

export default counterStore;