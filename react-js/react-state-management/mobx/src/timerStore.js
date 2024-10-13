import { makeAutoObservable } from 'mobx';

const timerStore = {
    time: 0,
    isRunning: false,

    startTimer() {
        this.isRunning = true;
        this.incrementTime();
    },

    stopTimer() {
        this.isRunning = false;
    },

    incrementTime() {
        if (this.isRunning) {
            setInterval(() => {
                if (this.isRunning) {
                    this.time += 1;
                }
            }, 1000);
        }
    },
};

makeAutoObservable(timerStore);

export default timerStore;
