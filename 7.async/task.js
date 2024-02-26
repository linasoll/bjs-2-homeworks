class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
          throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(element => element.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
        callback: callback,
        time: time,
        canCall: true,
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(element => element.time !== time);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    start() {
        if (this.intervalId !== null) {
            return;
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(element => {
              if (element.time === currentTime && element.canCall) {
                element.canCall = false;
                element.callback();
              }
            });
          }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => {
            element.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}