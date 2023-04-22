class Stereo {
    constructor() {
        this.volume = 50;
        this.isOn = false;
        this.station = 'AM';
    }

    powerSwitch() {
        this.isOn = this.isOn ? false : true;
    }

    volumeUp() {
        switch(this.isOn) {
            case true:
                if (this.volume < 100) {
                    this.volume += 10;
                }
                else {
                    this.volume = 100;
                }
                break;
            case false:
                break;
        }
    }

    volumeDown() {
        switch(this.isOn) {
            case true:
                if (this.volume > 0) {
                    this.volume -= 10;
                }
                else {
                    this.volume = 0;
                }
                break;
            case false:
                break;
        }
    }

    stationSwitch() {
        switch(this.isOn) {
            case true:
                if (this.station === 'AM') {
                    this.station = 'FM';
                }
                else if (this.station === 'FM') {
                    this.station = 'XM';
                }
                else {
                    this.station = 'AM';
                }
                break;
            case false:
                break;
        }
    }
}