function solve() {
    const hasClima = (obj) => {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = function () {
            if (this.temp < this.tempSettings) {
                this.temp++;
            } else if (this.tempSettings < this.temp) {
                this.temp--;
            }
        }
    }

    const hasAudio = (obj) => {
        obj.currentTrack = null;
        obj.nowPlaying = function () {
            if (this.currentTrack) {
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
            }
        }
    }

    const hasParktronic = (obj) => {
        obj.checkDistance = function (distance) {
            if (distance < 0.1) {
                console.log('Beep! Beep! Beep!');
            } else if (0.1 <= distance && distance < 0.25) {
                console.log('Beep! Beep!');
            } else if (0.25 <= distance && distance < 0.50) {
                console.log('Beep!');
            }
        }
    }

    return {
        hasClima,
        hasAudio,
        hasParktronic
    }
}